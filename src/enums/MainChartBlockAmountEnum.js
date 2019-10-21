import Enum from './Enum';

export default class MainChartBlockAmountEnum extends Enum {

    static AMOUNT_100 = 100;
    static AMOUNT_500 = 500;
    static AMOUNT_1K = 1000;
    static AMOUNT_5K = 5000;
    static AMOUNT_10K = 10000;

    static getKeys() {
        return [
            this.AMOUNT_100,
            this.AMOUNT_500,
            this.AMOUNT_1K,
            this.AMOUNT_5K,
            this.AMOUNT_10K,
        ];
    }

    static getLabels() {
        return {
            [this.AMOUNT_100]: '100',
            [this.AMOUNT_500]: '500',
            [this.AMOUNT_1K]: '1K',
            [this.AMOUNT_5K]: '5K',
            [this.AMOUNT_10K]: '10K',
        };
    }
}
