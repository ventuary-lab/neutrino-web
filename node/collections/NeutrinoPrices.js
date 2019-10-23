const _orderBy = require('lodash/orderBy');
const _round = require('lodash/round');

const BaseCollection = require('../base/BaseCollection');

module.exports = class NeutrinoPrices extends BaseCollection {

    constructor(params={}) {
        super(params);
        this.exponent = 4;
        this.multiple = Math.pow(10, this.exponent);
        this.minHeight = Math.round(this.heightListener.getLast());
    }

    getKeys() {
        const heightString = Math.floor((this.minHeight/this.multiple) * this.multiple).toString();
        let regExp = "(";
        for(let i = 0; i < heightString.length - this.exponent; i ++)
            regExp += "[" + heightString[i] + "-" + "9" + "]";
        for(let i = 0; i < this.exponent; i++)
            regExp += "[0-9]";

        regExp += ")$";

        return [
            `price_${regExp}`,
        ];
    }

    /**
     * @returns {Promise}
     */
    async getPrices() {
        let items = await this.getItemsAll();
        items = _orderBy(items, 'height', 'asc');
        return items;
    }

    async _prepareItem(height, item) {
        if(height > this.minHeight)
            this.minHeight = height;

        return {
            timestamp: (await this.heightListener.getTimestamps([height]))[height],
            price: _round(item['price_' + height] / 100, 2),
        };
    }

    async _postProcessItem(height, item) {
        return {
            ...item,
            height,
        };
    }

};
