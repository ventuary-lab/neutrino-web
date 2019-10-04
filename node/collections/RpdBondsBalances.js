
const BaseCollection = require('../base/BaseCollection');
const PairsEnum = require('../enums/PairsEnum');

module.exports = class RpdBoundsBalances extends BaseCollection {

    constructor() {
        super(...arguments);
        this.bondAssetId = this.assets[PairsEnum.getBase(this.pairName)]; //bound assetId
    }

    getKeys(id = '([A-Za-z0-9]{35})$') {
        return [
            `rpd_balance_${this.bondAssetId}_${id}`,
        ];
    }

    async _prepareItem(id, item) {
        return {
            'balance': item[`rpd_balance_${this.bondAssetId}_${id}`]
        }
    }
};
