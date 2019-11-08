import axios, { AxiosResponse } from 'axios';
import { store } from '../components';
import { UPDATE_CONTRACT_ADDRESS_INFO, SET_CONTROL_CONTRACT_PRICE } from '../actions/contract';

const NODE_URL = process.env.NODE_URL || 'https://nodes.wavesplatform.com';

import {
    WavesAddressData,
    WavesAddressKeyData
} from './types';

enum ContractKeysEnum {
    CONTROL_CONTRACT = 'control_contract',
    PRICE = 'price'
}

export class WavesContractDataController {
    private _interval: NodeJS.Timeout;
    private _timeout: number;
    nodeUrl: string;
    addressList: string[];
    dAppAddress: string;

    constructor ({ dAppAddress }: { dAppAddress: string }) {
        this.nodeUrl = NODE_URL;
        this._timeout = 7 * 1000;

        this._checker = this._checker.bind(this);

        this.dAppAddress = dAppAddress;

        this.addressList = [];
    }

    async getAddressInfo (address: string) {
        const { nodeUrl } = this;

        const url = `${nodeUrl}/addresses/data/${address}`;
        const response = await axios.get(url) as AxiosResponse<WavesAddressData[]>;

        return response;
    }

    async getAddressDataByKey (address: string, key: string) {
        const { nodeUrl } = this;
        const url = `${nodeUrl}/addresses/data/${address}/${key}`;

        const response = await axios.get(url) as AxiosResponse<WavesAddressKeyData>;

        return response;
    }

    async _updateReduxContractData () {

        // const address = '3P8Fvy1yDwNHvVrabe4ek5b9dAwxFjDKV7R';

        // const res = await this.getAddressInfo(address);
        // store.dispatch({ type: UPDATE_CONTRACT_ADDRESS_INFO, address, data: res.data  });
        // store.dispatch({ type: DROP_CONTRACT_ADDRESS_INFO, address });

        // const res2 = await this.getAddressInfo('3P6LsCKZbvBj7PNFbV72AcMvqCoGaAkvMh8');
        // store.dispatch({ type: UPDATE_CONTRACT_ADDRESS_INFO, address: '3P6LsCKZbvBj7PNFbV72AcMvqCoGaAkvMh8', data: res2.data  });

        const contractControlPrice = await this._getControlContractPrice();

        store.dispatch({ type: SET_CONTROL_CONTRACT_PRICE, value: contractControlPrice, name: ContractKeysEnum.CONTROL_CONTRACT });

        // store.dispatch({ type: UPDATE_CONTRACT_ADDRESS_INFO, address: ContractKeysEnum.CONTROL_CONTRACT, data: res.data  });
    }

    async _getControlContractPrice (): Promise<number> {
        const controlContractResponse = await this.getAddressDataByKey(this.dAppAddress, ContractKeysEnum.CONTROL_CONTRACT);

        const { value: targetAddress } = controlContractResponse.data; 

        const controlContractPrice = await this.getAddressDataByKey(`${targetAddress}`, ContractKeysEnum.PRICE);

        return Number(controlContractPrice.data.value);
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
        // @ts-ignore
        this._interval = setInterval(
            this._checker,
            this._timeout
        )

        this._checker();
    }

    stopUpdating () {
        clearInterval(this._interval);
    }
}