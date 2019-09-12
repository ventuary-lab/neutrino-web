const collections = require('../collections');
const ContractEnum = require('./ContractEnum');

module.exports = class CollectionEnum {

    static BONDS_ORDERS = 'bonds_orders';

    static getKeys() {
        return [
            this.BONDS_ORDERS,
        ];
    }

    static getClass(name) {
        const map = {
            [this.BONDS_ORDERS]: collections.BondsOrders,
        };
        return map[name] || null;
    }

    static getContractName(name) {
        const map = {
            [this.BONDS_ORDERS]: ContractEnum.AUCTION,
        };
        return map[name] || null;
    }

};
