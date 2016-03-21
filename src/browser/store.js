import {createStore} from 'redux';
import {reducers} from '../reducers';

export const store = createStore(reducers, window.INITIAL_STATE);
