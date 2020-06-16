const _orderBy = require('lodash/orderBy');
const moment = require('moment');

const OrderTypeEnum = require('../enums/OrderTypeEnum');
const OrderStatusEnum = require('../enums/OrderStatusEnum');
const BaseCollection = require('../base/BaseCollection');
const { mapFieldsToNumber, getOpenedOrders } = require('./helpers');
const CurrencyEnum = require('../enums/CurrencyEnum');

const NSBT_ISSUE_TIMESTAMP = 1583275175580;
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
            `order_price_${id}`,
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
        try {
            let orders = await this.getItemsAll();
            return getOpenedOrders(orders);
        } catch (err) {
            return [];
        }
    }

    async getUserOpenedOrders(address) {
        let orders = await this.getOrders();
        return orders.filter(
            order => order.owner === address && order.status === OrderStatusEnum.NEW
        );
    }

    async getUserHistoryOrders(address) {
        let orders = await this.getOrders();

        return orders
            .filter(order => order.owner === address && order.status !== OrderStatusEnum.NEW)
            .map(order =>
                moment(order.timestamp).isBefore(moment(NSBT_ISSUE_TIMESTAMP))
                    ? {
                          ...order,
                          total: CurrencyEnum.getContractPow(CurrencyEnum.USD_NB) * order.total,
                          restTotal:
                              CurrencyEnum.getContractPow(CurrencyEnum.USD_NB) * order.restTotal,
                      }
                    : order
            );
    }

    async _prepareItem(id, item) {
        const orderNext = item['order_next_' + id] || null;
        const orderPrev = item['order_prev_' + id] || null;
        const price = Number(item['order_price_'+ id]) || 0;

        const height = item['order_height_' + id];
        const timestamp = Number((await this.heightListener.getTimestamps([height]))[height]);
        let total =
            Number(item['order_total_' + id] || 0) /
            CurrencyEnum.getContractPow(CurrencyEnum.USD_NB);
        let filledTotal =
            Number(item['order_filled_total_' + id] || 0) /
            CurrencyEnum.getContractPow(CurrencyEnum.USD_NB);

        return {
            height,
            currency: this.pairName.split('_')[0],
            timestamp: timestamp,
            price,
            owner: item['order_owner_' + id],
            status: item['order_status_' + id],
            total: total,
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
