import axios from 'axios';
import RedisStorage from '../storage/RedisStorage';

import { ApplicationConfig } from './../types';

interface TransactionListenerParams {
    intervalSec: number;
    transactionsHandler: (any) => void | null;
}

const defaultParams: TransactionListenerParams = {
    intervalSec: 1,
    transactionsHandler: null
};

class TransactionListener implements TransactionListenerParams {
    app: Partial<ApplicationConfig> | null;
    intervalSec: number;
    transactionsHandler: (any) => void | null;
    _lastTransactionId: string | null;
    storage: RedisStorage | undefined;

    constructor(params = defaultParams) {
        this.app = null;
        this.intervalSec = params.intervalSec;
        this.transactionsHandler = params.transactionsHandler || null;

        this._lastTransactionId = null;
        this._next = this._next.bind(this);
    }

    /**
     * @returns {Promise<void>}
     */
    async start() {
        // Get last transaction
        const transactions = await this._fetch();
        if (transactions.length > 0) {
            this._lastTransactionId = transactions[0].id;
        }

        // Start transactionListener
        return this._next();
    }

    /**
     * @returns {Promise<void>}
     * @private
     */
    async _next() {
        //this._lastTransactionId = '3Mgd7TwYEWp9jtygKwuNj1JP4PabpKYFsbpbdoc8hgWp'; // FOR DEBUG

        // Fetch transactions
        const transactions = await this._fetch(this._lastTransactionId);

        if (transactions.length > 0) {
            this._lastTransactionId = transactions[0].id;
        }

        // Trigger events with new transactions
        if (this.transactionsHandler) {
            const appTransactions = transactions.filter(item => item.dApp === this.app.dApp && item.call);

            if (appTransactions.length > 0) {
                this.transactionsHandler(transactions.reverse());
            }
        }

        // Next tick
        setTimeout(this._next, this.intervalSec * 1000);
    }

    /**
     * @param {string|null} lastTransactionId
     * @param {string|null} afterId
     * @param {number} pageSize
     * @returns {Promise<[]>}
     * @private
     */
    async _fetch(lastTransactionId = null, afterId = null, pageSize = 1): Promise<any[]> {
        // Remote request
        const query = afterId ? '?after=' + afterId : '';
        let response = null;
        
        // console.log(this.app)

        try {
            response = await axios.get(`${this.app.nodeUrl}/transactions/address/${this.app.dApp}/limit/${pageSize}${query}`);
        } catch (e) {
            console.error(`TransactionListener Error on fetch transactions: ${String(e)}, ${JSON.stringify(e.response.data)}`);
            // throw e;
        }

        // Get only new transactions
        let transactions = [];
        let isLastFined = false;
        for (let i = 0; i < response.data[0].length; i++) {
            if (lastTransactionId && response.data[0][i].id === lastTransactionId) {
                isLastFined = true;
                break;
            }

            transactions.push(response.data[0][i]);
        }

        //console.log(6264364, isLastFined, lastTransactionId, afterId, response.data[0].map(t => t.id));

        // Fetch next page
        if (lastTransactionId && !isLastFined && transactions.length > 0) {
            afterId = transactions[transactions.length - 1].id;
            transactions = transactions.concat(await this._fetch(lastTransactionId, afterId, 2));
        }

        return Promise.all(
            transactions.map(async transaction => {
                let result = null;
                try {
                    result = await axios.get(`${this.app.nodeUrl}/debug/stateChanges/info/${transaction.id}`);
                } catch (e) {
                    if (e.response.data.error === 312) { // transaction type not supported
                        result = {
                            data: [],
                        };
                    } else {
                        console.error(`TransactionListener Error on fetch transaction info: ${String(e)}, ${JSON.stringify(e.response.data)}`);
                        // throw e;
                    }
                }

                transaction.info = result.data;
                return transaction;
            })
        );
    }

};

export default TransactionListener;