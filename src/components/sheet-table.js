import React, {PropTypes} from 'react';

export const Table = (props) => {
    const {
        children,
        ...otherProps,
    } = props;
    const Style = {
        width: 'calc(100% - 16px)',
        margin: 8,
        boxSizing: 'border-box',
    };

    return (
        <table {...otherProps} style={Style}>
            {children}
        </table>
    );
};
Table.propTypes = {
    children: PropTypes.arrayOf(PropTypes.Element),
};

export const Thead = 'thead';
export const Tbody = 'tbody';
export const Tfoot = 'tfoot';
export const Tr = 'tr';

export const Th = (props) => {
    const {
        children,
        style,
        ...otherProps,
    } = props;
    const Style = {
        padding: 8,
        verticalAlign: 'bottom',
    };

    return (
        <th {...otherProps} style={{...Style, ...style}}>{children}</th>
    );
};
Th.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.Element,
        PropTypes.arrayOf(PropTypes.Element),
    ]),
    style: PropTypes.object,
};

export const Td = (props) => {
    const {
        children,
        style,
        ...otherProps,
    } = props;
    const Style = {
        padding: 8,
        verticalAlign: 'bottom',
    };

    return (
        <td {...otherProps} style={{...Style, ...style}}>{children}</td>
    );
};
Td.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.Element,
        PropTypes.arrayOf(PropTypes.Element),
    ]),
    style: PropTypes.object,
};
