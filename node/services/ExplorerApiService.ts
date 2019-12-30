import { Request, Response, response } from 'express';
import { ApplicationParams } from '../types';
import axios from 'axios';

class ExplorerApiService {
    apiUrl: string;
    contractApp: ApplicationParams;
    proxyRoutesCollection: Set<string>;
    storageKey: string;
    updateFrequency: number;
    updateInterval: NodeJS.Timeout;

    constructor (contractApp: ApplicationParams) {
        this.contractApp = contractApp;

        this.apiUrl = 'https://neutrinoexplorer.herokuapp.com/';

        this.proxyRoutesCollection = new Set();
        this.storageKey = 'explorer_api_cache';
        this.updateFrequency = 7500;
    }

    async handleRequest (req: Request, res: Response) {
        const route = String(req.originalUrl).replace('/api/explorer', '/api');

        if (this.proxyRoutesCollection.has(route)) {
            const cachedValue = await this.contractApp.storage.hget(
                this.storageKey,
                route
            );

            res.send(cachedValue);
        } else {
            this.proxyRoutesCollection.add(route);

            await this.update();

            const value = await this.contractApp.storage.hget(
                this.storageKey,
                route
            );

            res.send(value);
        }
    }

    async requestApiValue (route: string) {
        try {
            const response = await axios.get<string>(route, { baseURL: this.apiUrl });

            return response;
        } catch (err) {
            console.log(`Error occured on Explorer API call. Route: ${route}`, err);
            return null;
        }
    }

    async update () {
        if (this.proxyRoutesCollection.size === 0) {
            return;
        } else {
            for await (const route of this.proxyRoutesCollection.keys()) {
                const response = await this.requestApiValue(route);

                if (response !== null) {
                    await this.contractApp.storage.hset(
                        this.storageKey,
                        route,
                        `${response.data}`
                    )
                }
            }
        }
    }

    async startPulling () {
        await this.contractApp.storage.del(this.storageKey);

        this.updateInterval = setInterval(
            async () => {
                await this.update();
            },
            this.updateFrequency
        )
    }

    async stopPulling () {
        clearInterval(this.updateInterval);
    }
}

export default ExplorerApiService;