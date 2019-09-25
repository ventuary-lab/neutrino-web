
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
            'neutrino-blocked': item['neutrino_' + id] / Math.pow(10, 8),
            'waves-blocked': item['waves_' + id] / Math.pow(10, 8),
            'unblock-block': item['balance_block_' + id] + 2,
            height: item['height']
        }
    }
};
