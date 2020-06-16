import { Client } from 'pg';
import BondsOrderEntity from './entities/BondsOrder';
class PostgresService {
    client: Client;

    constructor () {
        // const connectionString = 'postgresql://postgres:123123123@localhost:5432/redis-cache'
        this.client = new Client(process.env.POSTGRES_CONNECTION_URL);

        // this.getBondsOrders = this.getBondsOrders.bind(this)
    }

    async connect () {
        await this.client.connect();
    }

    async start () {
        await this.connect();
    }

    async getOpenedBondsOrders () {
        return await BondsOrderEntity.getOpenedOnly(this.client)
    }
    
    async getUserOpenedBondsOrders (address: string) {
        return await BondsOrderEntity.getUserOpenedBondsOrders(this.client, { address })
    }
    
    async getUserHistoryBondsOrders (address: string) {
        return await BondsOrderEntity.getUserHistoryBondsOrders(this.client, { address })
    }

    async getBondsOrders () {
        // return new Promise(resolve => {
        //     this.client
        //         .query(`
        //             SELECT bo.height, bo.owner, bo.price, bo.total, bo.filledtotal, bo.resttotal,
        //             bo.status, bo.index, bo.amount, bo.filledamount, bo.restamount, bo.pairname,
        //             bo.type, bo.order_id, bm.timestamp from ${TableNames.BONDS_ORDERS} bo
        //             INNER JOIN (SELECT * FROM ${TableNames.BLOCKS_MAP}) as bm ON bm.height = bo.height 
        //         `)
        //         .then(result => {
        //             resolve(result.rows.map(mapBondOrderForRest))
        //         })
        //         .catch(err => console.error(err.stack))
        // })
        // return new Promise(resolve => {
        //     this.client
        //         .query(`
        //             SELECT bo.height, bo.owner, bo.price, bo.total, bo.filledtotal, bo.resttotal,
        //             bo.status, bo.index, bo.amount, bo.filledamount, bo.restamount, bo.pairname,
        //             bo.type, bo.order_id, bm.timestamp from ${TableNames.BONDS_ORDERS} bo
        //             INNER JOIN (SELECT * FROM ${TableNames.BLOCKS_MAP}) as bm ON bm.height = bo.height 
        //         `)
        //         .then(result => {
        //             resolve(result.rows.map(mapBondOrderForRest))
        //         })
        //         .catch(err => console.error(err.stack))
        // })
        return await BondsOrderEntity.getAll(this.client)
    }
}

export default PostgresService
