import axios from 'axios';
import RedisStorage from '../storage/RedisStorage';

import { ApplicationConfig } from './../types';

interface HeightListenerParams {
    app: ApplicationConfig | null;
    intervalSec: number;
    _lastHeight: string | null;
    heightsHandler: (height?: string) => void | null;
}

const defaultParams: HeightListenerParams = {
    app: null,
    intervalSec: 1,
    heightsHandler: null,
    _lastHeight: null
}

class HeightListener implements HeightListenerParams {
    app: ApplicationConfig | null;
    intervalSec: number;
    _lastHeight: string | null;
    heightsHandler: (height?: string) => void | null;
    storage: RedisStorage | undefined;

    constructor(params = defaultParams) {
        this.app = params.app;
        this.intervalSec = params.intervalSec;
        this.heightsHandler = params.heightsHandler;
        this._lastHeight = null;
        this._next = this._next.bind(this);
    }

    /**
     * @returns {Promise<void>}
     */
    async start() {
        return this._next();
    }

    getHeight() {
        return this._lastHeight;
    }

    /**
     * @returns {Promise<void>}
     * @private
     */
    async _next() {
        let response = null;
        try {
            response = await axios.get(`${this.app.nodeUrl}/blocks/height`);
        } catch (e) {
            console.error(`HeightListener Error on fetch height: ${String(e)}`);
            // throw e;
        }
        const height = response.data.height;

        if (!this._lastHeight || this._lastHeight !== height) {
            this._lastHeight = height;

            this.heightsHandler && this.heightsHandler(height);
        }

        // Next tick
        setTimeout(this._next, this.intervalSec * 1000);
    }

};

export default HeightListener;