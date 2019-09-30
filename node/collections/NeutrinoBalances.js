const _orderBy = require('lodash/orderBy');
const _round = require('lodash/round');
const axios = require('axios');
const CurrencyEnum = require('../enums/CurrencyEnum');

const BaseCollection = require('../base/BaseCollection');

module.exports = class NeutrinoBalances extends BaseCollection {

    constructor() {
        super(...arguments);
        this.assetId = '';
    }

    getKeys() {
        return [
            'neutrino_asset_id',
        ];
    }

    async updateAll(nodeData) {
        this.logger.debug('Update all items of ' + this.collectionName + ' collection... ');

        for (let nodeKey in nodeData) {
            if (nodeKey.match(this.getKeys()[0])) {
                this.assetId = nodeData[nodeKey];
                break;
            }
        }

        const data = {
            [this.pairName]: {},
        };

        const totalIssued = await this._request(`assets/details/${this.assetId}`);
        data[this.pairName]['totalIssued'] = totalIssued.quantity;

        const contractBalance = await this._request(`assets/balance/${this.dApp[this.pairName]}/${this.assetId}`);
        data[this.pairName]['contractBalance'] = contractBalance.balance;

        await this._updateNext(Object.keys(data), data);
    }

    /**
     * @returns {Promise}
     */
    async getBalances() {
        let items = await this.getItem(this.pairName);
        return items;
    }

    async _prepareItem(currency, item) {
        return {
            totalIssued: item['totalIssued'] / Math.pow(10, 8),
            contractBalance: item['contractBalance'] / Math.pow(10, 8),
            totalUsed: _round((item['totalIssued'] - item['contractBalance']) / Math.pow(10, 8), 2),
        };
    }

    async _request(url) {
        let result = null;
        try {
            result = await axios.get(`${this.transport.nodeUrl}/${url}`);
        } catch (e) {
            this.logger.error(`NeutrinoBalanceListner Error on fetch balance: ${String(e)}`);
            throw e;
        }
        return result.data;
    }

};
