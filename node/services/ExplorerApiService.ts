import { Request, Response } from 'express';
import axios from 'axios';

class ExplorerApiService {
    apiUrl: string;

    constructor () {

        this.apiUrl = 'https://neutrinoexplorer.herokuapp.com/';
    }

    async handleRequest (req: Request, res: Response) {
        const route = `/api/${req.params['0']}`;

        try {
            const resp = await axios.get(route, { baseURL: this.apiUrl });

            res.send(`${resp.data}`);
        } catch (err) {
            console.log({ err });
            res.send({ error: true, message: 'Not Found' });
        }
    }
}

export default ExplorerApiService;