import Enum from './Enum';
import { t } from 'locales/config';

export default class ContractEnum extends Enum {
    static NEUTRINO = 'neutrino';
    static AUCTION = 'auction';
    static RPD = 'rpd';
    static LIQUIDATION = 'liquidation';

    static getKeys() {
        return [this.NEUTRINO, this.AUCTION, this.RPD, this.LIQUIDATION];
    }

    static getLabels() {
        return {
            [this.NEUTRINO]: t('enums.neutrino.label'),
            [this.AUCTION]: t('enums.auction.label'),
            [this.RPD]: t('enums.rpd.label'),
            [this.LIQUIDATION]: t('enums.liquidation.label'),
        };
    }
}
