// const axios = require('axios');
import axios from 'axios';
import { Logger } from 'winston';
import RedisStorage from '../cache/storage/RedisStorage';

class HeightListener {
    nodeUrl: string;
    logger: Logger;
    storage: RedisStorage | null;
    updateHandler: (height: number) => void | null;
    intervalSec: number;
    _lastHeight: number | null;
    STORAGE_BLOCK_TIMESTAMPS_KEY: string;
    
    constructor(params) {
        this.nodeUrl = params.nodeUrl;
        this.logger = params.logger;
        this.storage = params.storage;
        this.updateHandler = params.updateHandler;
        this.intervalSec = params.intervalSec || 1;

        this._lastHeight = null;
        this._listenNext = this._listenNext.bind(this);

        this.STORAGE_BLOCK_TIMESTAMPS_KEY = 'block_timestamps';
    }

    async start(): Promise<void> {
        return this._listenNext();
    }

    getLast(): number | null {
        return this._lastHeight;
    }

    async getTimestamps(heights: number[]): Promise<any> {
        const result = {};
        for (const height of heights) {
            result[height] = parseInt(await this._getTimestamp(height));
        }
        return result;
    }

    async _listenNext(): Promise<void> {
        try {
            const response = await this._request('blocks/height');
            const height = response.height;

            if (!this._lastHeight || this._lastHeight !== height) {
                this._lastHeight = height;
                this.updateHandler(height);
            }
        } catch (err) {
            this.logger.error(`HeightListener Error: ${String(err.stack || err)}`,);
        }
        // Next tick
        setTimeout(this._listenNext, this.intervalSec * 1000);
    }

    async _getTimestamp(height: number): Promise<string> {
        let timestamp = await this.storage.hget(this.STORAGE_BLOCK_TIMESTAMPS_KEY, height) as string; // Temporary approach

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
        } catch (err) {
            this.logger.error(`HeightListener Request Error: url - ${String(url)}, ${String(err.stack || err)}`);
            // throw err;
        }
        return result.data;
    }

};

export default HeightListener;