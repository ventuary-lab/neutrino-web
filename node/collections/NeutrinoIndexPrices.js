const _orderBy = require('lodash/orderBy');
const _round = require('lodash/round');

const BaseCollection = require('../base/BaseCollection');

module.exports = class NeutrinoIndexPrices extends BaseCollection {
    getKeys(id = "([0-9]{1,7})$") {
        return [
            `price_index_${id}`,
        ];
    }

    /**
     * @returns {Promise}
     */
    async findIndexByHeight(height) {
        let items = await this.getItemsAll();
        items = _orderBy(items, 'index', 'asc');

        const inputHeight = Number(height);

        let index = -Infinity;
        let min = -Infinity;
        for(let i = 0;i < items.length; i++){
            const currentHeight = Number(items[i].height);

            if (currentHeight < inputHeight && currentHeight > min) {
                min = currentHeight;
                index = items[i].index;
            }
        }
        return index;
    }

    async _prepareItem(id, item) {
        return {
            index: Number(id),
            height: item['price_index_' + id]
        };
    }

    async _postProcessItem(id, item) {
        return {
            ...item,
            index: Number(id)
        };
    }

};
