module.exports = class WavesExchangePeriodEnum {

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
        ]
    }

    static getSecondsData() {
        return {
            [this.PERIOD_15M]: 900,
            [this.PERIOD_1H]: 3600,
            [this.PERIOD_8H]: 28800,
            [this.PERIOD_1D]: 86400,
        }
    }

    static getSeconds(id) {
        return this.getSecondsData()[id] || 0;
    }
};
