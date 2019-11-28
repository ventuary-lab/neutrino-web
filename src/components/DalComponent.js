import _get from 'lodash/get';
import _isEqual from 'lodash/isEqual';
import { setUser } from 'yii-steroids/actions/auth';
import apiHoc from './dal/apiHoc';
import { clientStorage } from 'components';

import BalanceController from '../contractControllers/BalanceController';
import Keeper from './dal/Keeper';
import axios from 'axios';
import ContractEnum from '../enums/ContractEnum';
import UserRole from 'enums/UserRole';
import OrderTypeEnum from 'enums/OrderTypeEnum';

export const STORAGE_AUTH_KEY = 'isAuth';

export default class DalComponent {
    constructor() {
        this.network = null;
        this.nodeUrl = null;
        this.assets = null;
        this.contracts = null;
        this.hoc = apiHoc;
        this.balance = new BalanceController({ dalRef: this });
        this.balance.onUpdate = this.login.bind(this);

        this.keeper = new Keeper(this);
        this.keeper.onUpdate = this.login.bind(this);

        if (process.env.NODE_ENV !== 'production') {
            window.dal = this;
        }
    }

    /**
     * Auth current user and return it data
     * @returns {Promise}
     */
    async login() {
        // Start keeper listener, fetch balances
        const account = await this.keeper.getAccount();
        await this.keeper.start();
        await this.balance.start(account.address);

        // Keeper user
        const user = account
            ? {
                  role: UserRole.REGISTERED,
                  address: account.address,
                  network: account.network,
                  balances: this.balance.getBalances(),
              }
            : null;

        // Mark logged
        if (account && !this.isLogged()) {
            clientStorage.set(STORAGE_AUTH_KEY, '1');
        }

        // Update redux store
        const store = require('components').store;
        const storeUser = store.getState().auth.user || null;
        if (!_isEqual(storeUser, user)) {
            store.dispatch(setUser(user));
        }

        return user;
    }

    /**
     * Check is logged flag
     * @returns {boolean}
     */
    isLogged() {
        return clientStorage.get(STORAGE_AUTH_KEY) === '1';
    }

    /**
     * Logout user
     * @returns {Promise<void>}
     */
    async logout() {
        require('components').store.dispatch(setUser(null));
        clientStorage.remove(STORAGE_AUTH_KEY);

        this.keeper.stop();
        this.balance.stop();
    }

    async swapWavesToNeutrino(pairName, amount) {
        await this.keeper.sendTransaction(
            pairName,
            ContractEnum.NEUTRINO,
            'swapWavesToNeutrino',
            [],
            'WAVES',
            amount
        );
    }

    async swapNeutrinoToWaves(pairName, paymentCurrency, amount) {
        await this.keeper.sendTransaction(
            pairName,
            ContractEnum.NEUTRINO,
            'swapNeutrinoToWaves',
            [],
            this.assets[paymentCurrency],
            amount
        );
    }

    async withdraw(pairName, address, index) {
        await this.keeper.sendTransaction(
            pairName,
            ContractEnum.NEUTRINO,
            'withdraw',
            [address, index],
            'WAVES',
            0
        );
    }

    async setBondOrder(pairName, price, paymentCurrency, bondsAmount) {
        if (price <= 0 || price >= 1) {
            return;
        }
        price = Math.round(price * 100) / 100;
        const contractPrice = price * 100;
        let position = _get(
            await axios.get(`/api/v1/bonds/${pairName}/position`, {
                params: { price: contractPrice },
            }),
            'data.position'
        );

        if (price > 0 && bondsAmount > 0 && Number.isInteger(position)) {
            await this.keeper.sendTransaction(
                pairName,
                ContractEnum.AUCTION,
                'addBuyBondOrder',
                [contractPrice, position],
                this.assets[paymentCurrency],
                bondsAmount * price
            );
        }
    }
    async setLiquidateOrder(pairName, paymentCurrency, total) {
        await this.keeper.sendTransaction(
            pairName,
            ContractEnum.LIQUIDATION,
            'addLiquidationOrder',
            [],
            this.assets[paymentCurrency],
            total
        );
    }

    async cancelOrder(pairName, type, hash) {
        switch (type) {
            case OrderTypeEnum.BUY:
                await this.keeper.sendTransaction(
                    pairName,
                    ContractEnum.AUCTION,
                    'cancelOrder',
                    [hash],
                    'WAVES',
                    0
                );
                break;

            case OrderTypeEnum.LIQUIDATE:
                await this.keeper.sendTransaction(
                    pairName,
                    ContractEnum.LIQUIDATION,
                    'cancelOrder',
                    [hash],
                    'WAVES',
                    0
                );
                break;
        }
    }

    //RPD
    async lockNeutrino(pairName, paymentCurrency, amount) {
        await this.keeper.sendTransaction(
            pairName,
            ContractEnum.RPD,
            'lockNeutrino',
            [],
            this.assets[paymentCurrency],
            amount
        );
    }

    async unlockNeutrino(pairName, paymentCurrency, amount) {
        await this.keeper.sendTransaction(
            pairName,
            ContractEnum.RPD,
            'unlockNeutrino',
            [amount, this.assets[paymentCurrency]],
            'WAVES',
            0
        );
    }

    async checkWithdraw(pairName, index, historyIndex) {
        await this.keeper.sendTransaction(
            pairName,
            ContractEnum.RPD,
            'withdraw',
            [index, historyIndex],
            'WAVES',
            0
        );
    }

    async transferFunds(pairName, paymentCurrency, address, amount) {
        await this.keeper.transfer(
            pairName,
            address,
            amount,
            this.assets[paymentCurrency]
        );
    }
}
