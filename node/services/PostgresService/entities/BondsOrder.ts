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
                    bo.type, bo.order_id, bm.timestamp from ${TableNames.BONDS_ORDERS} bo
                    INNER JOIN (SELECT * FROM ${TableNames.BLOCKS_MAP}) as bm ON bm.height = bo.height 
                `)
                .then(result => {
                    resolve(result.rows.map(this.mapEntity))
                })
                .catch(this.onError)
        })
    }
}
//     let orders = await this.getItemsAll();
//     orders = orders
//         .filter(order => order.index !== null)
//         .map(order => mapFieldsToNumber(order, ['height', 'price']));

//     orders = _orderBy(orders, 'index', 'asc');
//     return orders;
// }

export default BondsOrderEntity