
module.exports = class CurrencyEnum {

    static WAVES = 'waves';
    static USD = 'usd';
    static EUR = 'eur';
    static USD_N = 'usd-n';
    static USD_NB = 'usd-nb';
    static EUR_N = 'eur-n';
    static EUR_NB = 'eur-nb';
    /*static BTC_N = 'btc-n';
    static BTC_NB = 'btc-nb';*/

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

    static getAssetContractKeysMap() {
        return {
            [this.USD_N]: 'neutrino_asset_id',
            [this.USD_NB]: 'bond_asset_id',
            [this.EUR_N]: 'neutrino_asset_id',
            [this.EUR_NB]: 'bond_asset_id',
        };
    }

    static getAssetContractKey(name) {
        return this.getAssetContractKeysMap()[name] || null;
    }

    static isBond(currency) {
        return currency.slice(-3) === '-nb'
    }

};
