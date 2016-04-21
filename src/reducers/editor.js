import {EDIT} from '../actions/editor';

export const editor = (state = {edit: false}, action) => {
    switch (action.type) {
        case EDIT:
            return {
                ...state,
                edit: action.edit,
            };
    }

    return state;
};
