import Enum from './Enum';

export default class ContractEnum extends Enum {

    static NEUTRINO = 'neutrino';
    static AUCTION = 'auction';

    static getKeys() {
        return [
            this.NEUTRINO,
            this.AUCTION,
        ];
    }

    static getLabels() {
        return {
            [this.NEUTRINO]: __('neutrino'),
            [this.AUCTION]: __('auction'),
        };
    }

    static getAddresses() {
        return {
            [this.NEUTRINO]: process.env.APP_NEUTRINO_ADDRESS || '3MrtHeXquGPcRd3YjJQHfY1Ss6oSDpfxGuL',
            [this.AUCTION]: process.env.APP_AUCTION_ADDRESS || '3NC8pQxcnDTtDkhzv5Eje8qqW4qoFawLnAb',
        }
    }

    static getAddress(id) {
        return this.getAddresses()[id] || '';
    }
}
