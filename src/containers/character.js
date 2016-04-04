import axios, {post, put} from 'axios';
import {connect} from 'react-redux';
import {update} from '../actions/character';
import {Character as Component} from '../components/character';

export const Character = connect(
    (state) => ({
        ...state.character,
        types: state.types,
    }),
    (dispatch) => ({
        onChange: (id, key, value) => put(`/${id}/${key}`, {id, key, value})
            .then(({data}) => dispatch(update(data))),
        onDelete: (id, key1, key2) => axios
            .delete(`/${id}/${key1}/${key2}`, {id, key1, key2})
            .then(({data}) => dispatch(update(data))),
        onPush: (id, key, value) => post(`/${id}/${key}`, {id, key, value})
            .then(({data}) => dispatch(update(data))),
    })
)(Component);
