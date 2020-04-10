import Enum from './Enum';
import { t } from 'locales/config';

export default class OrderStatusEnum extends Enum {

    static NEW = 'new';
    static FILLED = 'filled';
    static CANCELED = 'canceled';

    static getKeys() {
        return [
            this.NEW,
            this.FILLED,
            this.CANCELED,
        ];
    }

    static getLabels() {
        return {
            [this.NEW]: t('common.order_new.label'),
            [this.FILLED]: t('common.order_filled.label'),
            [this.CANCELED]: t('common.order_cancelled.label'),
        };
    }
};
