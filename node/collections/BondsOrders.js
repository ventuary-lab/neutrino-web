const _orderBy = require('lodash/orderBy');
const _round = require('lodash/round');

// const PairsEnum = require('../enums/PairsEnum');
const OrderTypeEnum = require('../enums/OrderTypeEnum');
// const OrderStatusEnum = require('../enums/OrderStatusEnum');
const BaseCollection = require('../base/BaseCollection');
const CurrencyEnum = require('../enums/CurrencyEnum');
const { getOpenedOrders } = require('./helpers');

module.exports = class BondsOrders extends BaseCollection {
    getKeys(id = '([A-Za-z0-9]{40,50})') {
        return [
            `order_height_${id}`,
            `order_owner_${id}`,
            `order_price_${id}`,
            `order_total_${id}`,
            `order_filled_total_${id}`,
            `order_status_${id}`,

            `order_prev_${id}`,
            `order_next_${id}`,
            'order_first'
        ];
    }

    async getItemsAll () {
        try {
            return await this.postgresService.getBondsOrders();
        } catch (err) {
            console.log(err);
            return [];
        }
    }

    /**
     * @returns {Promise}
     */
    async getOrders() {
        let orders = await this.getItemsAll();
        orders = getOpenedOrders(orders);

        orders = _orderBy(orders, 'height', 'desc');
        return orders;
    }

    /**
     * @returns {Promise}
    */
    async getOpenedOrders() {
        const orders = await this.getItemsAll();
        return getOpenedOrders(orders);
    }

    async getUserOpenedOrders(address) {
        try {
            return await this.postgresService.getUserOpenedBondsOrders(address);
        } catch (err) {
            console.log(err)
            return [];
        }
        // let orders = await this.getOpenedOrders();

        // return orders.filter(
        //     order => order.owner === address && order.status === OrderStatusEnum.NEW
        // );
    }

    async getUserHistoryOrders(address) {
        // let orders = await this.getOrders();
        // return orders.filter(order => order.owner === address && order.index === null);
        try {
            return await this.postgresService.getUserHistoryBondsOrders(address);
        } catch (err) {
            console.log(err)
            return [];
        }
    }

    async _prepareItem(id, item) {
        const orderNext = item['order_next_' + id] || null;
        const orderPrev = item['order_prev_' + id] || null;

        const height = item['order_height_' + id];
        const price = item['order_price_' + id] || 0;
        const total = item['order_total_' + id] || 0;
        const filledTotal = item['order_filled_total_' + id] || 0;
        
        return {
            height,
            timestamp: (await this.heightListener.getTimestamps([height]))[height],
            owner: item['order_owner_' + id],
            price: Number(price),
            total: _round(total / CurrencyEnum.getContractPow(CurrencyEnum.WAVES), 2),
            filledTotal: _round(filledTotal / CurrencyEnum.getContractPow(CurrencyEnum.WAVES), 2),
            restTotal: _round((total - filledTotal) / CurrencyEnum.getContractPow(CurrencyEnum.WAVES), 2),
            status: item['order_status_' + id],
            amount: _round(total / (price * CurrencyEnum.getContractPow(CurrencyEnum.WAVES) / 100)), // Bonds amount
            filledAmount: _round(filledTotal / (price * CurrencyEnum.getContractPow(CurrencyEnum.WAVES) / 100), 2),
            restAmount: _round((total - filledTotal) / (price * CurrencyEnum.getContractPow(CurrencyEnum.WAVES) / 100), 2),
            pairName: this.pairName,
            orderNext,
            orderPrev,
            isFirst: id == item.order_first,
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
