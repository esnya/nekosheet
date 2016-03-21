import {map} from 'lodash';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';
import TextField from 'material-ui/lib/text-field';
import SelectField from 'material-ui/lib/select-field';
import MenuItem from 'material-ui/lib/menus/menu-item';
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
        };
    }

    handleSubmit(e) {
        if (e) e.preventDefault();
        if (!this.checkValidity()) return;

        this.props.onCreate({
            name: this.name.getValue(),
            type: this.state.type,
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
                </form>
            </Dialog>
        );
    }
}
