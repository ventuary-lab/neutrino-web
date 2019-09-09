const WavesContractCache = require('waves-contract-cache');
const WebSocketServer = require('./components/WebSocketServer');

const {Orders} = require('./collections');
const WavesTransport = require('./components/WavesTransport');
const Router = require('./Router');

const REDIS_NAMESPACE = process.env.REDIS_NAMESPACE || 'nt_';
module.exports = class ContractApp {

    constructor(params = {}) {
        this.neutrinoAddress = process.env.APP_NEUTRINO_ADDRESS || '3MrtHeXquGPcRd3YjJQHfY1Ss6oSDpfxGuL'; // testnet
        this.auctionAddress = process.env.APP_AUCTION_ADDRESS || '3NC8pQxcnDTtDkhzv5Eje8qqW4qoFawLnAb'; // testnet //todo give this address from data of contract (auction_contract)
        this.network = process.env.APP_DAPP_NETWORK || 'test';
        this.nodeUrl = this.network === 'main' ? 'https://nodes.wavesplatform.com' : 'https://testnodes.wavesnodes.com';

        this._onContractUpdate = this._onContractUpdate.bind(this);
        this._onCollectionUpdate = this._onCollectionUpdate.bind(this);

        // Create transport
        this.neutrinoTransport = new WavesTransport({
            dApp: this.neutrinoAddress,
            nodeUrl: this.nodeUrl,
        });

        // Create contract cache instance
        this.neutrinoContract = new WavesContractCache({
            dApp: this.neutrinoAddress,
            nodeUrl: this.nodeUrl,
            updateHandler: this._onContractUpdate,
            storage: {
                namespace: REDIS_NAMESPACE + 'neutrino_' + this.neutrinoAddress,
                redis: process.env.REDIS_URL ? process.env.REDIS_URL : {
                    host: process.env.REDIS_HOST || '127.0.0.1',
                    port: process.env.REDIS_PORT || 6379,
                }
            },
            logger: {
                level: 'debug',
            },
        });
        this.storage = this.neutrinoContract.storage;
        this.logger = this.neutrinoContract.logger;

        // Create collections
        this.collections = {
            orders: new Orders(),
        };
        Object.keys(this.collections).forEach(name => {
            this.collections[name].name = name;
            this.collections[name].app = this;
            this.collections[name].transport = this.neutrinoTransport;
            this.collections[name].updateHandler = this._onCollectionUpdate;
        });

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
        this._router.start();
        this._websocket.start();

        this._isSkipUpdates = true;
        await this._updateAll();
        this._isSkipUpdates = false;
    }

    async _updateAll() {
        if (this._isNowUpdated) {
            this._isNeedUpdateAgain = true;
            return;
        }
        this._isNowUpdated = true;

        this.logger.info('Update all data in collections... ' + Object.keys(this.collections).join(', '));
        const nodeData = await this.neutrinoTransport.fetchAll();
        await Promise.all(
            Object.keys(this.collections).map(name => {
                return this.collections[name].updateAll(nodeData);
            })
        );

        this._isNowUpdated = false;
        if (this._isNeedUpdateAgain) {
            this._isNeedUpdateAgain = false;
            this._updateAll();
        }
    }

    _onContractUpdate(keys) {
        if (this._isSkipUpdates) {
            return;
        }

        if (keys.includes('height')) {
            this._updateAll();
        } else {
            Object.keys(this.collections).forEach(name => {
                this.collections[name].updateByKeys(keys);
            });
        }
    }

    _onCollectionUpdate(id, item, collection) {
        if (this._isSkipUpdates) {
            return;
        }

        this._websocket.push(JSON.stringify({
            stream: 'collections',
            data: {
                id,
                collection: collection.name,
                item,
            },
        }));
    }

};
