
const BaseCollection = require('../base/BaseCollection');

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
            'neutrinoBlocked': item['neutrino_' + id] / Math.pow(10, 8),
            'wavesBlocked': item['waves_' + id] / Math.pow(10, 8),
            'unblockBlock': item['balance_block_' + id] + 2,
            height: item['height']
        }
    }
};
