const collections = require('../collections');
const ContractEnum = require('./ContractEnum');

module.exports = class CollectionEnum {

    static BONDS_ORDERS = 'bonds_orders';
    static NEUTRINO_ORDERS = 'neutrino_orders';
    static NEUTRINO_PRICES = 'neutrino_prices';
    static NEUTRINO_BALANCES = 'neutrino_balances';
    static NEUTRINO_WITHDRAW = 'neutrino_withdraw';

    static getKeys() {
        return [
            this.BONDS_ORDERS,
            this.NEUTRINO_ORDERS,
            this.NEUTRINO_PRICES,
            this.NEUTRINO_BALANCES,
            this.NEUTRINO_WITHDRAW,
        ];
    }

    static getClass(name) {
        const map = {
            [this.BONDS_ORDERS]: collections.BondsOrders,
            [this.NEUTRINO_ORDERS]: collections.NeutrinoOrders,
            [this.NEUTRINO_PRICES]: collections.NeutrinoPrices,
            [this.NEUTRINO_BALANCES]: collections.NeutrinoBalances,
            [this.NEUTRINO_WITHDRAW]: collections.NeutrinoWithdraw,
        };
        return map[name] || null;
    }

    static getContractName(name) {
        const map = {
            [this.BONDS_ORDERS]: ContractEnum.AUCTION,
            [this.NEUTRINO_ORDERS]: ContractEnum.NEUTRINO,
            [this.NEUTRINO_PRICES]: ContractEnum.NEUTRINO,
            [this.NEUTRINO_BALANCES]: ContractEnum.NEUTRINO,
            [this.NEUTRINO_WITHDRAW]: ContractEnum.NEUTRINO,
        };
        return map[name] || null;
    }

};
