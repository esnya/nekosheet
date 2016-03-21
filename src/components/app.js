import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../browser/store';
import {Home} from '../containers/home';
import {Character} from '../containers/character';
import {Router} from './router';

const route = window.INITIAL_ROUTE;
const routes = {
    Character,
    Home,
};

export const App = () => (
    <Provider store={store}>
        <Router {...route} routes={routes} />
    </Provider>
);
