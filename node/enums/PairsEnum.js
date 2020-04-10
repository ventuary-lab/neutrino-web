const CurrencyEnum = require('./CurrencyEnum');

module.exports = class PairsEnum {

    static USDNB_USDN = 'usd-nb_usd-n';
    static EURNB_EURN = 'eur-nb_eur-n';

    static getKeys() {
        return [
            this.USDNB_USDN,
            //   this.EURNB_EURN,
        ];
    }

    static getBase(name) {
        const map = {
            [this.USDNB_USDN]: CurrencyEnum.USD_NB
            //     [this.EURNB_EURN]: CurrencyEnum.EUR_NB,
        };
        return map[name] || null;
    }

    static getQuote(name) {
        const map = {
            [this.USDNB_USDN]: CurrencyEnum.USD_N
            //   [this.EURNB_EURN]: CurrencyEnum.EUR_N,
        };
        return map[name] || null;
    }

    static getSource(name) {
        const map = {
            [this.USDNB_USDN]: CurrencyEnum.USD,
            [this.EURNB_EURN]: CurrencyEnum.EUR,
        };
        return map[name] || null;
    }

    static getLabels() {
        return {
            [this.USDNB_USDN]: 'NSBT/WAVES',
            [this.EURNB_EURN]: 'EUR-NB/WAVES',
        }
    }
};