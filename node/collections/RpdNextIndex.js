
const BaseCollection = require('../base/BaseCollection');

module.exports = class RpdNextIndex extends BaseCollection {

    constructor() {
        super(...arguments);
        this.nextIndex = undefined;
    }


    getKeys() {

        return [
            'rpd_sync_index',
        ];
    }

    getNextIndex() {
        return this.nextIndex;
    }

    async updateAll(nodeData) {
        this.logger.debug('Update all items of ' + this.collectionName + ' collection... ');

        for (let nodeKey in nodeData) {
            if (nodeKey.match(this.getKeys()[0])) {
                this.nextIndex = nodeData[nodeKey];
            }

            if (this.nextIndex !== undefined) {
                break;
            }
        }

        const data = {
            'nextIndex': this.nextIndex || null,
        };

        await this._updateNext(Object.keys(data), data);
    }
};
