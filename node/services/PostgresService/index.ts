import { Client } from 'pg';
import { mapBondOrderForRest } from './helpers';

enum TableNames {
    BONDS_ORDERS = 'f_bonds_orders'
}

class PostgresService {
    client: Client;

    constructor () {
        // const connectionString = 'postgresql://postgres:123123123@localhost:5432/redis-cache'
        this.client = new Client({ connectionString: process.env.POSTGRES_CONNECTION_URL });

        // this.getBondsOrders = this.getBondsOrders.bind(this)
    }

    async connect () {
        await this.client.connect();
    }

    async start () {
        await this.connect();
    }

    async getBondsOrders () {
        return new Promise(resolve => {
            this.client
                .query(`SELECT * FROM ${TableNames.BONDS_ORDERS}`)
                .then(result => {
                    resolve(result.rows.map(mapBondOrderForRest))
                })
                .catch(err => console.error(err.stack))
        })
    }
}

export default PostgresService