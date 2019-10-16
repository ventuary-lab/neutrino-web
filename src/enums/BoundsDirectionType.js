import Enum from './Enum';

export default class UserRole extends Enum {

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
            [this.BUY]: __('Buy'),
            [this.LIQUIDATE]: __('Liquidate'),
        };
    }
}
