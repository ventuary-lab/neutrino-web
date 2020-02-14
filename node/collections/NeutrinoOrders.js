const _orderBy = require('lodash/orderBy');

const OrderTypeEnum = require('../enums/OrderTypeEnum');
const OrderStatusEnum = require('../enums/OrderStatusEnum');
const BaseCollection = require('../base/BaseCollection');
const { mapFieldsToNumber, getOpenedOrders } = require('./helpers');

module.exports = class NeutrinoOrders extends BaseCollection {
    getKeys(id = '([A-Za-z0-9]{40,50})$') {
        return [
            `order_height_${id}`,
            `order_owner_${id}`,
            `order_total_${id}`,
            `order_filled_total_${id}`,
            `order_status_${id}`,
            `order_prev_${id}`,
            `order_next_${id}`,
            'order_first',
            'order_last',
        ];
    }

    /**
     * @returns {Promise}
     */
    async getOrders() {
        let orders = await this.getItemsAll();
        orders = orders.map(order => mapFieldsToNumber(order, ['height']));
        orders = _orderBy(orders, 'height', 'desc');
        return orders;
    }

    /**
     * @returns {Promise}
     */
    async getOpenedOrders() {
        let orders = await this.getItemsAll();
        return getOpenedOrders(orders);
    }

    async getUserOpenedOrders(address) {
        let orders = await this.getOrders();
        return orders.filter(
            order => order.owner === address && order.status === OrderStatusEnum.NEW
        );
    }

    async getUserHistoryOrders(address) {
        let orders = await this.getOrders();
        return orders.filter(
            order => order.owner === address && order.status !== OrderStatusEnum.NEW
        );
    }

    async _prepareItem(id, item) {
        const orderNext = item['order_next_' + id] || null;
        const orderPrev = item['order_prev_' + id] || null;

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
            type: OrderTypeEnum.LIQUIDATE,
            orderNext,
            orderPrev,
            isFirst: id == item.order_first,
            isLast: id == item.order_last,
        };
    }

    async _postProcessItem(id, item) {
        return {
            ...item,
            id,
        };
    }
};
