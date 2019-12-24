import { Request, Response } from 'express';
import axios from 'axios';

class ExplorerApiService {
    apiUrl: string;

    constructor () {

        this.apiUrl = 'https://neutrinoexplorer.herokuapp.com/';
    }

    async handleRequest (req: Request, res: Response) {
        const route = String(req.originalUrl).replace('/api/explorer', '/api');

        try {
            const resp = await axios.get(route, { baseURL: this.apiUrl });

            res.send(JSON.stringify(resp.data));
        } catch (err) {
            res.send({ error: true, message: 'Not Found' });
        }
    }
}

export default ExplorerApiService;