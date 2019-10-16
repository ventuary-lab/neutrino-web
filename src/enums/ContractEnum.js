import Enum from './Enum';

export default class ContractEnum extends Enum {

    static NEUTRINO = 'neutrino';
    static AUCTION = 'auction';
    static RPD = 'rpd';

    static getKeys() {
        return [
            this.NEUTRINO,
            this.AUCTION,
            this.RPD,
        ];
    }

    static getLabels() {
        return {
            [this.NEUTRINO]: __('neutrino'),
            [this.AUCTION]: __('auction'),
            [this.RPD]: __('rpd'),
        };
    }

    //not used
    static getAddresses() {
        return {
            [this.NEUTRINO]: process.env.APP_NEUTRINO_ADDRESS || '3N4Pj4MutKVgrmcuX7jgyVGWoBhDyKYFZBj',
            [this.AUCTION]: process.env.APP_AUCTION_ADDRESS || '3MwLuek2V6JjKybacSPjk4uo78pNkttERW1',
            [this.RPD]: process.env.APP_RPD_ADDRESS || '3NASpBKQc8WXK6SAyvfbtuE2kwiJkY21tAS',
        }
    }

    static getAddress(id) {
        return this.getAddresses()[id] || '';
    }
}
