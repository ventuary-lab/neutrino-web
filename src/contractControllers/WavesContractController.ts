import axios, { AxiosResponse } from 'axios';
import { store } from '../components';
import { UPDATE_CONTRACT_ADDRESS_INFO, SET_CONTRACT_PRICE, SET_TOTAL_ISSUED } from '../actions/contract';

import {
    WavesAddressData,
    WavesAddressKeyData,
    WavesAssetInfo,
    WavesAssetBalanceInfo
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
    neutrinoAssetId?: string;

    constructor ({ dAppAddress, nodeUrl }: { dAppAddress: string, nodeUrl: string }) {
        this.nodeUrl = nodeUrl ? nodeUrl : 'https://nodes.wavesplatform.com';
        this._timeout = 10 * 1000;

        this._checker = this._checker.bind(this);

        this.dAppAddress = dAppAddress;

        this.addressList = [];
    }

    async getAddressInfo (address: string) {
        const { nodeUrl } = this;
        const url = `${nodeUrl}/addresses/data/${address}`;

        const response = await axios.get<WavesAddressData[]>(url);

        return response;
    }

    async getAddressDataByKey (address: string, key: string) {
        const { nodeUrl } = this;
        const url = `${nodeUrl}/addresses/data/${address}/${key}`;

        const response = await axios.get<WavesAddressKeyData>(url);

        return response;
    }

    async getAssetDetails (assetId: string) {
        const { nodeUrl } = this;
        const url = `${nodeUrl}/assets/details/${assetId}`;

        const response = await axios.get<WavesAssetInfo>(url);

        return response;
    }

    async getAssetBalanceInfo (address: string, assetId: string) {
        const { nodeUrl } = this;
        const url = `${nodeUrl}/assets/balance/${address}/${assetId}`;

        const response = await axios.get<WavesAssetBalanceInfo>(url);

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
        store.dispatch({ type: SET_CONTRACT_PRICE, value: contractControlPrice, name: ContractKeysEnum.CONTROL_CONTRACT });

        const totalIssued = await this._getTotalIssuedAmount();
        store.dispatch({ type: SET_TOTAL_ISSUED, value: totalIssued });

        // store.dispatch({ type: UPDATE_CONTRACT_ADDRESS_INFO, address: ContractKeysEnum.CONTROL_CONTRACT, data: res.data  });
    }

    async _getTotalIssuedAmount (): Promise<number> | undefined {
        if (!this.neutrinoAssetId) {
            return;
        };

        const { dAppAddress, neutrinoAssetId } = this;

        const totalQtyRes = await this.getAssetDetails(neutrinoAssetId);
        const neutrinoBalanceRes = await this.getAssetBalanceInfo(dAppAddress, neutrinoAssetId);

        const { quantity } = totalQtyRes.data;
        const { balance } = neutrinoBalanceRes.data;

        return (quantity - balance);
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
        // console.log('WavesContractDataController is updating...');

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