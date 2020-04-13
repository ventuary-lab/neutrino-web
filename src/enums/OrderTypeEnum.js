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
            [this.BUY]: '买入',
            [this.LIQUIDATE]: 'Liquidate',
        };
    }
};
