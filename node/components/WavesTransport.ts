import { Logger } from 'winston';
import _isString from 'lodash/isString';
import _trim from 'lodash/trim';
import axios from 'axios';

const convertValueToJs = (value) => {
    return _isString(value) && ['{', '['].includes(value.substr(0, 1))
        ? JSON.parse(value)
        : value;
};

export interface WavesTransportParams {
    dApp: string;
    nodeUrl: string;
    logger: Logger;
}

class WavesTransport implements WavesTransportParams {
    dApp: string;
    nodeUrl: string;
    logger: Logger;

    constructor(params: WavesTransportParams) {
        this.dApp = params.dApp;
        this.nodeUrl = params.nodeUrl;
        this.logger = params.logger;
    }

    async fetchAll() {
        const response = await this._request(`${this.nodeUrl}/addresses/data/${this.dApp}`);
        const nodeData = {};
        response.data.forEach(item => {
            nodeData[item.key] = convertValueToJs(item.value);
        });
        return nodeData;
    }

    /**
     * Get node data by key
     * @param {string} key
     * @returns {Promise<null|string | number | boolean>}
     */
    async nodeFetchKey(key) {
        const response = await this._request(`${this.nodeUrl}/addresses/data/${this.dApp}/${key}`);
        return convertValueToJs(response.data.value);
    }

    async fetchKeys(keys) {
        const regexp = new RegExp('^(' + keys.join('|') + ')$');
        const matches = encodeURIComponent(_trim(String(regexp), '/'));
        const response = await this._request(`${this.nodeUrl}/addresses/data/${this.dApp}?matches=${matches}`);

        const data = {};
        response.data.forEach(item => {
            data[item.key] = convertValueToJs(item.value);
        });
        return data;
    }

    async _request(url) {
        try {
            return await axios.get(url);
        } catch (err) {
            this.logger.error(`WavesTransport Error: url - ${String(url)}, ${String(err.stack || err)}`);
            // throw err;
        }
    }

}

export default WavesTransport;
