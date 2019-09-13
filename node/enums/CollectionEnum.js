const collections = require('../collections');
const PairsEnum = require('./PairsEnum');
const ContractEnum = require('./ContractEnum');

module.exports = class CollectionEnum {

    static BONDS_ORDERS = 'bonds_orders';

    static getKeys() {
        return [
            this.BONDS_ORDERS,
        ];
    }

    static getClass(name) {
        const map = {
            [this.BONDS_ORDERS]: collections.BondsOrders,
        };
        return map[name] || null;
    }

    static getContractName(name) {
        const map = {
            [this.BONDS_ORDERS]: ContractEnum.AUCTION,
        };
        return map[name] || null;
    }

    static getByPairNameData() {
        return {
            [PairsEnum.USDNB_USDN]: [
                this.BONDS_ORDERS,
            ],
        }
    }

    static getByPairName(pairName) {
        return this.getByPairNameData()[pairName];
    }

};
