import {
    get as _get
} from 'lodash';
// import BaseStorage from './storage/BaseStorage';
import RedisStorage from './storage/RedisStorage';
import TransactionListener from './listeners/TransactionListener';
import HeightListener from './listeners/HeightListener';
import winston, { Logger } from 'winston';

class WavesContractCache {
    nodeUrl: string;
    dApp: string;
    updateHandler: (...args: any[]) => void | null;
    logger: Logger;
    storage: RedisStorage;
    transactionListener: TransactionListener;
    heightListener: HeightListener;

    constructor(params) {
        params = params || {};
        const { nodeUrl, dApp, updateHandler } = params;

        this.nodeUrl = nodeUrl;
        this.dApp = dApp;
        this.updateHandler = updateHandler || null;

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
            ...params.logger,
        });

        // Create storage
        this.storage = new RedisStorage(params.storage);

        // Create transaction listener
        this.transactionListener = params.transactionListener instanceof TransactionListener
            ? params.transactionListener
            : new TransactionListener(params.transactionListener);

        this.transactionListener.app = { nodeUrl, dApp };
        this.transactionListener.storage = this.storage;
        this.transactionListener.transactionsHandler = this._onTransactions.bind(this);

        // Create height listener
        this.heightListener = params.heightListener instanceof HeightListener
            ? params.heightListener
            : new HeightListener(params.heightListener);

        // this.heightListener.app = this;
        this.heightListener.storage = this.storage;
        this.heightListener.heightsHandler = this._onHeight.bind(this);
    }

    async start() {
        this.logger.info('Start listen income transactions and height updates... Node ' + this.nodeUrl + ', DApp ' + this.dApp);

        await this.heightListener.start();
        await this.transactionListener.start();
    }

    _onTransactions(transactions) {
        transactions.forEach(transaction => {
            const method = transaction.call.function;
            const args = transaction.call.args.map(item => item.value);
            const sender = transaction.sender;

            if (_get(transaction, 'info.stateChanges.data')) {
                const keys = transaction.info ? transaction.info.stateChanges.data.map(item => item.key) : [];
                if (keys.length > 0) {
                    this.logger.debug('Income transaction: ' + method + '(' + args.join(', ') + '), sender ' + sender + ', keys: ' + JSON.stringify(keys));

                    if (this.updateHandler) {
                        this.updateHandler(keys);
                    }
                }
            }
        });
    }

    _onHeight() {
        if (this.updateHandler) {
            this.logger.debug('Height updated: ' + this.heightListener.getHeight());
            this.updateHandler(['height']);
        }
    }

};

export default WavesContractCache;