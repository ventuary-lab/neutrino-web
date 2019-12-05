
const BaseCollection = require('../base/BaseCollection');
const CurrencyEnum = require('../enums/CurrencyEnum');

module.exports = class RpdProfit extends BaseCollection {


    getKeys(id = '([0-9]{1,4})$') {

        return [
            `rpd_profit_${id}`,
        ];
    }

    async getProfit(id) {
        const item = await this.getItem(id);

        return item.profit;
    }

    async _prepareItem(id, item) {

        return {
            'profit': item[`rpd_profit_${id}`] / CurrencyEnum.getContractPow(CurrencyEnum.USD_N),
        }
    }
};
