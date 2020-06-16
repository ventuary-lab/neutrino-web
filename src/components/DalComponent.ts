import { setUser } from 'yii-steroids/actions/auth';
import apiHoc from './dal/apiHoc';
import axios from 'axios';
import { get as _get } from 'lodash';
import { store } from 'components';
import { IUserData } from '@waves/signer/cjs/interface';

import BalanceController from '../contractControllers/BalanceController';
import UserController from '../contractControllers/UserController';
import Keeper from './dal/Keeper';

import ContractEnum from '../enums/ContractEnum';
import UserRole from 'enums/UserRole';
import OrderTypeEnum from 'enums/OrderTypeEnum';
import { IUser } from '../contractControllers/types';
import { IDalComponent, IDalNetwork, IDalContractsDict } from './types';

declare global {
    interface Window {
        dal?: DalComponent;
    }
}

export default class DalComponent implements IDalComponent {
    network: IDalNetwork | null;
    nodeUrl: string;
    assets: Record<string, string>;
    contracts: IDalContractsDict;
    hoc: () => void;
    balance: BalanceController;
    userController: UserController;
    keeper: Keeper;
    signerNetworkByte: 87;
    webKeeperUserData: IUserData | null;

    constructor() {
        this.network = null;
        this.nodeUrl = null;
        this.assets = null;
        this.contracts = null;
        this.hoc = apiHoc;
        this.balance = new BalanceController({ dalRef: this });
        this.userController = new UserController();

        this.balance.onUpdate = this.onListenerUpdate.bind(this);
        this.keeper = new Keeper(this);
        this.keeper.onUpdate = this.onListenerUpdate.bind(this);
        this.signerNetworkByte = 87;
        this.webKeeperUserData = null;

        if (process.env.NODE_ENV !== 'production') {
            window.dal = this;
        }
    }

    async onListenerUpdate () {
        let account;

        if (this.keeper.isAuthByKeeper()) {
            account = await this.keeper.getAccount();
        } else if (this.keeper.isAuthByWebKeeper()) {
            account = {
                ...this.webKeeperUserData,
                // network: String.fromCharCode(this.signerNetworkByte) === 'W' ? 'mainnet' : 'testnet',
                network: this.getNetworkOfByte()
            };
        } else {
            return;
        }

        await this.keeper.start();

        await this.balance.start(account.address);

        const user = this.constructUserData(account);

        this.userController.updateUser({ user });
    }

    async loginByWebKeeper() {
        const userData = await this.keeper.loginByWebKeeper();

        if (!userData) {
            return;
        }

        this.webKeeperUserData = userData;

        this.keeper.setWebKeeperAuthType();

        await this.keeper.start();
        await this.balance.start(userData.address);

        const user = this.constructUserData({
            address: userData.address,
            // network: this.getNetworkOfByte(userData.networkByte)
            network: this.getNetworkOfByte()
        });

        this.userController.updateUser({ user });

        return user;
    }

    getNetworkOfByte (networkByte?: number, defaultByte = this.signerNetworkByte) {
        return String.fromCharCode(
            networkByte || defaultByte
        ) === 'W' ? 'mainnet' : 'testnet';
    }

    constructUserData(account) : IUser | null {
        return account ? {
            role: UserRole.REGISTERED,
            address: account.address,
            network: account.network,
            balances: this.balance.getBalances(),
        } : null;
    }

    /**
     * Auth current user and return it data
     * @returns {Promise}
     */
    async login() {
        // Start keeper listener, fetch balances
        this.keeper.setKeeperAuthType();

        const account = await this.keeper.getAccount();

        if (account === null) {
            throw new Error('Keeper is not provided');
        }

        // this.keeper.stop();
        await this.keeper.start();
        await this.balance.start(account.address);

        // Keeper user
        const user = this.constructUserData(account);

        // Mark logged
        // if (account && !this.isLogged()) {
        //     clientStorage.set(STORAGE_AUTH_KEY, '1');
        // }

        // Update redux store

        this.userController.updateUser({ user });

        return user;
    }

    /**
     * Logout user
     * @returns {Promise<void>}
     */
    async logout() {
        store.dispatch(setUser(null));

        this.keeper.stop();
        this.balance.stop();

        if (this.keeper.isAuthByWebKeeper()) {
            this.keeper.logoutByWebKeeper();
        }

        this.keeper.resetAuthType();

        window.location.href = '/';
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

    async setBondOrder(pairName, price, paymentCurrency, sendAmount, position) {
        // if (price <= 0 || price >= 100) {
        //     return;
        // }
        // price = Math.round(price * 100) / 100;

        // let position = _get(
        //     await axios.get(`/api/v1/bonds/${pairName}/position`, {
        //         params: { price: contractPrice },
        //     }),
        //     'data.position'
        // );
        
        if (price > 0 && sendAmount > 0) {
            await this.keeper.sendTransaction(
                pairName,
                ContractEnum.AUCTION,
                'addBuyBondOrder',
                [price, position],
                'WAVES',
                sendAmount
            );
        }
    }
    async setLiquidateOrder(pairName, paymentCurrency, total, price, position) {
        // await this.keeper.sendTransaction(
        //     pairName,
        //     ContractEnum.LIQUIDATION,
        //     'addLiquidationOrder',
        //     [],
        //     this.assets[paymentCurrency],
        //     total
        // );
        await this.keeper.sendTransaction(
            pairName,
            ContractEnum.LIQUIDATION,
            'addLiquidationOrderWithPrice',
            [price, position],
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
            this.assets[paymentCurrency] || 'WAVES',
            paymentCurrency
        );
    }
}
