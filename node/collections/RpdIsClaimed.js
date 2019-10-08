const _get = require('lodash/get');
const BaseCollection = require('../base/BaseCollection');
const CurrencyEnum = require('../enums/CurrencyEnum');

module.exports = class RpdIsClaimed extends BaseCollection {


    getKeys(id = '([A-Za-z0-9]{35}_[0-9]{1,4})$') {

        return [
            `is_claimed_${id}`, //is_claimed_{userId}_{checkId}
        ];
    }

    async getClaimed(id) {
        const item = await this.getItem(id);

        return _get(item, 'isClaimed') || false;
    }

    async _prepareItem(id, item) {

        return {
            'isClaimed': item[`is_claimed_${id}`]
        }
    }
};
