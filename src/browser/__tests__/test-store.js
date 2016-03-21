describe('store', () => {
    const {createStore} = require('redux');
    const mockStore = {};
    createStore.mockReturnValue(mockStore);

    jest.unmock('../store');
    const {store} = require('../store');

    it('expoeses store', () => {
        expect(store).toBe(mockStore);
    });
});
