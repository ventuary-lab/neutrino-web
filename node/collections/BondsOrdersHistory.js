const _round = require('lodash/round');

const BaseCollection = require('../base/BaseCollection');


module.exports = class BondsOrdersHistory extends BaseCollection {

    getKeys(id = '([0-9]{6,8})$') {
        return [
            `order_history_${id}`,
        ];
    }

    async _prepareItem(height, item) {

        const price = item['order_history_' + height] || 0;

        return {
            price: _round(price / 100, 2),
            price: price,
            height,
        };
    }
};
