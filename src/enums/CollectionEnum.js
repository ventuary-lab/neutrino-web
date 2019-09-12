import Enum from './Enum';

export default class CollectionEnum extends Enum {

    static BONDS_ORDERS = 'bonds_orders';

    static getKeys() {
        return [
            this.BONDS_ORDERS,
        ];
    }

}
