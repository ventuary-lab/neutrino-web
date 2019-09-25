import Enum from './Enum';

export default class CollectionEnum extends Enum {

    static BONDS_ORDERS = 'bonds_orders';
    static NEUTRINO_ORDERS = 'neutrino_orders';
    static NEUTRINO_PRICES = 'neutrino_prices';
    static NEUTRINO_BALANCES = 'neutrino_balances';
    static NEUTRINO_WITHDRAW = 'neutrino_withdraw';

    static getKeys() {
        return [
            this.BONDS_ORDERS,
            this.BONDS_ORDERS,
            this.NEUTRINO_PRICES,
            this.NEUTRINO_BALANCES,
            this.NEUTRINO_WITHDRAW,
        ];
    }

}
