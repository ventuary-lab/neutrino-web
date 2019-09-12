const axios = require('axios');

module.exports = class HeightListener {

    constructor(params = {}) {
        this.nodeUrl = params.nodeUrl;
        this.logger = params.logger;
        this.storage = params.storage;
        this.updateHandler = params.updateHandler;
        this.intervalSec = params.intervalSec || 1;

        this._lastHeight = null;
        this._listenNext = this._listenNext.bind(this);

        this.STORAGE_BLOCK_TIMESTAMPS_KEY = 'block_timestamps';
    }

    /**
     * @returns {Promise<void>}
     */
    async start() {
        return this._listenNext();
    }

    /**
     *
     * @returns {number}
     */
    getLast() {
        return this._lastHeight;
    }

    /**
     * @param {number[]} heights
     * @returns {Promise<object>}
     */
    async getTimestamps(heights) {
        const result = {};
        for (const height of heights) {
            result[height] = await this._getTimestamp(height);
        }
        return result;
    }

    /**
     * @returns {Promise<void>}
     * @private
     */
    async _listenNext() {
        const response = await this._request('blocks/height');
        const height = response.height;

        if (!this._lastHeight || this._lastHeight !== height) {
            this._lastHeight = height;
            this.updateHandler(height);
        }

        // Next tick
        setTimeout(this._listenNext, this.intervalSec * 1000);
    }

    /**
     * @returns {Promise<void>}
     * @private
     */
    async _getTimestamp(height) {
        let timestamp = this.storage.hget(this.STORAGE_BLOCK_TIMESTAMPS_KEY, height);
        if (!timestamp) {
            const response = await this._request(`blocks/headers/at/${height}`);
            timestamp = response.timestamp;

            await this.storage.hset(this.STORAGE_BLOCK_TIMESTAMPS_KEY, height, response.timestamp);
        }
        return timestamp;
    }

    async _request(url) {
        let result = null;
        try {
            result = await axios.get(`${this.nodeUrl}/${url}`);
        } catch (e) {
            this.logger.error(`HeightListener Error on fetch height: ${String(e)}`);
            throw e;
        }
        return result.data;
    }

};
