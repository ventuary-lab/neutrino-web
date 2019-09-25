const redis = require('redis');
const winston = require('winston');
const WavesContractCache = require('waves-contract-cache');
const RedisStorage = require('waves-contract-cache/storage/RedisStorage');
const WebSocketServer = require('./components/WebSocketServer');
const HeightListener = require('./components/HeightListener');
const WavesTransport = require('./components/WavesTransport');
const PairsEnum = require('./enums/PairsEnum');
const ContractEnum = require('./enums/ContractEnum');
const CurrencyEnum = require('./enums/CurrencyEnum');
const CollectionEnum = require('./enums/CollectionEnum');

const Router = require('./Router');

module.exports = class App {

    constructor(params = {}) {
        this.network = process.env.APP_DAPP_NETWORK || 'test';
        this.nodeUrl = this.network === 'main' ? 'https://nodes.wavesplatform.com' : 'https://testnodes.wavesnodes.com';
        this.redisNamespace = process.env.REDIS_NAMESPACE || 'nt';
        this.dApps = {
            [PairsEnum.USDNB_USDN]: process.env.APP_ADDRESS_USDNB_USDN || '3MrtHeXquGPcRd3YjJQHfY1Ss6oSDpfxGuL', // testnet
            [PairsEnum.EURNB_EURN]: process.env.APP_ADDRESS_EURNB_EURN || '3Mz5Ya4WEXatCfa2JKqqCe4g3deCrFaBxiL', // testnet
        };

        // Create main redis client & storage
        this._redisClient = redis.createClient(process.env.REDIS_URL || {
            host: process.env.REDIS_HOST || '127.0.0.1',
            port: process.env.REDIS_PORT || 6379,
        });
        this.storage = new RedisStorage({
            namespace: this.redisNamespace + '_' + this.network,
            redisClient: this._redisClient,
        });

        // Create logger
        this.logger = winston.createLogger({
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.colorize(),
                winston.format.printf(info => `${info.timestamp} ${info.level} ${info.message}`)
            ),
            transports: [
                new winston.transports.Console(),
            ],
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
    }

    async start() {
        this._isSkipUpdates = true;

        this._router.start();
        this._websocket.start();
        await this.heightListener.start();

        // Try get timestamp
        this.heightListener.getTimestamps([this.heightListener.getLast()]);

        // Create contracts and collections
        for (const pairName of PairsEnum.getKeys()) {
            for (const contractName of ContractEnum.getKeys()) {
                const contract = await this.createContract(pairName, contractName);
                contract.transactionListener.start();
            }

            for (const collectionName of CollectionEnum.getKeys()) {
                this.createCollection(pairName, collectionName);
            }
        }

        // Load asset ids
        this.assets = await this._loadAssetIds();

        await this._updateAll(true);
        this._isSkipUpdates = false;

        // TODO
        setInterval(() => this._updateAll(), 5000);
    }

    getContract(pairName, contractName) {
        return this._contracts[pairName][contractName];
    }

    getContracts() {
        return this._contracts;
    }

    async createContract(pairName, contractName) {
        const dApp = contractName === ContractEnum.NEUTRINO
            ? this.dApps[pairName]
            : await this.getContract(pairName, ContractEnum.NEUTRINO).transport.nodeFetchKey(ContractEnum.getAddressKeyInNeutrinoContract(contractName));
        const transport = new WavesTransport({
            dApp,
            nodeUrl: this.nodeUrl,
        });

        const contract = new WavesContractCache({
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

    getCollection(pairName, collectionName) {
        return this._collections[pairName][collectionName];
    }

    createCollection(pairName, collectionName) {
        const CollectionClass = CollectionEnum.getClass(collectionName);
        const contract = this.getContract(pairName, CollectionEnum.getContractName(collectionName));

        const collection = new CollectionClass({
            pairName: pairName,
            collectionName: collectionName,
            storage: contract.storage,
            transport: contract.transport,
            logger: this.logger,
            heightListener: this.heightListener,
            updateHandler: this._onCollectionUpdate.bind(this),
            dApp: this.dApps,
        });

        this._collections[pairName] = this._collections[pairName] || {};
        this._collections[pairName][collectionName] = collection;

        return collection;
    }

    async _loadAssetIds() {
        const assets = {};
        for (let pairName of PairsEnum.getKeys()) {
            const currencies = [
                PairsEnum.getBase(pairName),
                PairsEnum.getQuote(pairName),
            ];
            for (let currency of currencies) {
                if (!assets[currency]) {
                    const key = CurrencyEnum.getAssetContractKey(currency);
                    const transport = this.getContract(pairName, ContractEnum.NEUTRINO).transport;

                    assets[currency] = await transport.nodeFetchKey(key);
                }
            }
        }
        return assets;
    }

    async _updateAll(flush) {
        if (this._isNowUpdated) {
            this._isNeedUpdateAgain = true;
            return;
        }
        this._isNowUpdated = true;

        for (const pairName of PairsEnum.getKeys()) {
            const data = {};
            for (const collectionName of CollectionEnum.getKeys()) {
                const collection = this.getCollection(pairName, collectionName);
                const contractName = CollectionEnum.getContractName(collectionName);
                if (!data[contractName]) {
                    data[contractName] = await collection.transport.fetchAll();
                }

                this.logger.info('Update all data in collection... ' + collectionName);
                if (flush) {
                    await collection.removeAll();
                }
                await collection.updateAll(data[contractName]);
            }
        }

        this._isNowUpdated = false;
        if (this._isNeedUpdateAgain) {
            this._isNeedUpdateAgain = false;
            this._updateAll();
        }
    }

    _onHeightUpdate() {
        if (!this._isSkipUpdates) {
            this._updateAll();
        }
    }

    _onContractUpdate(pairName, contractName, keys) {
        if (!this._isSkipUpdates) {
            Object.keys(this._collections[pairName]).forEach(collectionName => {
                if (CollectionEnum.getContractName(collectionName) === contractName) {
                    this.getCollection(pairName, collectionName).updateByKeys(keys);
                }
            });
        }
    }

    _onCollectionUpdate(id, item, collection) {
        if (!this._isSkipUpdates) {
            this._websocket.push(JSON.stringify({
                stream: 'collections',
                data: {
                    id,
                    pairName: collection.pairName,
                    collectionName: collection.collectionName,
                    item,
                },
            }));
        }
    }

};
