import axios, { AxiosResponse } from 'axios';
import { store } from '../components';
import { UPDATE_CONTRACT_ADDRESS_INFO, DROP_CONTRACT_ADDRESS_INFO } from '../actions/contract';

const NODE_URL = process.env.NODE_URL || 'https://nodes.wavesplatform.com';

import {
    WavesAddressData
} from './types';

export class WavesContractDataController {
    private _interval: NodeJS.Timeout;
    private _timeout: number;
    nodeUrl: string;

    constructor () {
        this.nodeUrl = NODE_URL;
        this._timeout = 7 * 1000;
    }

    async getAddressInfo (address: string) {
        const { nodeUrl } = this;

        const url = `${nodeUrl}/addresses/data/${address}`;
        const response = await axios.get(url) as AxiosResponse<WavesAddressData[]>;

        return response;
    }

    async _updateReduxContractData () {

        // const address = '3P8Fvy1yDwNHvVrabe4ek5b9dAwxFjDKV7R';

        // const res = await this.getAddressInfo(address);
        // store.dispatch({ type: UPDATE_CONTRACT_ADDRESS_INFO, address, data: res.data  });
        // store.dispatch({ type: DROP_CONTRACT_ADDRESS_INFO, address });

        // const res2 = await this.getAddressInfo('3P6LsCKZbvBj7PNFbV72AcMvqCoGaAkvMh8');
        // store.dispatch({ type: UPDATE_CONTRACT_ADDRESS_INFO, address: '3P6LsCKZbvBj7PNFbV72AcMvqCoGaAkvMh8', data: res2.data  });
    }

    async _onUpdate () {
        // this.getAddressInfo();

        await this._updateReduxContractData();
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