// import axios from 'axios';
import { round as _round, isEqual as _isEqual, get as _get, floor as _floor } from 'lodash';

import CurrencyEnum from '../enums/CurrencyEnum';
import DalComponent from '../components/DalComponent';

import { BalanceDictionary } from './types';
import { getAddressDefaultBalance, getAssetBalanceInfo } from './helpers';

export default class BalanceController {
    private dal: DalComponent | null;
    private _timer: NodeJS.Timeout | null;
    private _address: string | null;
    private _balances: BalanceDictionary | null;
    private _lastTransactionId: string | null;
    onUpdate: (balances: BalanceDictionary) => Promise<void> | null;

    constructor({ dalRef }: { dalRef: DalComponent }) {
        this.dal = dalRef;
        this.onUpdate = null;

        this._timer = null;
        this._address = null;
        this._balances = null;
        this._lastTransactionId = null;

        this._next = this._next.bind(this);
    }

    updateAddress(address) {
        this._address = address;
    }

    getBalances() {
        return this._balances;
    }

    async start(address?: string) {
        if (this._address === address || !address) {
            return;
        }

        this._address = address;
        this._balances = null;
        this._lastTransactionId = null;

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
            this._lastTransactionId = transactionId;
            await this._refreshBalance();
        }*/

        await this._refreshBalance();

        // @ts-ignore
        this._timer = setTimeout(this._next, 5000);
    }

    async _refreshBalance() {
        const { _address: address } = this;

        if (!address || !this.dal) {
            return;
        }

        const balanceDict: BalanceDictionary = {};

        const wavesBalanceRes = await getAddressDefaultBalance({
            nodeUrl: this.dal.nodeUrl,
            address,
        });

        balanceDict[CurrencyEnum.WAVES] = _get(wavesBalanceRes.data, 'balance', null);

        for (const currency in this.dal.assets) {
            if (this.dal.assets.hasOwnProperty(currency)) {
                const assetId = this.dal.assets[currency];

                const newBalanceRes = await getAssetBalanceInfo({
                    nodeUrl: this.dal.nodeUrl,
                    address,
                    assetId,
                });

                balanceDict[currency] = newBalanceRes.data.balance || null;
            }
        }

        // Normalize
        Object.keys(balanceDict).forEach(currency => {
            balanceDict[currency] = _floor(
                balanceDict[currency] / CurrencyEnum.getContractPow(currency),
                2
            );
        });

        if (address === this._address) {
            this._balances = balanceDict;

            if (this.onUpdate) {
                this.onUpdate(balanceDict);
            }
        }
    }
}
