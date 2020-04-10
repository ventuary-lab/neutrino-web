import { Client } from 'pg';
import { mapBondOrderForRest } from './helpers';
import { TableNames } from './types';

class BondsOrderEntity {
    static onError (err) {
        console.error(err.stack)
    }
    static mapEntity (rawItem) {
        return mapBondOrderForRest(rawItem)
    }

    static async getOpenedOnly (client: Client) {
        return new Promise(resolve => {
            client
                .query(`
                    SELECT bo.height, bo.owner, bo.price, bo.total, bo.filledtotal, bo.resttotal,
                    bo.status, bo.index, bo.amount, bo.filledamount, bo.restamount, bo.pairname,
                    bo.debug_roi, bo.debug_price, bo.order_next, bo.order_prev, bo.is_first,
                    bo.type, bo.order_id, bm.timestamp from ${TableNames.BONDS_ORDERS} bo
                    INNER JOIN (SELECT * FROM ${TableNames.BLOCKS_MAP}) as bm ON bm.height = bo.height
                    WHERE bo.index IS NOT NULL
                    ORDER BY bo.index ASC
                `)
                .then(result => {
                    resolve(result.rows.map(this.mapEntity))
                })
                .catch(this.onError)
        })
    }

    static async getAll (client: Client) {
        return new Promise(resolve => {
            client
                .query(`
                    SELECT bo.height, bo.owner, bo.price, bo.total, bo.filledtotal, bo.resttotal,
                    bo.status, bo.index, bo.amount, bo.filledamount, bo.restamount, bo.pairname,
                    bo.debug_roi, bo.debug_price, bo.order_next, bo.order_prev, bo.is_first,
                    bo.type, bo.order_id, bm.timestamp from ${TableNames.BONDS_ORDERS} bo
                    INNER JOIN (SELECT * FROM ${TableNames.BLOCKS_MAP}) as bm ON bm.height = bo.height 
                `)
                .then(result => {
                    resolve(result.rows.map(this.mapEntity))
                })
                .catch(this.onError)
        })
    }

    static async getUserOpenedBondsOrders (client: Client, { address } : { address: string }) {
        return new Promise(resolve => {
            client
                .query(`
                    SELECT bo.height, bo.owner, bo.price, bo.total, bo.filledtotal, bo.resttotal,
                    bo.status, bo.index, bo.amount, bo.filledamount, bo.restamount, bo.pairname,
                    bo.debug_roi, bo.debug_price, bo.order_next, bo.order_prev, bo.is_first,
                    bo.type, bo.order_id, bm.timestamp from ${TableNames.BONDS_ORDERS} bo
                    INNER JOIN (SELECT * FROM ${TableNames.BLOCKS_MAP}) as bm ON bm.height = bo.height
                    WHERE bo.owner = '${address}' and bo.status = 'new'
                    ORDER BY bm.timestamp ASC
                `)
                .then(result => {
                    resolve(result.rows.map(this.mapEntity))
                })
                .catch(this.onError)
        })
    }
    static async getUserHistoryBondsOrders (client: Client, { address } : { address: string }) {
        return new Promise(resolve => {
            client
                .query(`
                    SELECT bo.height, bo.owner, bo.price, bo.total, bo.filledtotal, bo.resttotal,
                    bo.status, bo.index, bo.amount, bo.filledamount, bo.restamount, bo.pairname,
                    bo.debug_roi, bo.debug_price, bo.order_next, bo.order_prev, bo.is_first,
                    bo.type, bo.order_id, bm.timestamp from ${TableNames.BONDS_ORDERS} bo
                    INNER JOIN (SELECT * FROM ${TableNames.BLOCKS_MAP}) as bm ON bm.height = bo.height
                    WHERE bo.owner = '${address}' and bo.index IS NULL
                    ORDER BY bm.timestamp DESC
                `)
                .then(result => {
                    resolve(result.rows.map(this.mapEntity))
                })
                .catch(this.onError)
        })
    }
}

export default BondsOrderEntity