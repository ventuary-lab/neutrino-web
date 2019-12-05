const _get = require('lodash/get');
const BaseCollection = require('../base/BaseCollection');
const CurrencyEnum = require('../enums/CurrencyEnum');

module.exports = class RpdUserHistoryBalances extends BaseCollection {


    getKeys(id = '([A-Za-z0-9]{44}_[A-Za-z0-9]{35}_[0-9]{1,4})$') {
        return [
            `rpd_balance_${id}`, //rpd_balance_{assetId}_{userId}_{historySyncIndex}
        ];
    }

    async getBalance(id) {
        const item = await this.getItem(id);

        return _get(item, 'balance', 0);
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
