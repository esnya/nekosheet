describe('routes', () => {
    const app = {
        ...require('express/lib/application'),
    };

    jest.unmock('../router');
    const {router} = require('../router');

    it('sets routes', () => {
        router(app);

        const get = app.get.mock.calls.map((call) => call[0]);
        expect(get).toContain('/');
        expect(get).toContain('/:id([0-9a-f]+)');

        const post = app.post.mock.calls.map((call) => call[0]);
        expect(post).toContain('/');
    });
});
