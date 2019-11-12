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
            }

            if (this.assetId) {
                continue;
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
        let totalIssued = item['totalIssued'] / CurrencyEnum.getContractPow(CurrencyEnum.USD_N);
        let contractBalance = item['contractBalance'] / CurrencyEnum.getContractPow(CurrencyEnum.USD_N)
        return {
            totalIssued: totalIssued,
            contractBalance: contractBalance,
            totalUsed: _round(totalIssued - contractBalance, 2),
        };
    }

    async _request(url) {
        let result = null;
        try {
            result = await axios.get(`${this.transport.nodeUrl}/${url}`);
        } catch (err) {
            this.logger.error(`NeutrinoBalanceListener Error on fetch balance: url - ${String(url)}, ${String(err.stack || err)}`);
            // throw err;
        }
        return result.data;
    }

};
