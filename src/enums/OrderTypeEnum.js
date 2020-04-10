import Enum from './Enum';
import { t } from 'locales/config';

export default class OrderTypeEnum extends Enum {

    static BUY = 'buy';
    static LIQUIDATE = 'liquidate';

    static getKeys() {
        return [
            this.BUY,
            this.LIQUIDATE,
        ];
    }

    static getLabels() {
        return {
            [this.BUY]: t('enums.buy.label'),
            [this.LIQUIDATE]: t('enums.liquidate.label'),
        };
    }
};
