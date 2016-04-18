import {
    blue500,
    orange500,
} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from '../browser/store';
import {Home} from '../containers/home';
import {Character} from '../containers/character';
import {Router} from './router';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: blue500,
        accent1Color: orange500,
    },
});

const route = window.INITIAL_ROUTE;
const routes = {
    Character,
    Home,
};

export const App = () => (
    <Provider store={store}>
        <MuiThemeProvider muiTheme={muiTheme}>
            <Router {...route} routes={routes} />
        </MuiThemeProvider>
    </Provider>
);
