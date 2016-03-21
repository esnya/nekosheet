import * as Dialog from '../actions/dialog';

export const dialogs = (state = [], action) => {
    switch (action.type) {
        case Dialog.OPEN:
            return [
                {id: action.id},
                ...state,
            ];
        case Dialog.CLOSE: {
            const close = state.find(({id}) => id === action.id);
            if (!close) return state;

            return state.filter((dialog) => dialog !== close);
        }
        default:
            return state;
    }
};
