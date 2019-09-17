const _orderBy = require('lodash/orderBy');

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
            price: item['price_' + height],
        };
    }

    async _postProcessItem(height, item) {
        return {
            ...item,
            height,
        };
    }

};
