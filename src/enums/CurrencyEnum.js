import Enum from './Enum';

export default class CurrencyEnum extends Enum {

    static WAVES = 'waves';
    static USD = 'usd';
    static USD_N = 'usd-n';
    static USD_NB = 'usd-nb';
    static EUR_N = 'eur-n';
    static EUR_NB = 'eur-nb';
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
            [this.USD_N]: Math.pow(10, 8),
            [this.USD_NB]: 1,
        };
        return map[name] || null;
    }

    static getBaseCurrency(id) {
        const map = {
            [this.USD_N]: this.USD_NB, // TODO
            [this.EUR_N]: this.EUR_NB, // TODO
            [this.BTC_N]: this.BTC_NB, // TODO
        };
        return map[id] || null;
    }

    static getLabels() {
        return {
            [this.WAVES]: __('WAVES'),
            [this.USD_N]: __('USD-N'),
            [this.USD_NB]: __('USD-NB'),
            [this.EUR_N]: __('EUR-N'),
            [this.EUR_NB]: __('EUR-NB'),
            [this.BTC_N]: __('BTC-N'),
            [this.BTC_NB]: __('BTC-NB'),
        };
    }

    static getIconClasses() {
        return {
            [this.USD_N]: 'Icon__usd-n-1_big',
            [this.EUR_N]: 'Icon__eur-n_big',
            [this.BTC_N]: 'Icon__btc-n_big',
        };
    }

    static getIconClass(id) {
        return this.getIconClasses()[id] || '';
    }

    static getIconActiveClasses() {
        return {
            [this.USD_N]: 'Icon__usd-n-1_big_green',
            [this.EUR_N]: 'Icon__eur-n_big_green',
            [this.BTC_N]: 'Icon__btc-n_big_green',
        };
    }

    static getIconActiveClass(id) {
        return this.getIconActiveClasses()[id] || '';
    }

}
