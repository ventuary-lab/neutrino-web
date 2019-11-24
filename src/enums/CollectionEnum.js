import Enum from './Enum';

export default class CollectionEnum extends Enum {

    static BONDS_ORDERS = 'bonds_orders';
    static BONDS_ORDERS_HISTORY = 'bonds_orders_history';
    static NEUTRINO_ORDERS = 'neutrino_orders';
    // static NEUTRINO_PRICES = 'neutrino_prices';
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
            this.BONDS_ORDERS_HISTORY,
            // this.NEUTRINO_PRICES,
            this.NEUTRINO_BALANCES,
            this.NEUTRINO_WITHDRAW,
            this.RPD_HISTORY_BALANCES,
            this.RPD_USER_BALANCES,
            this.RPD_USER_HISTORY_BALANCES,
            this.RPD_PROFIT,
            this.RPD_NEXT_INDEX,
            this.RPD_INDEX_NUMBERS,
            this.RPD_IS_CLAIMED,
            this.CONTROL_CONFIG
        ];
    }

}
