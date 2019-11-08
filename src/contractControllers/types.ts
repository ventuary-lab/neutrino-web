import { ResponseContractData } from './../contractData/ResponseContractData';
export interface WavesAddressData extends ResponseContractData {
    type: string;
    key: string;
    value: string; // May be stringified JSON
}

export interface WavesAddressKeyData {
    type: string;
    value: string | number;
    key: string;
}

export interface WavesAssetInfo {
    assetId: string;
    issueHeight: number;
    issueTimestamp: number;
    issuer: string;
    name: string;
    description: string;
    decimals: number;
    reissuable: boolean;
    quantity: number;
    scripted: boolean;
    minSponsoredAssetFee: null;
}

export interface WavesAssetBalanceInfo {
    address: string;
    balance: number;
    assetId: string;
}