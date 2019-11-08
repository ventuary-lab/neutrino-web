import axios, { AxiosResponse } from 'axios';

const NODE_URL = process.env.NODE_URL || 'https://nodes.wavesplatform.com';

import {
    WavesAddressData,
    WavesAddress
} from './types';

export class WavesContractDataController {
    private _interval: NodeJS.Timeout;
    private _timeout: number;
    nodeUrl: string;

    constructor () {
        this.nodeUrl = NODE_URL;
        this._timeout = 2 * 1000;
    }

    async getAddressInfo (address: WavesAddress) {
        const { nodeUrl } = this;

        const url = `${nodeUrl}/addresses/data/${address}`;
        const response = await axios.get(url) as AxiosResponse<WavesAddressData[]>;

        return response;
    }

    async _onUpdate () {
        // this.getAddressInfo();
    }

    async _checker () {
        console.log('WavesContractDataController is updating...');

        this._onUpdate();
    }

    startUpdating () {
        this._interval = setInterval(
            this._checker,
            this._timeout
        )
    }

    stopUpdating () {
        clearInterval(this._interval);
    }
}