const collections = require('../collections');
const ContractEnum = require('./ContractEnum');

module.exports = class CollectionEnum {

    static BONDS_ORDERS = 'bonds_orders';
    static NEUTRINO_ORDERS = 'neutrino_orders';
    static NEUTRINO_PRICES = 'neutrino_prices';
    static NEUTRINO_BALANCES = 'neutrino_balances';
    static NEUTRINO_WITHDRAW = 'neutrino_withdraw';
    static RPD_BALANCES = 'rpd_balances'; // total
    static RPD_NEUTRINO_BALANCES = 'rpd_neutrino_balances'; //total for users (neutrino)
    static RPD_NEUTRINO_HISTORY_BALANCES = 'rpd_neutrino_history_balances'; //history of balances for users (neutrino)
    static RPD_BONDS_BALANCES = 'rpd_bonds_balances'; //total for users (bonds)
    static RPD_BONDS_HISTORY_BALANCES = 'rpd_bonds_history_balances'; //history of balances for users (bonds)

    static getKeys() {
        return [
            this.BONDS_ORDERS,
            this.NEUTRINO_ORDERS,
            this.NEUTRINO_PRICES,
            this.NEUTRINO_BALANCES,
            this.NEUTRINO_WITHDRAW,
            this.RPD_BALANCES,
            this.RPD_NEUTRINO_BALANCES,
            this.RPD_NEUTRINO_HISTORY_BALANCES,
            this.RPD_BONDS_BALANCES,
            this.RPD_BONDS_HISTORY_BALANCES,
        ];
    }

    static getClass(name) {
        const map = {
            [this.BONDS_ORDERS]: collections.BondsOrders,
            [this.NEUTRINO_ORDERS]: collections.NeutrinoOrders,
            [this.NEUTRINO_PRICES]: collections.NeutrinoPrices,
            [this.NEUTRINO_BALANCES]: collections.NeutrinoBalances,
            [this.NEUTRINO_WITHDRAW]: collections.NeutrinoWithdraw,
            [this.RPD_BALANCES]: collections.RpdBalances,
            [this.RPD_NEUTRINO_BALANCES]: collections.RpdNeutrinoBalances,
            [this.RPD_NEUTRINO_HISTORY_BALANCES]: collections.RpdNeutrinoHistoryBalances,
            [this.RPD_BONDS_BALANCES]: collections.RpdBondsBalances,
            [this.RPD_BONDS_HISTORY_BALANCES]: collections.RpdBondsHistoryBalances,
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
            [this.RPD_BALANCES]: ContractEnum.RPD,
            [this.RPD_NEUTRINO_BALANCES]: ContractEnum.RPD,
            [this.RPD_NEUTRINO_HISTORY_BALANCES]: ContractEnum.RPD,
            [this.RPD_BONDS_BALANCES]: ContractEnum.RPD,
            [this.RPD_BONDS_HISTORY_BALANCES]: ContractEnum.RPD,
        };
        return map[name] || null;
    }

};
