import Enum from './Enum';

export default class OrderStatusEnum extends Enum {

    static NEW = 'new';
    static FILLED = 'filled';
    static CANCELED = 'canceled';

    static getKeys() {
        return [
            this.NEW,
            this.FILLED,
            this.CANCELED,
        ];
    }

    static getLabels() {
        return {
            [this.NEW]: 'Opened',
            [this.FILLED]: 'Filled',
            [this.CANCELED]: 'Cancelled',
        };
    }
};
