import { Logger } from 'winston';
import * as http from 'http';
import { Express } from 'express';

import RedisStorage from './cache/storage/RedisStorage';
import WavesContractCache from './cache/WavesContractCache';
import HeightListener from './components/HeightListener';
import WavesTransport from './components/WavesTransport';

export interface DAppPairs {
    [key: string]: string;
}

export interface ApplicationParams {
    network: string;
    isCleaningRedis: boolean;
    nodeUrl: string;
    redisNamespace: string;
    dApps: DAppPairs;
    _redisClient: any;
    storage: RedisStorage;
    logger: Logger;
    heightListener: HeightListener;
    httpServer: http.Server;
    expressApp: Express;
}

export interface ContractTransport extends WavesTransport {}

export interface ContractAsset extends DAppPairs {}

export interface ContractCache extends WavesContractCache {
    transport?: ContractTransport;
    assets?: ContractAsset;
    removeAll?: (shouldFlush?: boolean) => void;
    updateAll?: (nodeData: ContractDictionary<ContractNodeData>) => void;
    updateByKeys?: (keys: string[]) => void;
}

export interface ContractDictionary<T> {
    [key: string]: T;
}

export type ContractNodeData = number | string | boolean;

export interface ContractDataRecord {
    type: string | 'integer';
    value: number;
    key: string;
}

export enum ProcessArguments {
    NO_UPDATE_ARG = '--noupdate',
    THREAD_NAME = '--thread'
}