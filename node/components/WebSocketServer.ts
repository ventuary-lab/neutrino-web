// const webSocketServer = require('websocket').server;
import { server as WebSocketModule } from 'websocket';
import * as http from "http";
import { Logger } from 'winston';

export interface WebSocketParams {
    httpServer: http.Server;
    logger: Logger;
    _wsServer: WebSocketModule;
}

class WebSocketServer implements WebSocketParams {
    httpServer: http.Server;
    logger: Logger;
    _wsServer: WebSocketModule;

    constructor(params) {
        params = params || {};

        this.httpServer = params.httpServer;
        this.logger = params.logger;

        this._wsServer = null;

        this._onRequest = this._onRequest.bind(this);
    }

    start() {
        this.logger.info(`WebSocketServer started...`);

        // Create WS server
        this._wsServer = new WebSocketModule({
            httpServer: this.httpServer,
        });

        // Listen requests
        this._wsServer.on('request', this._onRequest);
    }

    stop() {
        if (this._wsServer) {
            this._wsServer.shutDown();
        }
    }

    push(message: string) {
        // Skip pushes when ws server is not started
        if (!this._wsServer) {
            return;
        }

        // this.logger.info('Send message to WebSocket connections... ' + message);

        this._wsServer.connections.forEach(connection => {
            connection.send(message);
        });
    }

    _onRequest(request: any) {
        const connection = request.accept(null, request.origin);

        // Log client connected
        this.logger.debug(`WebSocketServer user '${connection.remoteAddresses.join(', ')}' connected.`);
    }

};

export default WebSocketServer;