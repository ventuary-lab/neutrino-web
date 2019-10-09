const _orderBy = require('lodash/orderBy');
const _round = require('lodash/round');

const PairsEnum = require('../enums/PairsEnum');
const OrderTypeEnum = require('../enums/OrderTypeEnum');
const OrderStatusEnum = require('../enums/OrderStatusEnum');
const BaseCollection = require('../base/BaseCollection');
const CurrencyEnum = require('../enums/CurrencyEnum');


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
        orders = orders.filter(order => order.discountPercent > 0 && order.discountPercent < 100); // Fix data
        orders = _orderBy(orders, 'height', 'desc');

        return orders;
    }

    /**
     * @returns {Promise}
     */
    async getOpenedOrders() {
        // let orders = await this.getOrders();
        let orders = await this.getItemsAll();
        orders = orders.filter(order => order.index !== null);
        orders = _orderBy(orders, 'index', 'asc');
        return orders;
    }

    async getUserOpenedOrders(address) {
        let orders = await this.getOpenedOrders();
        return orders.filter(order => order.owner === address && order.status === OrderStatusEnum.NEW);
    }

    async getUserHistoryOrders(address) {
        let orders = await this.getOrders();
        return orders.filter(order => order.owner === address && order.index === null);
    }

    async _prepareItem(id, item) {
        const index = item.orderbook.split('_').filter(Boolean).indexOf(id);
        const height = item['order_height_' + id];
        const price = item['order_price_' + id] || 0;
        const total = item['order_total_' + id] || 0;
        const filledTotal = item['order_filled_total_' + id] || 0;
        return {
            height,
            timestamp: (await this.heightListener.getTimestamps([height]))[height],
            owner: item['order_owner_' + id],
            price,
            total: _round(total /  CurrencyEnum.getContractPow(CurrencyEnum.USD_N), 2),
            filledTotal: _round(filledTotal /  CurrencyEnum.getContractPow(CurrencyEnum.USD_N), 2),
            restTotal: _round((total - filledTotal) /  CurrencyEnum.getContractPow(CurrencyEnum.USD_N), 2),
            status: item['order_status_' + id],
            index: index !== -1 ? index : null,
            amount: _round(total / (price *  CurrencyEnum.getContractPow(CurrencyEnum.USD_N) / 100), 2),
            filledAmount: _round(filledTotal / (price *  CurrencyEnum.getContractPow(CurrencyEnum.USD_N) / 100), 2),
            restAmount: _round((total - filledTotal) / (price * CurrencyEnum.getContractPow(CurrencyEnum.USD_N) / 100), 2),
            discountPercent: 100 - price,
            pairName: this.pairName,
            type: OrderTypeEnum.BUY,
        };
    }

    async _postProcessItem(id, item) {
        return {
            ...item,
            id,
        };
    }

};
