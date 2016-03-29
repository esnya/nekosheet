import FlatButton from 'material-ui/lib/flat-button';
import IconButton from 'material-ui/lib/icon-button';
import Delete from 'material-ui/lib/svg-icons/action/delete';
import Add from 'material-ui/lib/svg-icons/content/add';
import React, {PropTypes} from 'react';
import {SheetField} from './sheet-field';
import {Table, Thead, Tbody, Tfoot, Tr, Td, Th} from './sheet-table';

export const ItemList = (props) => {
    const {
        children,
        fields,
        items,
        keyField,
        readOnly,
        onAppend,
        onChange,
        onDelete,
    } = props;

    const headerElements = fields.map((field) => {
        const {
            key,
            label,
        } = field;

        return <Th key={key}>{label}</Th>;
    });

    const itemElements = items && items.map((item, i) => {
        const ikey = keyField ? item[keyField] : i;

        const columnElements = fields.map((field) => {
            const {
                key,
                type,
                items,
            } = field;

            const style = type === 'checkbox'
                ? {textAlign: 'center'}
                : {};

            return (
                <Td key={key} style={style}>
                    <SheetField
                        fullWidth
                        items={items}
                        readOnly={props.readOnly || field.readOnly}
                        type={type}
                        value={item[key]}
                        onChange={
                            (e, v) => onChange &&
                                onChange(e, `${ikey}/${key}`, v)
                        }
                    />
                </Td>
            );
        });

        return (
            <Tr key={ikey}>
                {columnElements}
                <Td>
                    <IconButton
                        disabled={readOnly}
                        onTouchTap={(e) => onDelete && onDelete(e, ikey)}
                    >
                        <Delete />
                    </IconButton>
                </Td>
            </Tr>
        );
    });

    return (
        <Table>
            <Thead>
                <Tr>{headerElements}</Tr>
            </Thead>
            <Tbody>
                {itemElements}
            </Tbody>
            <Tfoot>
                <Tr>
                    <Td colSpan={fields.length + 1}>
                        <FlatButton
                            style={{width: '100%'}}
                            onTouchTap={onAppend}
                        >
                            <Add />
                        </FlatButton>
                    </Td>
                </Tr>
                {children}
            </Tfoot>
        </Table>
    );
};
ItemList.propTypes = {
    fields: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        type: PropTypes.string,
        items: PropTypes.array,
    })).isRequired,
    children: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.arrayOf(PropTypes.element),
    ]),
    items: PropTypes.arrayOf(PropTypes.object),
    keyField: PropTypes.string,
    readOnly: PropTypes.bool,
    onAppend: PropTypes.func,
    onChange: PropTypes.func,
    onDelete: PropTypes.func,
};
