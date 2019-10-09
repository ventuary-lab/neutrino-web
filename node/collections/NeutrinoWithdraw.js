
const BaseCollection = require('../base/BaseCollection');
const CurrencyEnum = require('../enums/CurrencyEnum');

module.exports = class NeutrinoWithdraw extends BaseCollection {

    getKeys(id = '([A-Za-z0-9]{35})$') {
        return [
            `neutrino_${id}`,
            `waves_${id}`,
            `balance_block_${id}`,
            'height',
        ];
    }

    async _prepareItem(id, item) {
        return {
            'neutrinoBlocked': item['neutrino_' + id] / CurrencyEnum.getContractPow(CurrencyEnum.USD_N),
            'wavesBlocked': item['waves_' + id] / CurrencyEnum.getContractPow(CurrencyEnum.WAVES),
            'unblockBlock': item['balance_block_' + id] + 2,
            height: item['height']
        }
    }
};
