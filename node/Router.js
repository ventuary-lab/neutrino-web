const CollectionEnum = require('./enums/CollectionEnum');

module.exports = class Router {

    constructor(contractApp, expressApp) {
        this.app = contractApp;
        this.expressApp = expressApp;

        this._routes = {
            '/api/v1/init': async () => {
                return {
                    config: {
                        dal: {
                            // neutrinoAddress: this.app.neutrinoAddress,
                            // auctionAddress: this.app.auctionAddress,
                            network: this.app.network,
                        }
                    },
                };
            },
            /*'/api/v1/orders/:pairName': async (request) => {
                return request.query.address
                    ? await this.app.collections.orders.getUserOrders(request.query.address)
                    : await this.app.collections.orders.getOrders()
            },*/
            '/api/v1/orders/:pairName/opened': async (request) => {
                let orders = this.app.getCollection(request.params.pairName, CollectionEnum.BONDS_ORDERS).getOpenedOrders();
                if (request.query.owner) {
                    orders = orders.filter((order) => order.owner === request.query.owner);
                }
                return orders;
            },
            '/api/v1/orders/position': async (request) => {
                const price = request.query.price;
                const orders = await this.app.collections.orders.getOpenedOrders();
                let position = 0;
                orders.forEach((order) => {
                    order.price >= price && position++;
                });

                return {position: position};
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

};
