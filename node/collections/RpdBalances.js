
const BaseCollection = require('../base/BaseCollection');
const CurrencyEnum = require('../enums/CurrencyEnum');

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

    async getBalances() {
        const items = await this.getItemsAll();
        return items.map(item => ({
            ...item,
            id: this._getCurrencyByAsset(item.id)
        }));
    }

    async _prepareItem(id, item) {
        const currency = this._getCurrencyByAsset(id);

        return {
            'balance': CurrencyEnum.isBond(currency)
                ? item[`rpd_balance_${id}`]
                : item[`rpd_balance_${id}`] / Math.pow(10, 8)
        }
    }
};
