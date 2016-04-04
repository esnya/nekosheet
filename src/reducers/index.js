import {combineReducers} from 'redux';
import {character} from './character';
import {dialogs} from './dialogs';
import {immutable} from './immutable';

export const reducers = combineReducers({
    character,
    characters: immutable([]),
    dialogs,
    types: immutable({}),
    user: immutable({}),
});
