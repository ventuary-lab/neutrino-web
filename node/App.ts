import redis from 'redis';
import winston, { Logger } from 'winston';
import { Express } from 'express';
import * as http from "http";
import WavesContractCache from './cache/WavesContractCache';
import RedisStorage from './cache/storage/RedisStorage';
import WebSocketServer from './components/WebSocketServer';

import MassPaymentService from './services/MassPaymentService';
import PostgresService from './services/PostgresService';
import HeightListener from './components/HeightListener';
import WavesTransport from './components/WavesTransport';
import { grabProcessArgumentValue } from './helpers';
import PairsEnum from './enums/PairsEnum';
import ContractEnum from './enums/ContractEnum';
import CurrencyEnum from './enums/CurrencyEnum';
import CollectionEnum from './enums/CollectionEnum';

import { ProcessArguments } from './types';
import {
    DAppPairs,
    ApplicationParams,
    ContractDictionary,
    ContractCache,
    ContractTransport,
    ContractNodeData,
} from './types';

const Router = require('./Router');

module.exports = class App implements ApplicationParams {
    // Parameter types
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
    massPaymentService: MassPaymentService;
    massPaymentSender: string | null;
    postgresService: PostgresService;

    // Internal class props
    _isSkipUpdates: boolean;
    _isNowUpdated: boolean;
    _isNeedUpdateAgain: boolean;
    assets?: DAppPairs;
    _contracts: ContractDictionary<ContractDictionary<ContractCache>> | null;
    _collections: ContractDictionary<ContractDictionary<ContractCache>> | null; // Not type-checked
    _router: any;
    _websocket: WebSocketServer;
    _collectionUpdateTimeout: number;

    constructor(params: ApplicationParams) {
        this.network = process.env.APP_DAPP_NETWORK || 'testnet';
        this.isCleaningRedis = process.env.IS_CLEANING_REDIS === 'true';

        switch (this.network) {
            case 'mainnet':
                this.nodeUrl = 'https://nodes.wavesplatform.com';
                break;
            case 'testnet':
                this.nodeUrl = 'https://testnode1.wavesnodes.com';
                break;
            case 'custom':
                this.nodeUrl = process.env.NODE_URL;
                break;
        }
        this.redisNamespace = process.env.REDIS_NAMESPACE || 'nt';
        this.dApps = {
            [PairsEnum.USDNB_USDN]:
                process.env.APP_ADDRESS_USDNB_USDN || '3MyDtNTkCNyRCw3o2qv5BPPS7vvUosiQe6F', // testnet
            // [PairsEnum.USDNB_USDN]: process.env.APP_ADDRESS_USDNB_USDN || '3NAXNEjQCDj9ivPGcdjkRhVMBkkvyGRUWKm', // testnet for rpd
            // [PairsEnum.EURNB_EURN]: process.env.APP_ADDRESS_EURNB_EURN || '3Mz5Ya4WEXatCfa2JKqqCe4g3deCrFaBxiL', // testnet
        };

        this.massPaymentSender = process.env.MASS_PAYMENT_SENDER || null;
        this.massPaymentService = new MassPaymentService({ nodeUrl: this.nodeUrl });

        // Create main redis client & storage
        this._redisClient = redis.createClient(
            process.env.REDIS_URL || {
                host: process.env.REDIS_HOST || '127.0.0.1',
                port: process.env.REDIS_PORT || 6379,
            }
        );
        this.storage = new RedisStorage({
            namespace: this.redisNamespace + '_' + this.network,
            redisClient: this._redisClient,
        });

        this.postgresService = new PostgresService();

        // Create logger
        this.logger = winston.createLogger({
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.colorize(),
                winston.format.printf(info => `${info.timestamp} ${info.level} ${info.message}`)
            ),
            transports: [new winston.transports.Console()],
            level: 'info',
        });

        // Create heights listener
        this.heightListener = new HeightListener({
            nodeUrl: this.nodeUrl,
            logger: this.logger,
            storage: this.storage,
            updateHandler: this._onHeightUpdate.bind(this),
        });

        // Contracts by pair and name
        this._contracts = {};

        // Collections by pair and name
        this._collections = {};

        // Assets ids
        this.assets = null;

        // Create websocket server
        this._websocket = new WebSocketServer({
            httpServer: params.httpServer,
            logger: this.logger,
        });

        // Init api routes
        this._router = new Router(this, params.expressApp);

        this._isSkipUpdates = false;
        this._isNowUpdated = false;
        this._isNeedUpdateAgain = false;

        this._collectionUpdateTimeout = 15000;
    }

    async start() {
        this._isSkipUpdates = true;

        this._router.start();
        this._websocket.start();

        await this.postgresService.start()
        await this.heightListener.start();

        // Try get timestamp
        this.heightListener.getTimestamps([this.heightListener.getLast()]);

        // Create contracts and collections
        const pairKeys = PairsEnum.getKeys() as string[];
        const contractKeys = ContractEnum.getKeys() as string[];
        const collectionKeys = CollectionEnum.getKeys() as string[];

        for (const pairName of pairKeys) {
            for (const contractName of contractKeys) {
                const contract = await this.createContract(pairName, contractName);
                contract.transactionListener.start();
            }

            for (const collectionName of collectionKeys) {
                this.createCollection(pairName, collectionName);
            }
        }

        // Load asset ids
        this.assets = await this._loadAssetIds();

        //add assets to collections
        for (const pairName of pairKeys) {
            for (const collectionName of collectionKeys) {
                this._collections[pairName][collectionName].assets = this.assets;
            }
        }

        if (!process.argv.includes(ProcessArguments.NO_UPDATE_ARG)) {
            await this._updateAll(this.isCleaningRedis);
        }

        this._isSkipUpdates = false;
    }

    getContract(pairName: string, contractName: string): ContractCache {
        return this._contracts[pairName][contractName];
    }

    getContracts() {
        return this._contracts;
    }

    async createContract(pairName: string, contractName: string): Promise<ContractCache> {
        const dApp =
            contractName === ContractEnum.NEUTRINO
                ? this.dApps[pairName]
                : ((await this.getContract(pairName, ContractEnum.NEUTRINO).transport.nodeFetchKey(
                      ContractEnum.getAddressKeyInNeutrinoContract(contractName)
                  )) as string);

        const transport: ContractTransport = new WavesTransport({
            dApp,
            nodeUrl: this.nodeUrl,
            logger: this.logger,
        });

        console.log('---createContract ' + contractName + ':' + dApp);

        const contract: ContractCache = new WavesContractCache({
            dApp,
            nodeUrl: this.nodeUrl,
            updateHandler: keys => this._onContractUpdate(pairName, contractName, keys),
            storage: {
                namespace: this.redisNamespace + '_' + this.network + ':' + pairName,
                redisClient: this._redisClient,
            },
            logger: {
                level: this.logger.level,
            },
        });

        contract.transport = transport;
        contract.storage.set('address_' + contractName, dApp);

        this._contracts[pairName] = this._contracts[pairName] || {};
        this._contracts[pairName][contractName] = contract;

        return contract;
    }

    getCollection(pairName: string, collectionName: string) {
        return this._collections[pairName][collectionName];
    }

    createCollection(pairName, collectionName) {
        const CollectionClass = CollectionEnum.getClass(collectionName);
        const contract = this.getContract(pairName, CollectionEnum.getContractName(collectionName));

        const collection = new CollectionClass({
            pairName: pairName,
            postgresService: this.postgresService,
            collectionName: collectionName,
            storage: contract.storage,
            transport: contract.transport,
            logger: this.logger,
            heightListener: this.heightListener,
            updateHandler: this._onCollectionUpdate.bind(this),
            dApp: this.dApps,
        });

        this._collections[pairName] = this._collections[pairName] || {};
        this._collections[pairName][collectionName] = collection as any; // TODO: Infer correct type

        return collection;
    }

    async _loadAssetIds(): Promise<Partial<DAppPairs>> {
        const assets: Partial<DAppPairs> = {};

        for (let pairName of PairsEnum.getKeys()) {
            const currencies = [
                PairsEnum.getBase(pairName),
                PairsEnum.getQuote(pairName),
            ] as string[];

            for (let currency of currencies) {
                if (!assets[currency]) {
                    const key = CurrencyEnum.getAssetContractKey(currency);
                    const transport = this.getContract(pairName, ContractEnum.NEUTRINO).transport;

                    const assetCurrencyValue = await transport.nodeFetchKey(key);
                    console.log({ key, assetCurrencyValue });

                    assets[currency] = assetCurrencyValue as string;
                }
            }
        }

        return {
            ...assets,
            [CurrencyEnum.USD_NB]: "6nSpVyNH7yM69eg446wrQR94ipbbcmZMU1ENPwanC97g"
        };
    }

    async _updateAll(shouldFlush?: boolean) {
        if (this._isNowUpdated) {
            return;
        }

        this._isNowUpdated = true;
        const threadName = grabProcessArgumentValue(process.argv, ProcessArguments.THREAD_NAME);

        try {
            for (const pairName of PairsEnum.getKeys()) {
                const data: ContractDictionary<ContractDictionary<ContractNodeData>> = {};
                const collectionNames = CollectionEnum
                    .getKeys()
                    .filter(colName => ![CollectionEnum.BONDS_ORDERS].includes(colName));

                for (const collectionName of collectionNames) {
                    const collection = this.getCollection(pairName, collectionName);
                    const contractName = CollectionEnum.getContractName(collectionName) as string;

                    if (!data[contractName]) {
                        data[contractName] = await collection.transport.fetchAll();
                    }

                    this.logger.info(`Thread ${threadName}. Update all data in collection... ${collectionName}`);

                    if (shouldFlush) {
                        await collection.removeAll();
                    }

                    const nodeNewData = data[contractName];

                    await collection.updateAll(nodeNewData);
                }
            }
        } catch (err) {
            this.logger.error(`Update All Error: ${String(err.stack || err)}`);
        }

        this._isNowUpdated = false;

        // TODO
        setTimeout(() => this._updateAll(), this._collectionUpdateTimeout);
    }

    _onHeightUpdate() {
        if (!this._isSkipUpdates) {
            //this._updateAll();
        }
    }

    _onContractUpdate(pairName, contractName, keys) {
        try {
            if (!this._isSkipUpdates) {
                Object.keys(this._collections[pairName]).forEach(collectionName => {
                    if (CollectionEnum.getContractName(collectionName) === contractName) {
                        this.getCollection(pairName, collectionName).updateByKeys(keys);
                    }
                });
            }
        } catch (err) {
            this.logger.error(`Contract Update Error: ${String(err.stack || err)}`);
        }
    }

    _onCollectionUpdate(id, item, collection) {
        if (!this._isSkipUpdates) {
            this._websocket.push(
                JSON.stringify({
                    stream: 'collections',
                    data: {
                        id,
                        pairName: collection.pairName,
                        collectionName: collection.collectionName,
                        item,
                    },
                })
            );
        }
    }
};
