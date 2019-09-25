
module.exports = class CurrencyEnum {

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
            this.EUR_N,
            //this.BTC_N,
        ];
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

};
