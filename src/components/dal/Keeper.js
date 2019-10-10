const {waitForTx, broadcast} = require('@waves/waves-transactions');
const _isArray = require('lodash/isArray');
const _isString = require('lodash/isString');
const _isInteger = require('lodash/isInteger');
const _isObject = require('lodash/isObject');

export default class Keeper {

    constructor(dal) {
        this.dal = dal;
        this.onUpdate = null;
        this.fee = 0.009;

        this._isAvailable = null;
        this._address = null;
        this._pageStart = Date.now();
        this._checkerInterval = null;

        this._addressChecker = this._addressChecker.bind(this);
    }

    async start() {
        if (this._checkerInterval) {
            clearInterval(this._checkerInterval);
        }

        this._address = await this.getAddress();

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

    async getAccount() {
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
            return null
        }

        return account.address;
    }

    /**
     * Get WavesKeeper from window
     * @returns {Promise}
     */
    async getPlugin() {
        const checker = resolve => {
            if (this._isAvailable === true || (Date.now() - this._pageStart > 2000 && window.WavesKeeper && window.WavesKeeper.publicState)) {
                this._isAvailable = true;
                setTimeout(() => resolve(window.WavesKeeper));

            } else if (this._isAvailable === false || Date.now() - this._pageStart > 5000) {
                this._isAvailable = false;
                resolve(null);
            }
            else if (this._isAvailable === null) {
                setTimeout(() => checker(resolve), 100);
            }
        };
        return new Promise(checker);
    }

    /**
     *
     * @param {string} pairName
     * @param {string} contractName
     * @param {string} method
     * @param {array} args
     * @param {string} paymentCurrency
     * @param {number} paymentAmount
     * @param {boolean} waitTx
     * @returns {Promise}
     */
    async sendTransaction(pairName, contractName, method, args, paymentCurrency, paymentAmount, waitTx = true) {
        const keeper = await this.getPlugin();
        const dApp = this.dal.contracts[pairName][contractName];
        const result = await keeper.signAndPublishTransaction(this._buildTransaction(dApp, method, args, paymentCurrency, paymentAmount));
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

    async signTransaction(pairName, contractName, method, args, paymentCurrency, paymentAmount) {
        const keeper = await this.getPlugin();
        const dApp = this.dal.contracts[pairName][contractName];
        return keeper.signTransaction(this._buildTransaction(dApp, method, args, paymentCurrency, paymentAmount));
    }

    _buildTransaction(dApp, method, args, paymentCurrency, paymentAmount) {
        const transaction = {
            type: 16,
            data: {
                fee: {
                    assetId: 'WAVES',
                    tokens: String(this.fee),
                },
                dApp,
                call: {
                    args: args.map(item => ({
                        type: _isInteger(item) ? 'integer' : 'string',
                        value: _isObject(item) ? JSON.stringify(item) : item,
                    })),
                    function: method
                },
                payment: !paymentAmount ? [] : [
                    {
                        assetId: paymentCurrency || 'WAVES',
                        tokens: String(paymentAmount),
                    }
                ],
            },
        };
        if (process.env.NODE_ENV !== 'production') {
            console.log('Transaction:', transaction); // eslint-disable-line no-console
        }
        return transaction;
    }

    async broadcast(tx) {
        if (_isString(tx)) {
            tx = JSON.parse(tx);
        }
        return broadcast(tx, this.dal.nodeUrl);
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


}
