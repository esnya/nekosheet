import React, {PropTypes} from 'react';

export const Row = (props) => {
    const {
        style,
        tag,
        ...otherProps,
    } = props;

    const Style = {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
    };
    const Tag = tag || 'div';

    return <Tag {...otherProps} style={{...Style, ...style}} />;
};
Row.propTypes = {
    style: PropTypes.object,
    tag: PropTypes.string,
};
