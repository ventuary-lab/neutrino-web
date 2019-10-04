
const BaseCollection = require('../base/BaseCollection');
const PairsEnum = require('../enums/PairsEnum');

module.exports = class RpdNeutrinoBalances extends BaseCollection {

    getKeys(id = '([A-Za-z0-9]{44})$') {
        //id - assetId

        return [
            `rpd_balance_${id}`,
        ];
    }


    _getCurrencyByAsset(assetId) {
        return Object.entries(this.assets).find(item => item[1] === assetId)[0];
    }


    //TODO normal method
    _isBond(assetId) {
        const currency = this._getCurrencyByAsset(assetId);

        return currency.slice(-2) === 'nb'
    }


    async getBalances() {
        const items = await this.getItemsAll();
        return items.map(item => ({
            ...item,
            id: this._getCurrencyByAsset(item.id)
        }));
    }

    async _prepareItem(id, item) {
        return {
            'balance': this._isBond(id)
                ? item[`rpd_balance_${id}`]
                : item[`rpd_balance_${id}`] / Math.pow(10, 8)
        }
    }
};
