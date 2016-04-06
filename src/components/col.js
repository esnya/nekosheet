import React, {PropTypes} from 'react';

export const Col = (props) => {
    const {
        style,
        tag,
        width,
        ...otherProps,
    } = props;

    const flexWidth = typeof(width) === 'number'
        ? `${width}px`
        : (width || '200px');

    const Style = {
        flex: `1 0 ${flexWidth}`,
    };
    const Tag = tag || 'div';

    return <Tag {...otherProps} style={{...Style, ...style}} />;
};
Col.propTypes = {
    style: PropTypes.object,
    tag: PropTypes.string,
    width: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
};
