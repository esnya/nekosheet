import {post} from 'axios';
import {pick} from 'lodash';
import {connect} from 'react-redux';
import {close} from '../actions/dialog';
import {CreateDialog as Component} from '../components/create-dialog';
import {open} from './dialog';

export const CREATE_DIALOG = 'create';

export const CreateDialog = connect(
    (state) => ({
        ...pick(state, 'types'),
        open: open(state, CREATE_DIALOG),
    }),
    (dispatch) => ({
        onClose: () => dispatch(close(CREATE_DIALOG)),
        onCreate: (data) => post('/', data)
            .then(({data}) => (location.href = `/${data.id}`)),
    })
)(Component);
