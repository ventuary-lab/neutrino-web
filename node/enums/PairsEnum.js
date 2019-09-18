const CurrencyEnum = require('./CurrencyEnum');

module.exports = class PairsEnum {

    static USDNB_USDN = 'usd-nb_usd-n';

    static getKeys() {
        return [
            this.USDNB_USDN,
        ];
    }

    static getBase(name) {
        const map = {
            [this.USDNB_USDN]: CurrencyEnum.USD_NB,
        };
        return map[name] || null;
    }

    static getQuote(name) {
        const map = {
            [this.USDNB_USDN]: CurrencyEnum.USD_N,
        };
        return map[name] || null;
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
