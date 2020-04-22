import Enum from './Enum';

export default class CurrencyEnum extends Enum {

    static WAVES = 'waves';
    static USD = 'usd';
    static USD_N = 'usd-n';
    static USD_NB = 'usd-nb';
    static EUR = 'eur';
    static EUR_N = 'eur-n';
    static EUR_NB = 'eur-nb';
    static BTC = 'btc';
    static BTC_N = 'btc-n';
    static BTC_NB = 'btc-nb';

    static getKeys() {
        return [
            this.USD_N,
            //this.EUR_N,
            //this.BTC_N,
        ];
    }

    static getContractPow(name) {
        const map = {
            [this.WAVES]: Math.pow(10, 8),
            [this.USD_N]: Math.pow(10, 6),
            [this.USD_NB]: Math.pow(10, 6),
            [this.EUR_N]: Math.pow(10, 2),
            [this.EUR_NB]: 1,
        };
        return map[name] || null;
    }

    static getBaseCurrency(id) {
        const map = {
            [this.USD_N]: this.USD_NB,
            [this.EUR_N]: this.EUR_NB,
            //[this.BTC_N]: this.BTC_NB,
        };
        return map[id] || null;
    }

    static getSourceCurrency(id) {
        const map = {
            [this.USD_N]: this.USD,
            [this.USD_NB]: this.USD,
            [this.EUR_N]: this.EUR,
            [this.EUR_NB]: this.EUR,
            //[this.BTC_N]: this.BTC,
            //[this.BTC_NB]: this.BTC,
        };
        return map[id] || null;
    }

    static getSign(id) {
        const map = {
            [this.USD]: '$',
            [this.EUR]: '€',
        };
        return map[id] || null;
    }

    static getLabels() {
        return {
            [this.WAVES]: 'WAVES',
            [this.USD_N]: 'USDN',
            [this.USD_NB]: 'NSBT',
            [this.EUR_N]: 'EURN',
            [this.EUR_NB]: 'EURNB',
            //[this.BTC_N]: __('BTC-N'),
            //[this.BTC_NB]: __('BTC-NB'),
        };
    }

    static getIconClasses() {
        return {
            [this.WAVES]: 'Icon__wave',
            [this.USD_N]: 'Icon__usd-n',
            [this.USD_NB]: 'Icon__usd-nb',
            [this.EUR_N]: 'Icon__eur-n',
            [this.EUR_NB]: 'Icon__eur-nb',
        };
    }

    static getIconClass(id) {
        return this.getIconClasses()[id] || '';
    }
}
