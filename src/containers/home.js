import {connect} from 'react-redux';
import {open} from '../actions/dialog';
import {Home as Component} from '../components/home';
import {CREATE_DIALOG} from './create-dialog';

export const Home = connect(
    () => ({}),
    (dispatch) => ({
        onCreate: () => dispatch(open(CREATE_DIALOG)),
    })
)(Component);
