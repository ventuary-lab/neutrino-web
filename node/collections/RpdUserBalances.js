
const BaseCollection = require('../base/BaseCollection');
const CurrencyEnum = require('../enums/CurrencyEnum');

module.exports = class RpdUserBalances extends BaseCollection {


    getKeys(id = '([A-Za-z0-9]{44}_[A-Za-z0-9]{35})$') {

        return [
            `rpd_balance_${id}`, //rpd_balance_{assetId}_{userId}
        ];
    }

    async _prepareItem(id, item) {
        const assetId = id.split('_')[0];

        if (!Object.values(this.assets).includes(assetId)) {
            return null;
        }

        const currency = this._getCurrencyByAsset(assetId);

        return {
            'balance': item[`rpd_balance_${id}`] / CurrencyEnum.getContractPow(currency)
        }
    }
};
