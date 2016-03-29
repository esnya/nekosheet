import Paper from 'material-ui/lib/paper';
import React, {PropTypes} from 'react';

export const SheetPaper = (props) => {
    const {
        children,
        style,
        ...otherProps,
    } = props;

    const Style = {
        margin: 16,
        padding: Array.isArray(children) ? '0 16px' : 0,
        overflow: 'hidden',
        overflowX: 'auto',
        WebkitOverflowScrolling: 'touch',
    };

    return (
        <Paper {...otherProps} style={{...Style, ...style}}>
            {children}
        </Paper>
    );
};
SheetPaper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.Element,
        PropTypes.arrayOf(PropTypes.Element),
    ]),
    style: PropTypes.object,
};
