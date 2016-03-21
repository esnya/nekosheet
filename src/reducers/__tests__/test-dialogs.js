describe('dialogs', () => {
    jest.unmock('../../actions/dialog');
    const Dialog = require('../../actions/dialog');

    jest.unmock('../dialogs');
    const {dialogs} = require('../dialogs');

    let state;

    const dispatch = (action) => {
        state = dialogs(state, action);
    };

    it('has initial state of array', () => {
        dispatch({type: 'TEST_INIT'});

        expect(state).toEqual([]);
    });

    it('pushes dialog', () => {
        dispatch(Dialog.open('TEST_DIALOG1'));

        expect(state).toEqual([
            {id: 'TEST_DIALOG1'},
        ]);
    });

    it('pushes another dialog', () => {
        dispatch(Dialog.open('TEST_DIALOG2'));

        expect(state).toEqual([
            {id: 'TEST_DIALOG2'},
            {id: 'TEST_DIALOG1'},
        ]);
    });

    it('closes dialog', () => {
        dispatch(Dialog.close('TEST_DIALOG1'));

        expect(state).toEqual([
            {id: 'TEST_DIALOG2'},
        ]);
    });

    it('closes another dialog', () => {
        dispatch(Dialog.close('TEST_DIALOG2'));

        expect(state).toEqual([]);
    });
});
