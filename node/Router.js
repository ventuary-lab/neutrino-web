const CollectionEnum = require('./enums/CollectionEnum');
const WavesExchangePeriodEnum = require('./enums/WavesExchangePeriodEnum');
const PairsEnum = require('./enums/PairsEnum');
const _orderBy = require('lodash/orderBy');
const _min = require('lodash/min');
const meanBy = require('lodash/meanBy');
const moment = require('moment');


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
                    // prices: await this._getPrices(),
                };
            },
            '/api/v1/rpd-checks/:pairName/:address': async request => {

                const nextIndex = await this.app.getCollection(request.params.pairName, CollectionEnum.RPD_NEXT_INDEX).getNextIndex();

                if (!nextIndex) {
                    return null;
                }

                const neutrinoAssetId = this.app.assets[PairsEnum.getQuote(request.params.pairName)];
                const bondAssetId = this.app.assets[PairsEnum.getBase(request.params.pairName)];
                const balanceHistory = await this.app.getCollection(request.params.pairName, CollectionEnum.RPD_INDEX_NUMBERS).getArray(request.params.address);

                let rpdChecks = [];

                for (let index = 0; index < nextIndex; index++) {
                    console.log('---index', index);
                    const allProfit = await this.app.getCollection(request.params.pairName, CollectionEnum.RPD_PROFIT).getProfit(index);
                    console.log('---allProfit', allProfit);
                    const neutrinoBalance = await this.app.getCollection(request.params.pairName, CollectionEnum.RPD_HISTORY_BALANCES).getBalance(`${neutrinoAssetId}_${index}`);
                   // const bondBalance = await this.app.getCollection(request.params.pairName, CollectionEnum.RPD_HISTORY_BALANCES).getBalance(`${bondAssetId}_${index}`);

                    console.log('---balances', neutrinoBalance);

                    const contractHistoryBalance = neutrinoBalance;

                    console.log('---balanceHistory', balanceHistory);

                    //find closest
                    let historySyncIndex = -1;
                    let historyElementIndex = -1;
                    for(let i = 0; i < balanceHistory.length; i++){
                        if(balanceHistory[i] > index)
                            break;
                        
                        historySyncIndex = balanceHistory[i]
                        historyElementIndex = index

                        if(balanceHistory[i] == index) 
                            break;
                    }
                    
                    console.log('---historySyncIndex', historySyncIndex);
                    console.log('---historyElementIndex', historyElementIndex);


                    const neutrinoHistoryBalance = await this.app.getCollection(request.params.pairName, CollectionEnum.RPD_USER_HISTORY_BALANCES).getBalance(`${neutrinoAssetId}_${request.params.address}_${historySyncIndex}`);
                  //  const bondHistoryBalance = await this.app.getCollection(request.params.pairName, CollectionEnum.RPD_USER_HISTORY_BALANCES).getBalance(`${bondAssetId}_${request.params.address}_${historySyncIndex}`);
                    console.log('---userHistoryBlanace', neutrinoHistoryBalance);
                    

                    const totalUserHistoryBalance = neutrinoHistoryBalance;
                    const profit =  Math.floor((allProfit * totalUserHistoryBalance / contractHistoryBalance)*100)/100;
                    const isClaimed = await this.app.getCollection(request.params.pairName, CollectionEnum.RPD_IS_CLAIMED).getClaimed(`${request.params.address}_${index}`);
                    
                    console.log('---profit', profit);

                    if(neutrinoHistoryBalance <= 0 || profit == 0) 
                        continue;

                    rpdChecks.push({
                        index: index,
                        profit: profit,
                        historyIndex: historyElementIndex,
                        isClaimed: isClaimed,
                    })
                }

                // console.log('---checks', rpdChecks);



                return rpdChecks;

            },
            '/api/v1/rpd-balance/:pairName': async request => {
                return await this.app.getCollection(request.params.pairName, CollectionEnum.RPD_BALANCES).getBalances();
            },
            '/api/v1/rpd-user-balance/:pairName/:address': async request => {
                const neutrinoAssetId = this.app.assets[PairsEnum.getQuote(request.params.pairName)];
                const bondAssetId = this.app.assets[PairsEnum.getBase(request.params.pairName)];

                return {
                    'neutrino': await this.app.getCollection(request.params.pairName, CollectionEnum.RPD_USER_BALANCES).getItem(`${neutrinoAssetId}_${request.params.address}`),
                    'bond': await this.app.getCollection(request.params.pairName, CollectionEnum.RPD_USER_BALANCES).getItem(`${bondAssetId}_${request.params.address}`),
                };
            },
            '/api/v1/withdraw/:pairName/:address': async request => {
                return await this.app.getCollection(request.params.pairName, CollectionEnum.NEUTRINO_WITHDRAW).getItem(request.params.address);
            },
            '/api/v1/prices': async request => {
                return await this._getPrices();
            },
            '/api/v1/neutrino-balances/:pairName': async request => {
                return await this.app.getCollection(request.params.pairName, CollectionEnum.NEUTRINO_BALANCES).getBalances();
            },
            '/api/v1/waves-exchange/:currency/:period': async request => {
                return this._getWavesExchanges(request.params.currency, request.params.period);
            },
            '/api/v1/price-feed/:pairName/:period': async request => {
                let prices = await this._getPrices();
                prices = prices[request.params.pairName].slice(-1 * request.params.period);
                return meanBy(prices, 'price');
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
            '/api/v1/bonds/:pairName/chart/:blockAmount': async request => {
                let orders = await this.app.getCollection(request.params.pairName, CollectionEnum.BONDS_ORDERS).getOrdersHistory();
                const timestamps = await this.app.heightListener.getTimestamps(orders.map(order => order.height));
                orders = _orderBy(orders, 'height', 'desc');
                orders = orders.slice(-1 * Math.abs(parseInt(request.params.blockAmount)));
                return orders.map(order => [timestamps[order.height], order.discountPercent])
            },
            '/api/v1/bonds/:pairName/orders': async request => {
                return await this.app.getCollection(request.params.pairName, CollectionEnum.BONDS_ORDERS).getOpenedOrders();
            },
            '/api/v1/liquidate/:pairName/orders': async request => {
                return await this.app.getCollection(request.params.pairName, CollectionEnum.NEUTRINO_ORDERS).getOpenedOrders();
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

    async _getWavesExchanges(currency, period) {
        const candlesLimit = 10;
        const seconds = WavesExchangePeriodEnum.getSeconds(period);
        // Получаем все данные с редиса и сортируем по времени по убыванию
        let prices = _orderBy((await this._getPrices())[currency], 'timestamp', 'desc');;
        //Первый лемент - это закрытие последней свечи. Получаем время закрытия предыдущей свечи
        let prevCandleTimestamp = prices[0].timestamp - seconds * 1000;
        // Начинаем с последней свечи
        let candleIndex = candlesLimit;
        let chartData = {};
        for (let item of prices) {
            // Если новый элемент относится к предыдущей свече, то начинаем новую свечу
            if (item.timestamp < prevCandleTimestamp) {
                prevCandleTimestamp -= seconds * 1000;
                candleIndex--;
                // Если набрали нужное количество свечей, выходим
                if (candleIndex <= 0) {
                    break;
                }
            }

            if (!chartData[candleIndex]) {
                chartData[candleIndex] = {
                    timestamp: item.timestamp,
                    open: item.price,
                    max: item.price,
                    min: item.price,
                    close: item.price,
                };
            } else {
                chartData[candleIndex]['min'] = Math.min(item.price, chartData[candleIndex]['min']);
                chartData[candleIndex]['max'] = Math.max(item.price, chartData[candleIndex]['max']);
                // Обновляем цену открытия, поскольку перебираем с конца
                chartData[candleIndex]['open'] = item.price;
            }
        }

        // return chartData;
        let data = [];
        for (let key in chartData) {
            data.push(Object.values(chartData[key]));
        }
        return data;
    }

};
