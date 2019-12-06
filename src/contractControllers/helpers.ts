import axios, { AxiosRequestConfig } from 'axios';
import {
    WavesAddressData,
    WavesAddressKeyData,
    WavesAssetInfo,
    WavesAssetBalanceInfo,
    WavesAddressBalanceInfo
} from './types';

export const getAddressInfo = async (
    nodeUrl: string,
    address: string,
    params?: AxiosRequestConfig
) => {
    const url = `${nodeUrl}/addresses/data/${address}`;

    const response = await axios.get<WavesAddressData[]>(url, params);

    return response;
};

export const getAddressDefaultBalance = async (
    params: { nodeUrl: string; address: string },
    axiosConfig?: AxiosRequestConfig
) => {
    const { nodeUrl, address } = params;
    const url = `${nodeUrl}/addresses/balance/${address}`;

    const response = await axios.get<WavesAddressBalanceInfo>(
        url,
        axiosConfig || {}
    );

    return response;
};

export const getAddressDataByKey = async (
    params: { nodeUrl: string; address: string; key: string },
    axiosConfig?: AxiosRequestConfig
) => {
    const { nodeUrl, address, key } = params;
    const url = `${nodeUrl}/addresses/data/${address}/${key}`;

    const response = await axios.get<WavesAddressKeyData>(
        url,
        axiosConfig || {}
    );

    return response;
};

export const getAssetDetails = async (
    params: { nodeUrl: string; assetId: string },
    axiosConfig?: AxiosRequestConfig
) => {
    const { nodeUrl, assetId } = params;
    const url = `${nodeUrl}/assets/details/${assetId}`;

    const response = await axios.get<WavesAssetInfo>(url, axiosConfig || {});

    return response;
};

export const getAssetBalanceInfo = async (
    params: { nodeUrl: string; address: string; assetId: string },
    axiosConfig?: AxiosRequestConfig
) => {
    const { nodeUrl, address, assetId } = params;
    const url = `${nodeUrl}/assets/balance/${address}/${assetId}`;

    const response = await axios.get<WavesAssetBalanceInfo>(
        url,
        axiosConfig || {}
    );

    return response;
};