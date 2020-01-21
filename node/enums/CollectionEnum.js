const collections = require('../collections');
const ContractEnum = require('./ContractEnum');

module.exports = class CollectionEnum {

    static BONDS_ORDERS = 'bonds_orders';
    // static BONDS_ORDERS_HISTORY = 'bonds_orders_history';
    static NEUTRINO_ORDERS = 'neutrino_orders';
    static NEUTRINO_BALANCES = 'neutrino_balances';
    static NEUTRINO_WITHDRAW = 'neutrino_withdraw';
    static RPD_BALANCES = 'rpd_balances';
    static RPD_HISTORY_BALANCES = 'rpd_history_balances';
    static RPD_USER_BALANCES = 'rpd_user_balances';
    static RPD_USER_HISTORY_BALANCES = 'rpd_user_history_balances';
    static RPD_PROFIT = 'rpd_profit';
    static RPD_NEXT_INDEX = 'rpd_next_index';
    static RPD_INDEX_NUMBERS = 'rpd_index_numbers';
    static RPD_IS_CLAIMED = 'rpd_is_claimed';
    static CONTROL_CONFIG = 'control_config';

    static getKeys() {
        return [
            this.BONDS_ORDERS,
            // this.BONDS_ORDERS_HISTORY,
            this.NEUTRINO_ORDERS,
            this.CONTROL_CONFIG,
            this.NEUTRINO_BALANCES,
            this.NEUTRINO_WITHDRAW,
            this.RPD_BALANCES,
            this.RPD_HISTORY_BALANCES,
            this.RPD_USER_BALANCES,
            this.RPD_USER_HISTORY_BALANCES,
            this.RPD_PROFIT,
            this.RPD_NEXT_INDEX,
            this.RPD_INDEX_NUMBERS,
            this.RPD_IS_CLAIMED,
        ];
    }

    static getClass(name) {
        const map = {
            [this.BONDS_ORDERS]: collections.BondsOrders,
            // [this.BONDS_ORDERS_HISTORY]: collections.BondsOrdersHistory,
            [this.NEUTRINO_ORDERS]: collections.NeutrinoOrders,
            [this.NEUTRINO_BALANCES]: collections.NeutrinoBalances,
            [this.NEUTRINO_WITHDRAW]: collections.NeutrinoWithdraw,
            [this.RPD_BALANCES]: collections.RpdBalances,
            [this.RPD_HISTORY_BALANCES]: collections.RpdHistoryBalances,
            [this.RPD_USER_BALANCES]: collections.RpdUserBalances,
            [this.RPD_USER_HISTORY_BALANCES]: collections.RpdUserHistoryBalances,
            [this.RPD_PROFIT]: collections.RpdProfit,
            [this.RPD_NEXT_INDEX]: collections.RpdNextIndex,
            [this.RPD_INDEX_NUMBERS]: collections.RpdIndexNumbers,
            [this.RPD_IS_CLAIMED]: collections.RpdIsClaimed,
            [this.CONTROL_CONFIG]: collections.ControlConfig,
        };
        return map[name] || null;
    }

    static getContractName(name) {
        const map = {
            [this.BONDS_ORDERS]: ContractEnum.AUCTION,
            // [this.BONDS_ORDERS_HISTORY]: ContractEnum.AUCTION,
            [this.NEUTRINO_ORDERS]: ContractEnum.LIQUIDATION,
            [this.NEUTRINO_BALANCES]: ContractEnum.NEUTRINO,
            [this.NEUTRINO_WITHDRAW]: ContractEnum.NEUTRINO,
            [this.RPD_BALANCES]: ContractEnum.RPD,
            [this.RPD_HISTORY_BALANCES]: ContractEnum.NEUTRINO,
            [this.RPD_USER_BALANCES]: ContractEnum.RPD,
            [this.RPD_USER_HISTORY_BALANCES]: ContractEnum.RPD,
            [this.RPD_PROFIT]: ContractEnum.NEUTRINO,
            [this.RPD_NEXT_INDEX]: ContractEnum.NEUTRINO,
            [this.RPD_INDEX_NUMBERS]: ContractEnum.RPD,
            [this.RPD_IS_CLAIMED]: ContractEnum.RPD,
            [this.CONTROL_CONFIG]: ContractEnum.CONTROL,
        };
        return map[name] || null;
    }

};
