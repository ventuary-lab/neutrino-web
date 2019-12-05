
const BaseCollection = require('../base/BaseCollection');
const CurrencyEnum = require('../enums/CurrencyEnum');

module.exports = class NeutrinoWithdraw extends BaseCollection {

    getKeys(id = '([A-Za-z0-9]{30,40})$') {
        return [
            `balance_unlock_block_${id}`,
            `balance_lock_waves_${id}`,
            `balance_lock_neutrino_${id}`,
            'height',
        ];
    }

    async _prepareItem(id, item) {
        return {
            'neutrinoBlocked': item['balance_lock_neutrino_' + id] / CurrencyEnum.getContractPow(CurrencyEnum.USD_N),
            'wavesBlocked': item['balance_lock_waves_' + id] / CurrencyEnum.getContractPow(CurrencyEnum.WAVES),
            'unblockBlock': Number(item['balance_unlock_block_' + id]) + 2,
            height: item['height']
        }
    }
};
