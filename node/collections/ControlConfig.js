const _round = require('lodash/round');
const Sentry = require('@sentry/node');

const BaseCollection = require('../base/BaseCollection');

module.exports = class ControlConfig extends BaseCollection {


    constructor() {
        super(...arguments);
        this.price = '';
        this.isBlocked = undefined;
    }

    getKeys() {
        return [
            'price',
            'is_blocked',
        ];
    }

    /**
     * @returns {Promise}
     */
    async getConfig() {
        let items = await this.getItem(this.pairName);
        return items;
    }

    async updateAll(nodeData) {
        this.logger.debug('Update all items of ' + this.collectionName + ' collection... ');

        for (let nodeKey in nodeData) {
            const currentKeys = this.getKeys();
            const [priceKey, isBlockedKey] = currentKeys;

            if (!currentKeys.includes(nodeKey)) {
                continue;
            }

            if (nodeKey.match(priceKey)) {
                this.price = nodeData[nodeKey];
            }

            if (nodeKey.match(isBlockedKey)) {
                this.isBlocked = nodeData[nodeKey] === 'true';
            }
        }

        const data = {
            [this.pairName]: {},
        };

        data[this.pairName]['price'] = this.price;
        data[this.pairName]['isBlocked'] = Boolean(this.isBlocked);

        await this._updateNext(Object.keys(data), data);
    }

    async _prepareItem(currency, item) {

        return {
            price: _round(item['price'] / 100, 2),
            isBlocked: item['isBlocked'],
        };
    }
};
