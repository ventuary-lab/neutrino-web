const _get = require('lodash/get');
const BaseCollection = require('../base/BaseCollection');

module.exports = class RpdIndexNumbers extends BaseCollection {


    getKeys(id = '([A-Za-z0-9]{35})$') {

        return [
            `balance_history_${id}`,
        ];
    }

    async getArray(id) {
        const item = await this.getItem(id);
        const indexNumbers = _get(item, 'indexNumbers');

        return indexNumbers ? indexNumbers.split('_').slice(0, -1) : [];
    }

    async _prepareItem(id, item) {

        return {
            'indexNumbers': item[`balance_history_${id}`]
        }
    }
};
