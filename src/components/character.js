import AppBar from 'material-ui/AppBar';
import Card from 'material-ui/Card/Card';
import CardActions from 'material-ui/Card/CardActions';
import CardMedia from 'material-ui/Card/CardMedia';
import CardText from 'material-ui/Card/CardText';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import Remove from 'material-ui/svg-icons/content/remove';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left';
import Portrait from 'material-ui/svg-icons/image/portrait';
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
        const privateCheckbox = readOnly ? null : (
            <Col style={{margin: '0px 8px 4px'}}>
                <SheetField
                    label="Private"
                    labelPosition="right"
                    labelStyle={{left: 10}}
                    type="checkbox"
                    value={this.props.private}
                    onChange={changeHandler('private')}
                />
            </Col>
        );

        return (
            <div>
                <a id="top" />
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
                            <Row style={{alignItems: 'end'}}>
                                <Col style={{margin: '0 8px'}}>
                                    <SheetField
                                        fullWidth
                                        label="Name"
                                        readOnly={readOnly}
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
                                {privateCheckbox}
                            </Row>
                        </CardText>
                    </Card>
                    {sheetElement}
                </div>
            </div>
        );
    }
}
