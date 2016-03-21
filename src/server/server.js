import {Server as HttpServer} from 'http';
import {getLogger} from 'log4js';
import express from 'express';
import {router} from './router';

export class Server extends HttpServer {
    constructor(config) {
        super((...args) => this.onRequest(...args));

        this.app = express();
        router(this.app);

        this.logger = getLogger('[server]');
        ['info', 'error', 'debug', 'fatal'].forEach((key) => {
            this[key] = (...args) => this.logger[key](...args);
        });

        this.listen(config.listen, () => this.onListen());
    }

    onListen() {
        const {
            address,
            port,
        } = this.address();

        this.info(`Listening on ${address} ${port}`);
    }

    onRequest(...args) {
        this.app(...args);
    }
}
