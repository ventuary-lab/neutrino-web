import Enum from './Enum';
import CurrencyEnum from 'enums/CurrencyEnum';

export default class PairsEnum extends Enum {

    static USDNB_USDN = 'usd-nb_usd-n';

    static getKeys() {
        return [
            this.USDNB_USDN,
        ];
    }

    static getSource(name) {
        const map = {
            [this.USDNB_USDN]: CurrencyEnum.USD,
        };
        return map[name] || null;
    }

    static getLabels() {
        return {
            [this.USDNB_USDN]: 'USD-NB/USD-N'
        }
    }
};
