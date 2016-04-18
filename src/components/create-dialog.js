import {map} from 'lodash';
import Checkbox from 'material-ui/Checkbox';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import React, {Component, PropTypes} from 'react';

export class CreateDialog extends Component {
    static get propTypes() {
        return {
            open: PropTypes.bool.isRequired,
            types: PropTypes.object.isRequired,
            onClose: PropTypes.func.isRequired,
            onCreate: PropTypes.func.isRequired,
        };
    }

    constructor(props) {
        super(props);

        this.state = {
            type: null,
            isPrivate: false,
        };
    }

    handleSubmit(e) {
        if (e) e.preventDefault();
        if (!this.checkValidity()) return;

        this.props.onCreate({
            name: this.name.getValue(),
            type: this.state.type,
            private: this.state.isPrivate,
        });
    }

    checkValidity() {
        const {
            type,
        } = this.state;

        return this.name && this.name.getValue() && type;
    }

    render() {
        const {
            open,
            types,
            onClose,
        } = this.props;
        const {
            isPrivate,
            type,
        } = this.state;

        const actions = [
            <FlatButton
                primary
                disabled={!this.checkValidity()}
                key="create"
                label="Create"
                onTouchTap={() => this.handleSubmit()}
            />,
            <FlatButton
                secondary
                key="cancel"
                label="Cancel"
                onTouchTap={onClose}
            />,
        ];

        const typeElements = map(types, (value, key) => (
            <MenuItem key={key} primaryText={value} value={key} />
        ));

        return (
            <Dialog
                actions={actions}
                open={open}
                title="Create Character"
                onRequestClose={onClose}
            >
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <TextField
                        fullWidth
                        required
                        defaultValue={name}
                        floatingLabelText="Character Name"
                        name="name"
                        ref={(c) => (this.name = c)}
                        onChange={(e, value) => this.setState({name: value})}
                    />
                    <SelectField
                        fullWidth
                        required
                        floatingLabelText="Sheet Type"
                        name="type"
                        value={type}
                        onChange={
                            (e, i, value) => this.setState({type: value})
                        }
                    >
                        {typeElements}
                    </SelectField>
                    <Checkbox
                        checked={isPrivate}
                        label="Private"
                        name="private"
                        onCheck={(e, c) => this.setState({isPrivate: c})}
                    />
                </form>
            </Dialog>
        );
    }
}
