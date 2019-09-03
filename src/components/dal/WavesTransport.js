const {broadcast, nodeInteraction, invokeScript, waitForTx, seedUtils} = require('@waves/waves-transactions');
const _isArray = require('lodash/isArray');
const _isString = require('lodash/isString');
const _isInteger = require('lodash/isInteger');
const _isObject = require('lodash/isObject');
// const _trim = require('lodash/trim');
// const _escapeRegExp = require('lodash/escapeRegExp');
// const axios = require('axios');
import _toInteger from 'lodash-es/toInteger';
import BalanceCurrencyEnum from 'enums/BalanceCurrencyEnum';

const process400 = resp => resp.status === 400
    ? Promise.reject(Object.assign(new Error(), resp.data))
    : resp;
const validateStatus = status => status === 400 || status >= 200 && status < 300;

export default class WavesTransport {

    constructor(dal) {
        this.dal = dal;
        this.isKeeperAvailable = null;
        this.start = Date.now();

        this.nodeUrl = 'https://testnode1.wavesnodes.com';
        this.wvs = 100000000;
        this.fee = 0.009;
        this.isKeeperAvailable = null;
        this.start = Date.now();

        this._cacheData = null;
        this._cacheTimeout = null;
        this._cacheCallbacks = null;

        this._height = null;
        this._heightTimeout = null;
        this._heightCallbacks = null;
    }


    static convertValueToJs(value) {
        return _isString(value) && ['{', '['].includes(value.substr(0, 1))
            ? JSON.parse(value)
            : value;
    }

    async getBalance(address) {
        const bondAssetId = await this.nodeFetchKey('bond_asset_id');
        const neutrinoAssetId = await this.nodeFetchKey('neutrino_asset_id');

        return {
            [BalanceCurrencyEnum.WAVES]: _toInteger(await nodeInteraction.balance(address, this.nodeUrl) / this.wvs),
            [BalanceCurrencyEnum.USD_N]: _toInteger(await nodeInteraction.assetBalance(neutrinoAssetId, address, this.nodeUrl) / this.wvs),
            [BalanceCurrencyEnum.USD_NB]: _toInteger(await nodeInteraction.assetBalance(bondAssetId, address, this.nodeUrl)),
        };
    }

    /**
     * Get WavesKeeper from window
     * @returns {Promise}
     */
    async getKeeper() {
        const checker = resolve => {
            if (this.isKeeperAvailable === true || window.WavesKeeper && window.WavesKeeper.publicState) {
                this.isKeeperAvailable = true;
                resolve(window.WavesKeeper);

            } else if (this.isKeeperAvailable === false || Date.now() - this.start > 3000) {
                this.isKeeperAvailable = false;
                resolve(null);
            }
            else if (this.isKeeperAvailable === null) {
                setTimeout(() => checker(resolve), 100);
            }
        };
        return new Promise(checker);
    }

    /**
     * Get node data by key
     * @param {string} key
     * @param {boolean} isAuction
     * @returns {Promise<null|string | number | boolean>}
     */
    async nodeFetchKey(key, isAuction = false) {
        let result = null;
        if (this._cacheData) {
            result = {
                key,
                value: this._cacheData[key],
            };
        } else {
            try {
                result = await nodeInteraction.accountDataByKey(key, isAuction ? this.dal.auctionAddress : this.dal.neutrinoAddress, this.nodeUrl);
            } catch (e) {
                console.warn(e); // eslint-disable-line no-console
                return null;
            }
        }

        return result ? WavesTransport.convertValueToJs(result.value) : null;
    }

    /**
     * Get node data by multiple keys
     * @param {string[]} keys
     * @returns {Promise<null|string | number | boolean>}
     */
    // async nodeFetchKeys(keys) {
    //     const regexpKeys = keys.map(key => _escapeRegExp(key));
    //     const regexp = new RegExp('^(' + regexpKeys.join('|') + ')$');
    //     const data = await this.nodeFetchPattern(regexp);
    //
    //     return keys.map(key => data[key] || null);
    // }
    //
    // async nodeFetchPattern(regexp) {
    //     if (this._cacheData) {
    //         const data = {};
    //         Object.keys(this._cacheData)
    //             .filter(key => regexp.test(key))
    //             .forEach(key => {
    //                 data[key] = this._cacheData[key];
    //             });
    //         return data;
    //     }
    //
    //     const matches = encodeURIComponent(_trim(String(regexp), '/'));
    //     const result = await this._accountDataPattern(matches);
    //     const data = {};
    //     result.forEach(item => {
    //         data[item.key] = WavesTransport.convertValueToJs(item.value);
    //     });
    //     return data;
    // }

    async nodeHeight() {
        if (this._height) {
            return this._height;
        }

        // Multi request detector
        if (_isArray(this._heightCallbacks)) {
            return new Promise(resolve => {
                this._heightCallbacks.push(resolve);
            });
        }
        this._heightCallbacks = [];

        // Fetch data
        this._height = await nodeInteraction.currentHeight(this.nodeUrl);

        // Invalidate cache after 30 sec
        if (this._heightTimeout) {
            clearTimeout(this._heightTimeout);
        }
        this._heightTimeout = setTimeout(() => this._height = null, 10000);

        // Call callbacks
        this._heightCallbacks.forEach(resolve => resolve(this._height));
        this._heightCallbacks = null;

        return this._height;
    }

    async nodeAllData(isAuction = false) {
        if (this._cacheData) {
            return this._cacheData;
        }

        // Multi request detector
        if (_isArray(this._cacheCallbacks)) {
            return new Promise(resolve => {
                this._cacheCallbacks.push(resolve);
            });
        }
        this._cacheCallbacks = [];

        // Fetch data
        this._cacheData = {};
        const data = await nodeInteraction.accountData(isAuction ? this.dal.auctionAddress : this.dal.neutrinoAddress, this.nodeUrl);
        Object.keys(data).forEach(key => {
            this._cacheData[key] = WavesTransport.convertValueToJs(data[key].value);
        });

        // Invalidate cache after 30 sec
        if (this._cacheTimeout) {
            clearTimeout(this._cacheTimeout);
        }
        this._cacheTimeout = setTimeout(() => this.resetCache(), 30000);

        // Call callbacks
        this._cacheCallbacks.forEach(resolve => resolve(this._cacheData));
        this._cacheCallbacks = null;

        return this._cacheData;
    }

    // async _accountDataPattern(matches) {
    //     return await axios.get(`addresses/data/${this.dal.dApp}?matches=${matches}`, {
    //         baseURL: this.nodeUrl,
    //         validateStatus
    //     })
    //         .then(process400)
    //         .then(x => x.data);
    // }

    _buildTransaction(method, args, paymentCurrency, paymentAmount, isAuction = false) {
        const transaction = {
            type: 16,
            data: {
                fee: {
                    assetId: 'WAVES',
                    tokens: String(this.fee),
                },
                dApp: isAuction ? this.dal.auctionAddress : this.dal.neutrinoAddress,
                call: {
                    args: args.map(item => ({
                        type: _isInteger(item) ? 'integer' : 'string',
                        value: _isObject(item) ? JSON.stringify(item) : item,
                    })),
                    function: method
                },
                payment: !paymentAmount ? [] : [
                    {
                        assetId: paymentCurrency || 'WAVES',
                        tokens: String(paymentAmount),
                    }
                ],
            },
        };

        if (process.env.NODE_ENV !== 'production') {
            console.log('Transaction:', transaction); // eslint-disable-line no-console
        }

        return transaction;
    }

    /**
     *
     * @param {string} method
     * @param {array} args
     * @param {string} paymentCurrency
     * @param {number} paymentAmount
     * @param {boolean} waitTx
     * @param {boolean} isAuction
     * @returns {Promise}
     */
    async nodePublish(method, args, paymentCurrency, paymentAmount, isAuction = false, waitTx = true) {
        const keeper = await this.getKeeper();
        const result = await keeper.signAndPublishTransaction(this._buildTransaction(method, args, paymentCurrency, paymentAmount, isAuction));
        if (result) {
            if (!waitTx) {
                return result;
            }

            const tx = JSON.parse(result);
            this.dal.log(`Transaction ${tx.id} is published via keeper`);

            return waitForTx(tx.id, {
                apiBase: this.nodeUrl,
                timeout: 10000,
            }).then(() => result);
        }
        return result;

    }
}
