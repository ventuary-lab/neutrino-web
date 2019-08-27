import Enum from './Enum';

export default class UserRole extends Enum {

    static USD_N = 'usd_n';
    static EUR_N = 'eur_n';
    static BTC_N = 'btc_n';

    static getKeys() {
        return [
            this.USD_N,
            this.EUR_N,
            this.BTC_N,
        ];
    }

    static getLabels() {
        return {
            [this.USD_N]: __('USD-N'),
            [this.EUR_N]: __('EUR-N'),
            [this.BTC_N]: __('BTC-N'),
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
