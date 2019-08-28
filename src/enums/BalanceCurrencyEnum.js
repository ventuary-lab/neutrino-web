import Enum from './Enum';

export default class BalanceCurrencyEnum extends Enum {

    static WAVES = 'waves';
    static USD_N = 'usd-n';
    static USD_NB = 'usd-nb';

    static getKeys() {
        return [
            this.WAVES,
            this.USD_N,
            this.USD_NB,
        ];
    }

    static getLabels() {
        return {
            [this.WAVES]: __('WAVES'),
            [this.USD_N]: __('USD-N'),
            [this.USD_NB]: __('USD-NB'),
        };
    }

    static getIconClasses() {
        return {
            [this.WAVES]: 'Icon__wave',
            [this.USD_N]: 'Icon__usd-n-2_green',
            [this.USD_NB]: 'Icon__usd-nb_green',
        };
    }

    static getIconClass(id) {
        return this.getIconClasses()[id] || '';
    }
}
