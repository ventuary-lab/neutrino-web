module.exports = class OrderStatusEnum {

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
};
