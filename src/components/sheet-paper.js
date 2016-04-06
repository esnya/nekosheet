import Paper from 'material-ui/lib/paper';
import React, {PropTypes} from 'react';

export const SheetPaper = (props) => {
    const {
        children,
        style,
        ...otherProps,
    } = props;

    const Style = {
        height: '100%',
        margin: '0 8px 16px',
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
