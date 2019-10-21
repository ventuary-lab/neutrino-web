import Enum from './Enum';

export default class OrderTypeEnum extends Enum {

    static BUY = 'buy';
    static LIQUIDATE = 'liquidate';

    static getKeys() {
        return [
            this.BUY,
            this.LIQUIDATE,
        ];
    }

    static getLabels() {
        return {
            [this.BUY]: 'Buy',
            [this.LIQUIDATE]: 'Liquidate',
        };
    }
};
