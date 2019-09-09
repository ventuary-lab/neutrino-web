import _get from 'lodash/get';
import {setUser} from 'yii-steroids/actions/auth';
import {getUser} from 'yii-steroids/reducers/auth';
import fetchHoc from './dal/fetchHoc';

import WavesTransport from './dal/WavesTransport';

export default class DalComponent {

    constructor() {
        this.neutrinoAddress = null;
        this.auctionAddress = null;
        this.network = null;

        this.transport = new WavesTransport(this);

        this.hoc = fetchHoc;
        this._authInterval = null;
        this._authChecker = this._authChecker.bind(this);

        if (process.env.NODE_ENV !== 'production') {
            window.dal = this;
        }
    }

    async getWavesToUsdPrice() {
        return  await this.transport.nodeFetchKey('price') / 100;
    }

    async getBalance(address) {
        return await this.transport.getBalance(address);
    }

    async isKeeperInstalled() {
        const keeper = await this.transport.getKeeper();
        return !!keeper;
    }

    async getAccount() {
        const keeper = await this.transport.getKeeper();
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

    /**
     * Auth current user and return it data
     * @returns {Promise}
     */
    async auth() {
        const account = await this.getAccount();

        const user = account ?
            {
                address: account.address,
                balance: await this.getBalance(account.address),
                network: account.network,
            } : null;

        if (this._authInterval) {
            clearInterval(this._authInterval);
        }
        this._authInterval = setInterval(this._authChecker, 1000);

        return user;
    }

    async _authChecker() {
        // Get prev address
        const store = require('components').store;
        const prevAddress = _get(getUser(store.getState()), 'address');

        // Get next address
        const account = await this.getAccount();
        const nextAddress = account ? account.address : null;

        if (prevAddress && nextAddress && prevAddress !== nextAddress) {

            const user = await this.auth();
            store.dispatch(setUser(user));
        }
    }

    async swapWavesToNeutrino(amount) {
        await this.transport.nodePublish(
            'swapWavesToNeutrino',
            [],
            'WAVES',
            amount,
        );
    }

    async swapNeutrinoToWaves(amount) {
        await this.transport.nodePublish(
            'swapNeutrinoToWaves',
            [],
            await this.transport.nodeFetchKey('neutrino_asset_id'),
            amount,
        );
    }

    async setOrder(price, amount, position) {
        await this.transport.nodePublish(
            'setOrder',
            [
                price * 100,
                position
            ],
            await this.transport.nodeFetchKey('neutrino_asset_id', true),
            amount,
            true,
        );
    }

    async cancelOrder(hash) {
        await this.transport.nodePublish(
            'cancelOrder',
            [
                hash
            ],
            'WAVES',
            0,
            true,
        );
    }

    async getOrderBook() {
        const orders = await this.transport.nodeFetchKey('orderbook', true);

        const result = await Promise.all(
            orders.substr(1).split('_').map(async address => {
                return {
                    amount: await this.transport.nodeFetchKey(`order_amount_${address}`) / this.transport.wvs,
                    price: await this.transport.nodeFetchKey(`order_price_${address}`) / 100,
                };
            })
        );

        return result;
    }
}
