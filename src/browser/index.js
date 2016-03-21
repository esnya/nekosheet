import React from 'react';
import {render} from 'react-dom';
import injectTouchTapEvent from 'react-tap-event-plugin';
import {App} from '../components/app';

injectTouchTapEvent();
render(<App />, document.getElementById('app'));
