import _round from 'lodash/round';
import _isEqual from 'lodash/isEqual';
import axios from 'axios';

import CurrencyEnum from 'enums/CurrencyEnum';

export default class BalanceListener {

    constructor(dal) {
        this.dal = dal;
        this.onUpdate = null;

        this._timer = null;
        this._address = null;
        this._balances = null;
        this._lastTransactionId = null;

        this._next = this._next.bind(this);
    }

    getBalances() {
        return this._balances;
    }

    async start(address) {
        if (this._address === address) {
            return;
        }

        this._address = address;
        this._balances = null;
        this._lastTransactionId = null;
        if (!this._address) {
            return;
        }

        return await this._next();
    }

    stop() {
        this._address = null;
        this._balances = null;
        this._lastTransactionId = null;

        if (this._timer) {
            clearTimeout(this._timer);
        }
    }

    async _next() {
        /*let transactionId = null;
        if (this._address) {
            try {
                const result = await this._request(`transactions/address/${this._address}/limit/1`);
                transactionId = result && result.length > 0 ? result[0].id : null;
            } catch (e) {
                console.error('BalanceListener error:', e);
            }
        }

        if (transactionId !== this._lastTransactionId) {
            this._lastTransactionId = transactionId;*/
            await this._refreshBalance();
        //}

        this._timer = setTimeout(this._next, 2000);
    }

    async _refreshBalance() {
        const address = this._address;
        if (!address) {
            return;
        }

        // Fetch waves
        const balances = {
            [CurrencyEnum.WAVES]: (await this._request(`addresses/balance/${address}`)).balance,
        };

        // Add assets
        for (let currency in this.dal.assets) {
            if (this.dal.assets.hasOwnProperty(currency)) {
                balances[currency] = (await this._request(`assets/balance/${address}/${this.dal.assets[currency]}`)).balance;
            }
        }

        // Normalize
        Object.keys(balances).forEach(currency => {
            balances[currency] = _round(balances[currency] / CurrencyEnum.getContractPow(currency), 2);
        });

        if (address === this._address && !_isEqual(this._balances, balances)) {
            this._balances = balances;

            if (this.onUpdate) {
                this.onUpdate(balances);
            }
        }
    }

    async _request(url) {
        let response = null;
        try {
            response = await axios.get(`${this.dal.nodeUrl}/${url}`);
        } catch (e) {
            console.warn('BalanceListener request error:', e); // eslint-disable-line no-console
        }
        return response && response.status < 400 ? response.data : null;
    }

}
