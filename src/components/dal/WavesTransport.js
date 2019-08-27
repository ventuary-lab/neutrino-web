
export default class WavesTransport {

    constructor(dal) {
        this.dal = dal;
        this.isKeeperAvailable = null;
        this.start = Date.now();
    }


    /**
     * Get WavesKeeper from window
     * @returns {Promise}
     */
    async getKeeper() {
        const checker = resolve => {
            if (this.isKeeperAvailable === true || window.WavesKeeper && window.WavesKeeper.publicState) {
                this.isKeeperAvailable = true;
                resolve(window.WavesKeeper);

            } else if (this.isKeeperAvailable === false || Date.now() - this.start > 1500) {
                this.isKeeperAvailable = false;
                resolve(null);
            }
            else if (this.isKeeperAvailable === null) {
                setTimeout(() => checker(resolve), 100);
            }
        };
        return new Promise(checker);
    }
}
