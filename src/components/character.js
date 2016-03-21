import AppBar from 'material-ui/lib/app-bar';
import Paper from 'material-ui/lib/paper';
import React, {PropTypes} from 'react';
import {Character as CharacterShape} from '../shapes/character';
import {SheetField} from './sheet-field';
import * as sheets from './sheets';

export const Character = (props) => {
    const {
        id,
        data,
        name,
        type,
        types,
        user_id,
        onChange,
        onDelete,
        onPush,
    } = props;

    const changeHandler = (key) => (e, value) => onChange(id, key, value);
    const Sheet = sheets[type];
    const sheetElement = Sheet && (
        <Sheet
            data={data}
            id={id}
            onChange={onChange}
            onDelete={onDelete}
            onPush={onPush}
        />
    );

    return (
        <div>
            <AppBar title={name} />
            <Paper style={{margin: 16, padding: 16}}>
                <SheetField
                    fullWidth
                    label="Name"
                    value={name}
                    onChange={changeHandler('name')}
                />
                <SheetField fullWidth readOnly label="User" value={user_id} />
                <SheetField
                    fullWidth
                    readOnly
                    label="Type"
                    value={types[type]}
                />
            </Paper>
            {sheetElement}
        </div>
    );
};
Character.propTypes = Object.assign({
    types: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onPush: PropTypes.func.isRequired,
}, CharacterShape);
