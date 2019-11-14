import axios, { AxiosResponse } from "axios";
import { store } from "../components";
import {
    UPDATE_CONTRACT_ADDRESS_INFO,
    SET_CONTRACT_PRICE,
    SET_TOTAL_ISSUED
} from "../actions/contract";

import {
    WavesAddressData,
    WavesAddressKeyData,
    WavesAssetInfo,
    WavesAssetBalanceInfo,
    WavesErrorResponse
} from "./types";
import {
    getAddressInfo,
    getAddressDataByKey,
    getAssetDetails,
    getAssetBalanceInfo
} from "./helpers";

enum ContractKeysEnum {
    CONTROL_CONTRACT = "control_contract",
    PRICE = "price"
}

export class WavesContractDataController {
    private _interval: NodeJS.Timeout;
    private _timeout: number;
    private _updateFrequency: number;
    nodeUrl: string;
    addressList: string[];
    dAppAddress: string;
    neutrinoAssetId?: string;

    constructor({
        dAppAddress,
        nodeUrl
    }: {
        dAppAddress: string;
        nodeUrl: string;
    }) {
        this.nodeUrl = nodeUrl ? nodeUrl : "https://nodes.wavesplatform.com";
        this._updateFrequency = 3;
        this._timeout = this._updateFrequency * 1000;

        this._checker = this._checker.bind(this);

        this.dAppAddress = dAppAddress;

        this.addressList = [];
    }

    async getAddressInfo(address: string) {
        return await getAddressInfo(this.nodeUrl, address);
    }

    async getAddressDataByKey(address: string, key: string) {
        return await getAddressDataByKey({ nodeUrl: this.nodeUrl, address, key });
    }

    async getAssetDetails(assetId: string) {
        return await getAssetDetails({ nodeUrl: this.nodeUrl, assetId });
    }

    async getAssetBalanceInfo(address: string, assetId: string) {
        return await getAssetBalanceInfo({ nodeUrl: this.nodeUrl, address, assetId });
    }

    async _updateReduxContractData() {
        const contractControlPrice = await this._getControlContractPrice();

        store.dispatch({
            type: SET_CONTRACT_PRICE,
            value: contractControlPrice,
            name: ContractKeysEnum.CONTROL_CONTRACT
        });

        const totalIssued = await this._getTotalIssuedAmount();

        store.dispatch({ type: SET_TOTAL_ISSUED, value: totalIssued });
    }

    async _getTotalIssuedAmount(): Promise<number> | undefined {
        if (!this.neutrinoAssetId) {
            return;
        }

        const { dAppAddress, neutrinoAssetId } = this;

        const totalQtyRes = await this.getAssetDetails(neutrinoAssetId);
        const neutrinoBalanceRes = await this.getAssetBalanceInfo(
            dAppAddress,
            neutrinoAssetId
        );

        const { quantity } = totalQtyRes.data;
        const { balance } = neutrinoBalanceRes.data;

        return quantity - balance;
    }

    async _getControlContractPrice(): Promise<number> {
        const controlContractResponse = await this.getAddressDataByKey(
            this.dAppAddress,
            ContractKeysEnum.CONTROL_CONTRACT
        );

        const { value: targetAddress } = controlContractResponse.data;

        const controlContractPrice = await this.getAddressDataByKey(
            `${targetAddress}`,
            ContractKeysEnum.PRICE
        );

        return Number(controlContractPrice.data.value);
    }

    async _onUpdate() {
        // this.getAddressInfo();

        await this._updateReduxContractData();
    }

    async _checker() {
        // console.log('WavesContractDataController is updating...');

        this._onUpdate();
    }

    startUpdating() {
        // @ts-ignore
        this._interval = setInterval(this._checker, this._timeout);

        this._checker();
    }

    stopUpdating() {
        clearInterval(this._interval);
    }
}
