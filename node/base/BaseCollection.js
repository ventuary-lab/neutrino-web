
module.exports = class BaseCollection {

    constructor(params = {}) {
        this.pairName = params.pairName;
        this.collectionName = params.collectionName;
        this.storage = params.storage;
        this.transport = params.transport;
        this.logger = params.logger;
        this.heightListener = params.heightListener;
        this.updateHandler = params.updateHandler;
        this.updateHandler = params.updateHandler;
        this.dApp = params.dApp;
        this.assets = params.assets;
        this.postgresService = params.postgresService;

        this.STORAGE_KEY_PREFIX = '';
    }

    getKeys() {
        return [];
    }

    getStorageKey() {
        return this.STORAGE_KEY_PREFIX + this.collectionName;
    }

    async _prepareItem(id, item) {
        return item;
    }

    async _postProcessItem(id, item) {
        return item;
    }

    async getItem(id) {
        let item = await this.storage.hget(this.getStorageKey(), id);

        // console.log({ item, id });

        if (!item) {
            return null;
        }

        item = JSON.parse(item);
        item.id = id;
        item = await this._postProcessItem(id, item);

        return item;
    }

    async getItemsAll() {
        const result = await this.storage.hgetall(this.getStorageKey());

        if (!result) {
            return [];
        }

        return Promise.all(
            Object.keys(result).map(async id => {
                let item = JSON.parse(result[id]);
                item.id = id;
                item = await this._postProcessItem(id, item);
                return item;
            })
        );
    }

    async updateAll(nodeData) {

        // Get ids
        const ids = [];
        const idRegexp = new RegExp(this.getKeys()[0]);
        Object.keys(nodeData)
            .forEach(nodeKey => {
                const match = idRegexp.exec(nodeKey);
                if (match && match[1]) {
                    ids.push(match[1]);
                }
            });

        const data = {};

        ids.forEach(id => {
            data[id] = {};

            this.getKeys(id).forEach(key => {
                const keyRegexp = new RegExp(key);

                Object.keys(nodeData)
                    .forEach(nodeKey => {
                        const match = keyRegexp.exec(nodeKey);

                        if (match) {
                            data[id][nodeKey] = nodeData[nodeKey];
                        }
                    });
            });
        });

        await this._updateNext(Object.keys(data), data);
    }

    async removeAll() {
        await this.storage._call('del', this.getStorageKey());
    }

    async updateByKeys(updatedKeys) {
        const ids = [];
        this.getKeys().forEach(key => {
            const regexp = new RegExp(key);
            updatedKeys.forEach(updatedKey => {
                const match = regexp.exec(updatedKey);
                const id = match && match[1];
                if (id && !ids.includes(id)) {
                    ids.push(id);
                }
            });
        });
        if (ids.length > 0) {
            await this._updateNext(ids);
        }
    }

    async _updateNext(ids, data = {}, index = 0) {
        if (ids[index]) {
            await this._updateItem(ids[index], data[ids[index]]);
            await this._updateNext(ids, data, index + 1);
        }
    }

    /**
     * @param {string} id
     * @param {object} data
     * @returns {Promise}
     * @private
     */
    async _updateItem(id, data = null) {
        this.logger.debug('Update item of ' + this.pairName + ':' + this.collectionName + ' collection... ' + id);

        // Fetch data, if not set
        const keys = this.getKeys(id);
        if (!data) {
            data = await this.transport.fetchKeys(keys);
        }
        if (keys.includes('height')) {
            data.height = this.heightListener.getLast();
        }

        // console.log({ data, id });

        // if (id === 'usd-nb_usd-n' && data.price == 1) {
        //     try {
        //         throw new Error('0.01 Price Error occured!' + JSON.stringify({ id, data, colName: this.collectionName }));
        //     } catch (err) {
        //         console.log(err);
        //         Sentry.captureException(err);
        //     } finally {
        //         return;
        //     }
        // }

        const item = await this._prepareItem(id, data);

        if (item) {
            const nextJson = JSON.stringify(item);
            if (this.updateHandler) {
                const prevJson = await this.storage.hget(this.getStorageKey(), id);
                if (!prevJson || prevJson !== nextJson) {
                    this.updateHandler(id, item, this);
                }
            }
            await this.storage.hset(this.getStorageKey(), id, nextJson);
        }
    }

    _getCurrencyByAsset(assetId) {
        return Object.entries(this.assets).find(item => item[1] === assetId)[0];
    }
};
