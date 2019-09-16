module.exports = class OrderTypeEnum {

    static BUY = 'buy';
    static LIQUIDATE = 'liquidate';

    static getKeys() {
        return [
            this.BUY,
            this.LIQUIDATE,
        ];
    }
};
