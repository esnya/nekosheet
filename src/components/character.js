import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import Paper from 'material-ui/lib/paper';
import ChevronLeft from 'material-ui/lib/svg-icons/navigation/chevron-left';
import React, {PropTypes} from 'react';
import {Character as CharacterShape} from '../shapes/character';
import {Col} from './col';
import {Row} from './row';
import {SheetField} from './sheet-field';
import {SheetPaper} from './sheet-paper';
import * as sheets from './sheets';

export const Character = (props) => {
    const {
        id,
        data,
        name,
        readOnly,
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
            data={data || {}}
            id={id}
            readOnly={readOnly}
            onChange={onChange}
            onDelete={onDelete}
            onPush={onPush}
        />
    );

    document.title = `${name || ''} - Nekosheet`;

    return (
        <div>
            <AppBar
                iconElementLeft={
                    <IconButton onTouchTap={() => (location.href = '/')}>
                        <ChevronLeft />
                    </IconButton>
                }
                title={name}
            />
            <div style={{padding: '16px 8px 0'}}>
                <SheetPaper style={{padding: '0 8px'}}>
                    <Row>
                        <Col style={{margin: '0 8px'}}>
                            <SheetField
                                fullWidth
                                label="Name"
                                value={name}
                                onChange={changeHandler('name')}
                            />
                        </Col>
                        <Col style={{margin: '0 8px'}}>
                            <SheetField
                                fullWidth
                                readOnly
                                label="User"
                                value={user_id}
                            />
                        </Col>
                        <Col style={{margin: '0 8px'}}>
                            <SheetField
                                fullWidth
                                readOnly
                                label="Type"
                                value={types[type]}
                            />
                        </Col>
                    </Row>
                </SheetPaper>
                {sheetElement}
            </div>
        </div>
    );
};
Character.propTypes = Object.assign({
    readOnly: PropTypes.bool.isRequired,
    types: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onPush: PropTypes.func.isRequired,
}, CharacterShape);
