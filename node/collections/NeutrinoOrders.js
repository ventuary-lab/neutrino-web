const _orderBy = require('lodash/orderBy');

const OrderTypeEnum = require('../enums/OrderTypeEnum');
const BaseCollection = require('../base/BaseCollection');

module.exports = class NeutrinoOrders extends BaseCollection {

    getKeys(id = '([A-Za-z0-9]{40,50})$') {
        return [
            `order_height_${id}`,
            `order_owner_${id}`,
            `order_total_${id}`,
            `order_filled_total_${id}`,
            `order_status_${id}`,
            'orderbook',
        ];
    }

    /**
     * @returns {Promise}
     */
    async getOrders() {
        let orders = await this.getItemsAll();
        orders = _orderBy(orders, 'height', 'desc');
        return orders;
    }

    /**
     * @returns {Promise}
     */
    async getOpenedOrders() {
        let orders = await this.getOrders();
        orders = orders.filter(order => order.index !== null);
        orders = _orderBy(orders, 'index', 'asc');
        return orders;
    }

    async getUserOpenedOrders(address) {
        let orders = await this.getOrders();
        return orders.filter(order => order.owner === address && order.index !== null);
    }

    async getUserHistoryOrders(address) {
        let orders = await this.getOrders();
        return orders.filter(order => order.owner === address && order.index === null);
    }

    async _prepareItem(id, item) {
        const index = item.orderbook.split('_').filter(Boolean).indexOf(id);
        const height = item['order_height_' + id];
        const total = item['order_total_' + id] || 0;
        const filledTotal = item['order_filled_total_' + id] || 0;
        return {
            height,
            currency: this.pairName.split('_')[0],
            timestamp: (await this.heightListener.getTimestamps([height]))[height],
            owner: item['order_owner_' + id],
            status: item['order_status_' + id],
            total,
            restTotal: total - filledTotal,
            index: index !== -1 ? index : null,
            type: OrderTypeEnum.LIQUIDATE,
        };
    }

    async _postProcessItem(id, item) {
        return {
            ...item,
            id,
        };
    }

};
