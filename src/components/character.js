import AppBar from 'material-ui/lib/app-bar';
import Card from 'material-ui/lib/card/card';
import CardActions from 'material-ui/lib/card/card-actions';
import CardMedia from 'material-ui/lib/card/card-media';
import CardText from 'material-ui/lib/card/card-text';
import FlatButton from 'material-ui/lib/flat-button';
import IconButton from 'material-ui/lib/icon-button';
import Remove from 'material-ui/lib/svg-icons/content/remove';
import ChevronLeft from 'material-ui/lib/svg-icons/navigation/chevron-left';
import Portrait from 'material-ui/lib/svg-icons/image/portrait';
import React, {Component, PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
import {Character as CharacterShape} from '../shapes/character';
import {Col} from './col';
import {Row} from './row';
import {SheetField} from './sheet-field';
import * as sheets from './sheets';

export class Character extends Component {
    static get propTypes() {
        return Object.assign({
            readOnly: PropTypes.bool.isRequired,
            types: PropTypes.object.isRequired,
            onChange: PropTypes.func.isRequired,
            onDelete: PropTypes.func.isRequired,
            onDeletePortrait: PropTypes.func.isRequired,
            onPortraitChange: PropTypes.func.isRequired,
            onPush: PropTypes.func.isRequired,
        }, CharacterShape);
    }

    render() {
        const {
            id,
            data,
            name,
            portrait,
            readOnly,
            type,
            types,
            user_id,
            onChange,
            onDelete,
            onDeletePortrait,
            onPush,
            onPortraitChange,
        } = this.props;

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

        const portraitElement = portrait && (
            <CardMedia style={{textAlign: 'center'}}>
                <img
                    src={portrait}
                    style={{minWidth: 'auto', width: 'auto'}}
                />
            </CardMedia>
        );
        const portraitDeleteButton = portrait && (
            <FlatButton
                label={<Remove />}
                style={{flex: '1 1 auto'}}
                onTouchTap={() => onDeletePortrait(id)}
            />
        );

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
                    <Card style={{margin: '0 8px 16px'}}>
                        {portraitElement}
                        <CardActions style={{display: 'flex'}}>
                            <input
                                accept="image/*"
                                ref={(c) => (this.portrait = c)}
                                style={{display: 'none'}}
                                type="file"
                                onChange={
                                    () => onPortraitChange(
                                        id,
                                        this.portrait.files
                                    )
                                }
                            />
                            <FlatButton
                                label={<Portrait />}
                                style={{flex: '1 1 auto'}}
                                onTouchTap={
                                    () =>
                                        findDOMNode(this.portrait).click()
                                }
                            />
                            {portraitDeleteButton}
                        </CardActions>
                        <CardText style={{padding: '0 8px'}}>
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
                        </CardText>
                    </Card>
                    {sheetElement}
                </div>
            </div>
        );
    }
}
