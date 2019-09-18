const _orderBy = require('lodash/orderBy');
const _round = require('lodash/round');

const BaseCollection = require('../base/BaseCollection');

module.exports = class NeutrinoPrices extends BaseCollection {

    getKeys(id = '([0-9]{6,8})$') {
        return [
            `price_${id}`,
        ];
    }

    /**
     * @returns {Promise}
     */
    async getPrices() {
        let items = await this.getItemsAll();
        items = _orderBy(items, 'height', 'asc');
        return items;
    }

    async _prepareItem(height, item) {
        return {
            timestamp: (await this.heightListener.getTimestamps([height]))[height],
            price: _round(item['price_' + height] / 100, 2),
        };
    }

    async _postProcessItem(height, item) {
        return {
            ...item,
            height,
        };
    }

};
