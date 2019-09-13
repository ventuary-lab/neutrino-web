const PairsEnum = require('../enums/PairsEnum');

const _orderBy = require('lodash/orderBy');
const OrderStatusEnum = require('../enums/OrderStatusEnum');
const BaseCollection = require('../base/BaseCollection');

module.exports = class BondsOrders extends BaseCollection {

    getKeys(id = '([A-Za-z0-9]{44})') {
        return [
            `order_height_${id}`,
            `order_owner_${id}`,
            `order_price_${id}`,
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
        orders = _orderBy(orders, 'position', 'asc');

        return orders;
    }

    /**
     * @returns {Promise}
     */
    async getOpenedOrders() {
        let orders = await this.getOrders();
        return orders.filter(order => order.status === OrderStatusEnum.NEW || order.index !== null);
    }

    async getUserOpenedOrders(address) {
        let orders = await this.getOpenedOrders();
        return orders.filter(order => order.owner === address);
    }

    async getUserHistoryOrders(address) {
        let orders = await this.getOrders();
        return orders.filter(order => order.owner === address && (order.status in [OrderStatusEnum.CANCELED, OrderStatusEnum.FILLED] || order.index === null));
    }

    async _prepareItem(id, item) {
        const index = item.orderbook.split('_').filter(Boolean).indexOf(id);
        return {
            height: item['order_height_' + id],
            owner: item['order_owner_' + id],
            price: item['order_price_' + id],
            total: item['order_total_' + id],
            filledTotal: item['order_filled_total_' + id],
            status: item['order_status_' + id],
            index: index !== -1 ? index : null,
            discountPercent: 100 - item['order_price_' + id],
            pairName: PairsEnum.USDNB_USDN,
        };
    }

};
