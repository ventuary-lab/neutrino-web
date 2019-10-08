
const BaseCollection = require('../base/BaseCollection');
const PairsEnum = require('../enums/PairsEnum');

module.exports = class RpdNeutrinoHistoryBalances extends BaseCollection {

    constructor() {
        super(...arguments);
        this.neutrinoAssetId = this.assets[PairsEnum.getQuote(this.pairName)]; //neutrino assetId
    }

    getKeys(id = '([A-Za-z0-9]{35}_[0-9]{1,4})$') {

        // const assetId = '([A-Za-z0-9]{44})';

        return [
            `rpd_balance_${this.neutrinoAssetId}_${id}`,
        ];
    }

    async _prepareItem(id, item) {
        return {
            'balance': item[`rpd_balance_${this.neutrinoAssetId}_${id}`] /  CurrencyEnum.getContractPow(CurrencyEnum.USD_N),,
        }
    }
};
