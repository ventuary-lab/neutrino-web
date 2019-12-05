
const BaseCollection = require('../base/BaseCollection');
const CurrencyEnum = require('../enums/CurrencyEnum');

module.exports = class RpdBalances extends BaseCollection {

    getKeys(id = '([A-Za-z0-9]{44})$') {
        //id - assetId

        return [
            `rpd_balance_${id}`,
        ];
    }

    async getBalances() {
        const items = await this.getItemsAll();

        return items.map(item => ({
            ...item,
            id: this._getCurrencyByAsset(item.id)
        }));
    }

    async _prepareItem(id, item) {

        if (!Object.values(this.assets).includes(id)) {
            return null;
        }

        const currency = this._getCurrencyByAsset(id);

        return {
            'balance': item[`rpd_balance_${id}`] / CurrencyEnum.getContractPow(currency)
        }
    }
};
