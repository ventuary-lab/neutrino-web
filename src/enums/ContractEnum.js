import Enum from './Enum';

export default class ContractEnum extends Enum {

    static NEUTRINO = 'neutrino';
    static AUCTION = 'auction';
    static RPD = 'rpd';
    static LIQUIDATION = "liquidation"

    static getKeys() {
        return [
            this.NEUTRINO,
            this.AUCTION,
            this.RPD,
            this.LIQUIDATION
        ];
    }

    static getLabels() {
        return {
            [this.NEUTRINO]: __('neutrino'),
            [this.AUCTION]: __('auction'),
            [this.RPD]: __('rpd'),
            [this.LIQUIDATION]: __('liquidation'),
        };
    }
}