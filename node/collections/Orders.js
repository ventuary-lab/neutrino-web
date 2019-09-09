const _orderBy = require('lodash/orderBy');

const BaseCollection = require('../base/BaseCollection');

module.exports = class Orders extends BaseCollection {

    getKeys(id = '([A-Za-z0-9]{44})') {
        return [
            `order_height_${id}`,
            `order_owner_${id}`,
            `order_amount_${id}`,
            'orderbook',
        ];
    }

    /**
     * @returns {Promise}
     */
    async getOrders() {
        let orders = await this.getItemsAll();
        orders = _orderBy(orders, 'position', 'asc');
        return orders;
    }

    /**
     * @returns {Promise}
     */
    async getOpenedOrders() {
        let orders = await this.getOrders();
        return orders.filter(order => order.position !== null);
    }

    async _prepareItem(id, item) {
        const index = item.orderbook.split('_').filter(Boolean).indexOf(id);
        return {
            height: item['order_height_' + id],
            owner: item['order_owner_' + id],
            amount: item['order_amount_' + id],
            index: index !== -1 ? index : null,
        };
    }

};
