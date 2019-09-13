import Enum from './Enum';

export default class PairsEnum extends Enum {

    static USDNB_USDN = 'usd-nb_usd-n';

    static getKeys() {
        return [
            this.USDNB_USDN,
        ];
    }
};
