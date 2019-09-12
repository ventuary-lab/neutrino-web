module.exports = class ContractEnum {

    static NEUTRINO = 'neutrino';
    static AUCTION = 'auction';

    static getKeys() {
        return [
            this.NEUTRINO, // Need be first in list!
            this.AUCTION,
        ];
    }

    static getAddressKeyInNeutrinoContract(name) {
        const map = {
            [this.AUCTION]: 'auction_contract',
        };
        return map[name] || null;
    }

};
