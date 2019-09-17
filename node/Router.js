const CollectionEnum = require('./enums/CollectionEnum');
const PairsEnum = require('./enums/PairsEnum');
const _orderBy = require('lodash/orderBy');

module.exports = class Router {

    constructor(contractApp, expressApp) {
        this.app = contractApp;
        this.expressApp = expressApp;

        this._routes = {
            '/api/v1/init': async () => {
                const contracts = {};
                const contractInstances = this.app.getContracts();
                Object.keys(contractInstances).map(pairName => {
                    contracts[pairName] = {};
                    Object.keys(contractInstances[pairName]).map(contractName => {
                        contracts[pairName][contractName] = contractInstances[pairName][contractName].transport.dApp;
                    });
                });

                return {
                    config: {
                        dal: {
                            // neutrinoAddress: this.app.neutrinoAddress,
                            // auctionAddress: this.app.auctionAddress,
                            network: this.app.network,
                            nodeUrl: this.app.nodeUrl,
                            assets: this.app.assets,
                            contracts,
                        }
                    },
                    prices: await this._getPrices(),
                };
            },
            '/api/v1/prices': async request => {
                return await this._getPrices();
            },
            '/api/v1/bonds/:pairName/position': async request => {
                const price = request.query.price;
                const orders = await this.app.getCollection(request.params.pairName, CollectionEnum.BONDS_ORDERS).getOpenedOrders();
                let position = 0;
                orders.forEach((order) => {
                    if (order.price >= price) {
                        position++;
                    }
                });
                return {position};
            },
            '/api/v1/bonds/:pairName/chart': async request => {
                let orders = await this.app.getCollection(request.params.pairName, CollectionEnum.BONDS_ORDERS).getOrders();
                const timestamps = await this.app.heightListener.getTimestamps(orders.map(order => order.height));
                orders = _orderBy(orders, 'height', 'desc');
                return orders.map(order => [timestamps[order.height], order.discountPercent])
            },
            '/api/v1/bonds/:pairName/orders': async request => {
                return await this.app.getCollection(request.params.pairName, CollectionEnum.BONDS_ORDERS).getOpenedOrders();
            },
            '/api/v1/bonds/user/:address': async request => {
                const result = {
                    opened: [],
                    history: [],
                };
                for (let pairName of PairsEnum.getKeys()) {
                    for (let collectionName of [CollectionEnum.BONDS_ORDERS, CollectionEnum.NEUTRINO_ORDERS]) {
                        const collection = this.app.getCollection(pairName, collectionName);
                        result.opened = result.opened.concat(await collection.getUserOpenedOrders(request.params.address));
                        result.history = result.history.concat(await collection.getUserHistoryOrders(request.params.address));
                    }
                }

                result.opened = _orderBy(result.opened, 'height', 'desc');
                result.history = _orderBy(result.history, 'height', 'desc');
                return result;
            },
            '/api/*': async () => {
                return {
                    version: 'v1',
                    methods: Object.keys(this._routes),
                };
            },
        };
    }

    async start() {
        Object.keys(this._routes).forEach(url => {
            this.expressApp.get(url, async (request, response) => {
                let content = {};
                try {
                    content = await this._routes[url](request);
                } catch(e) {
                    this.app.logger.error(e, e.stack);
                    content = {
                        error: String(e),
                    };
                }

                response.writeHead(content && content.error ? 500 : 200, {'Content-Type': 'text/html'});
                response.end(JSON.stringify(content));
            });
        });
    }

    async _getPrices() {
        const result = {};
        for (let pairName of PairsEnum.getKeys()) {
            const currency = PairsEnum.getSource(pairName);
            if (!result[currency]) {
                const collection = this.app.getCollection(pairName, CollectionEnum.NEUTRINO_PRICES);
                result[currency] = await collection.getPrices();
            }
        }
        return result;
    }

};
