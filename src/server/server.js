import {Server as HttpServer} from 'http';
import {getLogger} from 'log4js';
import express from 'express';
import {router} from './router';
import {session} from './session';

export class Server extends HttpServer {
    constructor(config) {
        super((...args) => this.onRequest(...args));

        const app = this.app = express();
        app.use(session());
        router(app);

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
