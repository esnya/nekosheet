import {UPDATE} from '../actions/character';

export const character = (state = null, action) => {
    switch (action.type) {
        case UPDATE:
            return {...action.character};
        default:
            return state;
    }
};
