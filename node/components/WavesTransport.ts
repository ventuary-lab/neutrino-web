import { Logger } from 'winston';
import { 
    isString as _isString,
    trim as _trim
} from 'lodash';
import axios from 'axios';

import { 
    ContractDictionary,
    ContractDataRecord,
    ContractNodeData
} from '../types';

export interface WavesTransportParams {
    dApp: string;
    nodeUrl: string;
    logger: Logger;
}

class WavesTransport implements WavesTransportParams {
    dApp: string;
    nodeUrl: string;
    logger: Logger;

    constructor({ dApp, nodeUrl, logger }: WavesTransportParams) {
        this.dApp = dApp;
        this.nodeUrl = nodeUrl;
        this.logger = logger;
    }

    convertValueToJs (value: string): number | string | boolean {
        return _isString(value) && ['{', '['].includes(value.substr(0, 1)) ? JSON.parse(value) : value;
    };

    async fetchAll() {
        const response = await this._request<ContractDataRecord[]>(`${this.nodeUrl}/addresses/data/${this.dApp}`);

        const nodeData: ContractDictionary<ContractNodeData> = {};

        response.data.forEach(item => {
            nodeData[item.key] = this.convertValueToJs(`${item.value}`);
        });

        return nodeData;
    }

    async nodeFetchKey<T extends ContractDataRecord>(key: string) {
        const response = await this._request<T>(`${this.nodeUrl}/addresses/data/${this.dApp}/${key}`);
        return this.convertValueToJs(`${response.data.value}`);
    }

    async fetchKeys(keys: string[]) {
        const regexp = new RegExp('^(' + keys.join('|') + ')$');
        const matches = encodeURIComponent(_trim(String(regexp), '/'));
        const response = await this._request<ContractDataRecord[]>(`${this.nodeUrl}/addresses/data/${this.dApp}?matches=${matches}`);

        const data: ContractDictionary<ContractNodeData> = {};

        response.data.forEach(item => {
            data[item.key] = this.convertValueToJs(`${item.value}`);
        });

        return data;
    }

    async _request<T>(url: string) {
        try {
            return await axios.get<T>(url);
        } catch (err) {
            this.logger.error(`WavesTransport Error: url - ${String(url)}, ${String(err.stack || err)}`);
            // throw err;
        }
    }

}

export default WavesTransport;
