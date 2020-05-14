import { Request, Response } from 'express';
import { ApplicationParams } from '../types';
import axios, { CancelToken, Canceler } from 'axios';

class ExplorerApiService {
    apiUrl: string;
    contractApp: ApplicationParams;
    proxyRoutesCollection: Set<string>;
    storageKey: string;
    updateFrequency: number;
    maxRequestWait: number;
    updateInterval: NodeJS.Timeout;
    apiReqCanceler: Canceler;

    constructor(contractApp: ApplicationParams) {
        this.contractApp = contractApp;

        this.apiUrl = process.env.EXPLORER_ENDPOINT || 'https://explorer.neutrino.at/';

        this.proxyRoutesCollection = new Set();

        this.updateFrequency = 3000;
        this.maxRequestWait = 15000;
    }

    async handleRequest(req: Request, res: Response) {
        const route = String(req.originalUrl).replace('/api/explorer', '/api');
        // const route = req.originalUrl

        try {
            const response = await axios.get<string>(route, {
                baseURL: this.apiUrl,
            });

            return response.data
        } catch (err) {
            if (axios.isCancel(err)) {
                console.log(err.message);
            } else {
                console.log(`Error occured on Explorer API call. Route: ${route}`, err);
            }

            return null
        }
    }

}

export default ExplorerApiService;
