import Checkbox from 'material-ui/Checkbox';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import React, {Component, PropTypes} from 'react';

export class SheetField extends Component {
    static get propTypes() {
        return {
            items: PropTypes.array,
            fullWidth: PropTypes.bool,
            label: PropTypes.string,
            readOnly: PropTypes.bool,
            type: PropTypes.string,
            value: PropTypes.any,
            onChange: PropTypes.func,
        };
    }

    handleBlur(e) {
        const {
            readOnly,
            type,
            value,
            onChange,
        } = this.props;

        if (readOnly || !onChange) return;

        const changed = this.getValue();
        if (value === changed) return;

        onChange(e, type === 'number' ? +changed : changed);
    }

    getValue() {
        return this.field.getValue();
    }

    render() {
        const {
            items,
            label,
            readOnly,
            type,
            value,
            onChange,
            ...otherProps,
        } = this.props;

        if (readOnly) otherProps.value = value;

        const inputStyle = {
            textAlign: type === 'number' ? 'center' : 'left',
        };

        if (!readOnly && type === 'select') {
            const itemElements = items && items
                .map(
                    (item) => typeof(item) === 'string' ? {
                        label: item, value: item,
                    } : item
                )
                .map(({label, value}) => (
                    <MenuItem key={value} primaryText={label} value={value} />
                ));

            return (
                <SelectField
                    {...otherProps}
                    floatingLabelText={label}
                    readOnly={readOnly}
                    ref={(c) => (this.field = c)}
                    style={{whiteSpace: 'nowrap'}}
                    underlineShow={!readOnly}
                    value={value}
                    onChange={(e, i, v) => onChange && onChange(e, v)}
                >
                    {itemElements}
                </SelectField>
            );
        } else if (type === 'checkbox') {
            return (
                <Checkbox
                    {...otherProps}
                    checked={Boolean(value)}
                    label={label}
                    readOnly={readOnly}
                    ref={(c) => (this.field = c)}
                    style={{width: 16, display: 'inline-block'}}
                    onCheck={onChange}
                />
            );
        }

        return (
            <TextField
                {...otherProps}
                defaultValue={value}
                floatingLabelText={label}
                inputStyle={inputStyle}
                readOnly={readOnly}
                ref={(c) => (this.field = c)}
                type={readOnly ? 'text' : type}
                underlineShow={!readOnly}
                onBlur={(e) => this.handleBlur(e)}
            />
        );
    }
}
