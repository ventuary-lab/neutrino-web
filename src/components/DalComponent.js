import _get from 'lodash/get';
import {setUser} from 'yii-steroids/actions/auth';
import {getUser} from 'yii-steroids/reducers/auth';
import WavesTransport from './dal/WavesTransport';

export default class DalComponent {

    constructor() {
        this.isTestMode = process.env.APP_DAPP_NETWORK === 'test';
        this.transport = new WavesTransport(this);

        this._authInterval = null;
        this._authChecker = this._authChecker.bind(this);

        if (this.isTestMode || process.env.NODE_ENV !== 'production') {
            window.dal = this;
        }
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
        // let user = await this.getUser(account.address);
        // user = {
        //     ...user,
        //     profile: {
        //         name: account.name,
        //         ...user.profile,
        //     },
        // };

        const user = account ?
            {
                address: account.address,
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

}
