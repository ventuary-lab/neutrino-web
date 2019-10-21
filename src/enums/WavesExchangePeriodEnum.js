import Enum from './Enum';

export default class WavesExchangePeriodEnum extends Enum {

    static PERIOD_15M = '15m';
    static PERIOD_1H = '1h';
    static PERIOD_8H = '8h';
    static PERIOD_1D = '1d';

    static getKeys() {
        return [
            this.PERIOD_15M,
            this.PERIOD_1H,
            this.PERIOD_8H,
            this.PERIOD_1D,
        ];
    }

    static getLabels() {
        return {
            [this.PERIOD_15M]: 'M15',
            [this.PERIOD_1H]: 'H1',
            [this.PERIOD_8H]: 'H8',
            [this.PERIOD_1D]: 'D1',
        };
    }
}
