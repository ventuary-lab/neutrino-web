import { waitForTx, broadcast } from '@waves/waves-transactions';
import {
    isString as _isString,
    isInteger as _isInteger,
    isObject as _isObject
} from 'lodash';
import WebKeeper from '../services/webkeeper/WebKeeper';
import WebKeeperService from '../services/webkeeper/WebKeeperService';
import { WavesKeeperTransaction, WavesKeeper, WavesKeeperAccount } from './types';

const webKeeper = new WebKeeperService({
    ref: new WebKeeper({
        nodeUrl: 'https://nodes.wavesplatform.com',
        provider: 'https://neutrinokeeper.com/iframe-entry'
    })
});

declare global {
    interface Window {
        WavesKeeper?: WavesKeeper;
    }
}

export default class Keeper {
    dal: any;
    onUpdate: (address: string) => void | null;
    fee: number;
    _isAvailable: boolean | null;
    _address: string | null;
    _pageStart: number;
    _checkerInterval: number;

    constructor(dal: any) {
        this.dal = dal;
        this.onUpdate = null;
        this.fee = 0.009;

        this._isAvailable = null;
        this._address = null;
        this._pageStart = Date.now();
        this._checkerInterval = null;

        this._buildTransaction = this._buildTransaction.bind(this);

        this._addressChecker = this._addressChecker.bind(this);
    }

    async start() {
        if (this._checkerInterval) {
            clearInterval(this._checkerInterval);
        }

        this._address = await this.getAddress();
        // @ts-ignore
        this._checkerInterval = setInterval(this._addressChecker, 1000);
    }

    stop() {
        this._address = null;

        if (this._checkerInterval) {
            clearInterval(this._checkerInterval);
        }
    }

    async isInstalled() {
        const keeper = await this.getPlugin();
        return !!keeper;
    }

    async getAccount(): Promise<WavesKeeperAccount | null> {
        const keeper = await this.getPlugin();
        if (!keeper) {
            return null;
        }

        try {
            const userData = await keeper.publicState();
            return userData.account;
        } catch {
            return null;
        }
    }

    async getAddress() {
        const account = await this.getAccount();

        if (!account) {
            return null;
        }

        return account.address;
    }

    async getPlugin(): Promise<WavesKeeper | undefined> {
        const checker = resolve => {
            if (
                this._isAvailable === true ||
                (Date.now() - this._pageStart > 2000 &&
                    window.WavesKeeper &&
                    window.WavesKeeper.publicState)
            ) {
                this._isAvailable = true;
                setTimeout(() => resolve(window.WavesKeeper));
            } else if (this._isAvailable === false || Date.now() - this._pageStart > 5000) {
                this._isAvailable = false;
                resolve(null);
            } else if (this._isAvailable === null) {
                setTimeout(() => checker(resolve), 100);
            }
        };
        return new Promise(checker);
    }

    async sendTransaction(
        pairName: string,
        contractName: string,
        method: string,
        args: string[],
        paymentCurrency: string,
        paymentAmount: number,
        waitTx: boolean = true,
    ) {
        const isWebKeeperReady = await webKeeper.isReady();
        const dApp = this.dal.contracts[pairName][contractName];
        const builtTransaction = this._buildTransaction(dApp, method, args, paymentCurrency, paymentAmount);

        if (isWebKeeperReady) {
            webKeeper.ref.lib
                .invoke(builtTransaction.data)
                .broadcast();

            return;
        }

        const keeper = await this.getPlugin();

        const result = await keeper.signAndPublishTransaction(builtTransaction);

        if (result) {
            if (!waitTx) {
                return result;
            }

            const tx = JSON.parse(result);
            return waitForTx(tx.id, {
                apiBase: this.dal.nodeUrl,
                timeout: 10000,
            }).then(() => result);
        }
        return result;
    }

    async signTransaction(
        pairName: string,
        contractName: string,
        method: string,
        args: string[],
        paymentCurrency: string,
        paymentAmount: number,
    ) {
        const keeper = await this.getPlugin();
        const dApp = this.dal.contracts[pairName][contractName];

        return keeper.signTransaction(
            this._buildTransaction(dApp, method, args, paymentCurrency, paymentAmount)
        );
    }

    _buildTransaction(
        dApp: string,
        method: string,
        args: Array<number | string>,
        paymentCurrency,
        paymentAmount
    ) {
        const transaction: WavesKeeperTransaction = {
            type: 16,
            data: {
                fee: 1,
                dApp,
                call: {
                    args: args.map(item => ({
                        type: _isInteger(item) ? 'integer' : 'string',
                        value: _isObject(item) ? JSON.stringify(item) : item,
                    })),
                    function: method,
                },
                payment: !paymentAmount
                    ? []
                    : [
                          {
                              assetId: paymentCurrency || 'WAVES',
                              amount: Number(paymentAmount),
                          },
                      ],
            },
        };
        if (process.env.NODE_ENV !== 'production') {
            console.log('Transaction:', transaction); // eslint-disable-line no-console
        }
        return transaction;
    }

    async broadcastAndWait(tx) {
        if (_isString(tx)) {
            tx = JSON.parse(tx);
        }
        await broadcast(tx, this.dal.nodeUrl);
        await waitForTx(tx.id, { apiBase: this.dal.nodeUrl });
    }
    async broadcast(tx) {
        if (_isString(tx)) {
            tx = JSON.parse(tx);
        }
        return broadcast(tx, this.dal.nodeUrl);
    }

    async waitForTx(tx) {
        if (_isString(tx)) {
            tx = JSON.parse(tx);
        }
        return waitForTx(tx.id, { apiBase: this.dal.nodeUrl });
    }

    async _addressChecker() {
        // Get next address

        const address = await this.getAddress();

        if (this._address && address && this._address !== address) {
            this._address = address;

            if (this.onUpdate) {
                this.onUpdate(this._address);
            }
        }
    }

    async _buildTransferTransaction() {}

    async transfer(
        // pairName: string,
        recipient: string,
        amount: string,
        assetId: string,
        fee: string
    ) {
        const isWebKeeperReady = await webKeeper.isReady();

        if (isWebKeeperReady) {
            webKeeper.transfer(
                recipient,
                amount,
                assetId
            )
            return;
        }

        const tx = {
            type: 4,
            data: {
                amount: {
                    assetId: assetId,
                    tokens: amount,
                },
                // fee: 'WAVES',
                fee: {
                    assetId: 'WAVES',
                    tokens: '0.001',
                },
                recipient: recipient,
            },
        };
        // const tx = this._buildTransaction(
        //     dApp,

        // )
        // dApp: string,
        // method: string,
        // args: Array<number | string>,
        // paymentCurrency,
        // paymentAmount

        const keeper = await this.getPlugin();
        // @ts-ignore
        const result = await keeper.signAndPublishTransaction(tx);
    }
}
