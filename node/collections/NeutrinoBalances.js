const _orderBy = require('lodash/orderBy');
const _round = require('lodash/round');
const axios = require('axios');
const CurrencyEnum = require('../enums/CurrencyEnum');

const BaseCollection = require('../base/BaseCollection');

module.exports = class NeutrinoBalances extends BaseCollection {

    constructor() {
        super(...arguments);
        this.assetId = '';
        this.price = '';
        this.isBlocked = undefined;
    }

    getKeys() {
        return [
            'neutrino_asset_id',
            'price',
            'is_blocked',
        ];
    }

    async updateAll(nodeData) {
        this.logger.debug('Update all items of ' + this.collectionName + ' collection... ');

        for (let nodeKey in nodeData) {
            if (nodeKey.match(this.getKeys()[0])) {
                this.assetId = nodeData[nodeKey];
            }

            if (nodeKey.match(`${this.getKeys()[1]}$`)) {
                this.price = nodeData[nodeKey];
            }

            if (nodeKey.match(this.getKeys()[2])) {
                this.isBlocked = nodeData[nodeKey];
            }

            if (this.price && this.assetId && this.isBlocked !== undefined) {
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

        data[this.pairName]['price'] = this.price;
        data[this.pairName]['isBlocked'] = this.isBlocked === undefined ? false : this.isBlocked;

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
        let totalIssued =  item['totalIssued'] / CurrencyEnum.getContractPow(CurrencyEnum.USD_N);
        let contractBalance = item['contractBalance'] / CurrencyEnum.getContractPow(CurrencyEnum.WAVES)
        return {
            totalIssued: totalIssued,
            contractBalance: contractBalance,
            totalUsed: _round(totalIssued - contractBalance, 2),
            price: _round(item['price'] / 100, 2),
            isBlocked: item['isBlocked'],
        };
    }

    async _request(url) {
        let result = null;
        try {
            // console.log('---url: ', `${this.transport.nodeUrl}/${url}`);
            result = await axios.get(`${this.transport.nodeUrl}/${url}`);
            // console.log('---try result', result.data);
        } catch (e) {
            this.logger.error(`NeutrinoBalanceListner Error on fetch balance: ${String(e)}`);
            throw e;
        }

        // console.log('---result', result.data);
        return result.data;
    }

};
