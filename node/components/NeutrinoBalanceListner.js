const axios = require('axios');

module.exports = class NeutrinoBalanceListner {

    constructor(params = {}) {
        this.nodeUrl = params.nodeUrl;
        this.assetId = params.assetId;
        this.address = params.address;
        this.logger = params.logger;
        this.storage = params.storage;
        this.updateHandler = params.updateHandler;
        this.intervalSec = params.intervalSec || 10;

        this._fetchBalance = this._fetchBalance.bind(this);

        this.STORAGE_BLOCK_TIMESTAMPS_KEY = 'neutrino:balances';
    }

    /**
     * @returns {Promise<void>}
     */
    async start() {
        const response = await this._request(`assets/details/${this.assetId}`);
        const totalIssued = response.quantity;
        await this.storage.hset(this.STORAGE_BLOCK_TIMESTAMPS_KEY, 'totalIssued', totalIssued);

        return this._fetchBalance();
    }

    async getBalances() {
        return {
            totalIssued: await this.storage.hget(this.STORAGE_BLOCK_TIMESTAMPS_KEY, 'totalIssued') / Math.pow(10, 8),
            contractBalance: await this.storage.hget(this.STORAGE_BLOCK_TIMESTAMPS_KEY, 'contractBalance') / Math.pow(10, 8),
            totalUsed: await this.storage.hget(this.STORAGE_BLOCK_TIMESTAMPS_KEY, 'totalUsed') / Math.pow(10, 8),
        };
    }

    /**
     * @returns {Promise<void>}
     * @private
     */
    async _fetchBalance() {
        const response = await this._request(`assets/balance/${this.address}/${this.assetId}`);
        const balance = response.balance;
        const currentBalance = await this.storage.hget(this.STORAGE_BLOCK_TIMESTAMPS_KEY, 'contractBalance');

        if (!currentBalance || currentBalance !== balance) {
            const totalIssued = await this.storage.hget(this.STORAGE_BLOCK_TIMESTAMPS_KEY, 'totalIssued');
            await this.storage.hset(this.STORAGE_BLOCK_TIMESTAMPS_KEY, 'contractBalance', balance);
            await this.storage.hset(this.STORAGE_BLOCK_TIMESTAMPS_KEY, 'totalUsed', totalIssued - balance);
        }

        // Next tick
        setTimeout(this._fetchBalance, this.intervalSec * 1000);
    }

    async _request(url) {
        let result = null;
        try {
            result = await axios.get(`${this.nodeUrl}/${url}`);
        } catch (e) {
            this.logger.error(`NeutrinoBalanceListner Error on fetch balance: ${String(e)}`);
            throw e;
        }
        return result.data;
    }

};
