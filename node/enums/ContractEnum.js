module.exports = class ContractEnum {

    static NEUTRINO = 'neutrino';
    static AUCTION = 'auction';
    static RPD = 'rpd';

    static getKeys() {
        return [
            this.NEUTRINO, // Need be first in list!
            this.AUCTION,
            this.RPD,
        ];
    }

    static getAddressKeyInNeutrinoContract(name) {
        const map = {
            [this.AUCTION]: 'auction_contract',
            [this.RPD]: 'rpd_contract',
        };
        return map[name] || null;
    }

};
