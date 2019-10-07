import Enum from './Enum';

export default class CollectionEnum extends Enum {

    static BONDS_ORDERS = 'bonds_orders';
    static NEUTRINO_ORDERS = 'neutrino_orders';
    static NEUTRINO_PRICES = 'neutrino_prices';
    static NEUTRINO_BALANCES = 'neutrino_balances';
    static NEUTRINO_WITHDRAW = 'neutrino_withdraw';
    static RPD_NEUTRINO_BALANCES = 'rpd_neutrino_balances';
    static RPD_BONDS_BALANCES = 'rpd_bonds_balances';
    static RPD_BALANCES = 'rpd_balances';

    static getKeys() {
        return [
            this.BONDS_ORDERS,
            this.BONDS_ORDERS,
            this.NEUTRINO_PRICES,
            this.NEUTRINO_BALANCES,
            this.NEUTRINO_WITHDRAW,
            this.RPD_NEUTRINO_BALANCES,
            this.RPD_BONDS_BALANCES,
            this.RPD_BALANCES,
        ];
    }

}
