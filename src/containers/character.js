import axios, {post, put} from 'axios';
import {connect} from 'react-redux';
import {update} from '../actions/character';
import {Character as Component} from '../components/character';

export const Character = connect(
    (state) => ({
        ...state.character,
        types: state.types,
        readOnly: state.user.id !== state.character.user_id,
    }),
    (dispatch) => ({
        onChange: (id, key, value) => put(`/${id}/${key}`, {id, key, value})
            .then(({data}) => dispatch(update(data))),
        onDelete: (id, key1, key2) => axios
            .delete(`/${id}/${key1}/${key2}`, {id, key1, key2})
            .then(({data}) => dispatch(update(data))),
        onDeletePortrait: (id) => {
            axios.delete(`/${id}/portrait`)
                .then(({data}) => dispatch(update(data)));
        },
        onPortraitChange: (id, files) => {
            const file = files[0];
            const reader = new FileReader();
            reader.onload = () => axios({
                    method: 'POST',
                    url: `/${id}/portrait`,
                    data: reader.result,
                    headers: {
                        'Content-Type': file.type,
                    },
                })
                .then(({data}) => dispatch(update(data)));
            reader.readAsArrayBuffer(file);
        },
        onPush: (id, key, value) => post(`/${id}/${key}`, {id, key, value})
            .then(({data}) => dispatch(update(data))),
    })
)(Component);
