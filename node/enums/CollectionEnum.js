const collections = require('../collections');
const ContractEnum = require('./ContractEnum');

module.exports = class CollectionEnum {

    static BONDS_ORDERS = 'bonds_orders';
    static NEUTRINO_ORDERS = 'neutrino_orders';
    static NEUTRINO_PRICES = 'neutrino_prices';

    static getKeys() {
        return [
            this.BONDS_ORDERS,
            this.NEUTRINO_ORDERS,
            this.NEUTRINO_PRICES,
        ];
    }

    static getClass(name) {
        const map = {
            [this.BONDS_ORDERS]: collections.BondsOrders,
            [this.NEUTRINO_ORDERS]: collections.NeutrinoOrders,
            [this.NEUTRINO_PRICES]: collections.NeutrinoPrices,
        };
        return map[name] || null;
    }

    static getContractName(name) {
        const map = {
            [this.BONDS_ORDERS]: ContractEnum.AUCTION,
            [this.NEUTRINO_ORDERS]: ContractEnum.NEUTRINO,
            [this.NEUTRINO_PRICES]: ContractEnum.NEUTRINO,
        };
        return map[name] || null;
    }

};
