import { ResponseContractData } from './../contractData/ResponseContractData';

export interface WavesErrorResponse {
    error: number;
    message: string;
}
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

export interface WavesAddressBalanceInfo {
    address: string;
    confirmations: number;
    balance: number;
}

export interface WavesTransfer {
    recipient: string;
    amount: number;
}

export interface WavesTransactionInfo {
    id: string;
    senderPublicKey: string;
    fee: number;
    type: number;
    transferCount: number;
    version: number;
    totalAmount: number;
    attachment: string;
    sender: string;
    feeAssetId: string | null;
    proofs: string[];
    assetId: string;
    transfers?: WavesTransfer[];
    buyMatcherFee: number;
    timestamp: number;
    height: number;
    order1?: WavesTransactionInfo;
    order2?: WavesTransactionInfo;
}

export type BalanceDictionary = Record<string, number | null>

export interface IUser {
    role: 'registered' | 'admin' | null | string;
    address: string;
    network: 'mainnet' | 'testnet';
    balances: BalanceDictionary
}