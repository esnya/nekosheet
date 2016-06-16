describe('Server', () => {
    jest.setMock('redis', {});

    jest.setMock('express', jest.fn());
    const express = require('express');
    const app = jest.fn();
    app.use = jest.fn();

    jest.mock('http');
    const http = require('http');
    const {
        IncomingMessage,
        ServerResponse,
    } = http;

    const {router} = require('../router');

    jest.unmock('../server');
    const {Server} = require('../server');

    let logger, server, sup;
    it('listens as HTTP server', () => {
        express.mockReturnValue(app);

        server = new Server({
            listen: {
                host: 'localhost',
                port: 8000,
            },
        });

        expect(server instanceof http.Server).toBe(true);

        const instances = http.Server.mock.instances;
        expect(instances.length).toBe(1);
        sup = instances[0];

        const calls = sup.listen.mock.calls;
        expect(calls.length).toBe(1);
        expect(calls[0][0]).toEqual({
            host: 'localhost',
            port: 8000,
        });

        sup.address.mockReturnValue({
            address: '127.0.0.1',
            port: 8000,
        });
        calls[0][1]();
    });

    it('calls router', () => {
        expect(router).toBeCalledWith(app);
    });

    it('handles as express application', () => {
        const req = new IncomingMessage();
        const res = new ServerResponse();
        const next = jest.fn();

        http.Server.mock.calls[0][0](req, res, next);

        expect(app).toBeCalledWith(req, res, next);
    });
});
