module.exports = class ContractEnum {

    static NEUTRINO = 'neutrino';
    static AUCTION = 'auction';
    static RPD = 'rpd';
    static CONTROL = 'control'

    static getKeys() {
        return [
            this.NEUTRINO, // Need be first in list!
            this.AUCTION,
            this.RPD,
            this.CONTROL
        ];
    }

    static getAddressKeyInNeutrinoContract(name) {
        const map = {
            [this.AUCTION]: 'auction_contract',
            [this.RPD]: 'rpd_contract',
            [this.CONTROL]: 'control_contract'
        };
        return map[name] || null;
    }

};
