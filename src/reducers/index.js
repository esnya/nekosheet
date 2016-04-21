import {combineReducers} from 'redux';
import {character} from './character';
import {dialogs} from './dialogs';
import {editor} from './editor';
import {immutable} from './immutable';

export const reducers = combineReducers({
    character,
    characters: immutable([]),
    dialogs,
    editor,
    types: immutable({}),
    user: immutable({}),
});
