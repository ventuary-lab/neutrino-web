import Enum from './Enum';
import CurrencyEnum from 'enums/CurrencyEnum';

export default class PairsEnum extends Enum {

    static USDNB_USDN = 'usd-nb_usd-n';
    static EURNB_EURN = 'eur-nb_eur-n';

    static getKeys() {
        return [
            this.USDNB_USDN,
            //this.EURNB_EURN,
        ];
    }

    static getSource(name) {
        const map = {
            [this.USDNB_USDN]: CurrencyEnum.USD,
            //[this.EURNB_EURN]: CurrencyEnum.EUR,
        };
        return map[name] || null;
    }

    static getLabels() {
        return {
            [this.USDNB_USDN]: 'NSBT/WAVES',
            //[this.EURNB_EURN]: 'EUR-NB/EUR-N'
        };
    }
};
