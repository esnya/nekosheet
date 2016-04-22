import {zip} from 'lodash';
import {
    blue200,
    blue400,
    green200,
    green400,
    grey500,
    red200,
    red400,
} from 'material-ui/styles/colors';
import React, {PropTypes} from 'react';

const radius = 300;
const points = [0, 1, 2, 3, 4, 5]
    .map((n) => n / 6 * Math.PI * 2 + Math.PI / 6)
    .map((r) => [Math.sin(r), -Math.cos(r)]);
const max = 6 * 6;

const Hexagon = (props) => {
    const {
        values,
        ...others,
    } = props;

    const p = zip(values.map((value) => value / max * radius), points)
        .map(([r, [x, y]]) => `${x * r},${y * r}`)
        .join(' ');

    return <polygon points={p} {...others} />;
};
Hexagon.propTypes = {
    values: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export const AbilityRader = (props) => {
    const {
        data,
        ...others,
    } = props;

    const radRays = points.map(([x, y], i) => (
        <line
            key={i}
            x1={0} x2={x * radius}
            y1={0} y2={y * radius}
        />
    ));

    const baseValues = ['skill', 'skill', 'body', 'body', 'mind', 'mind']
        .map((key) => data[`ability_${key}`]);
    const initialValues = zip(
            'abcdef'.split('').map((key) => data[`ability_${key}`]),
            baseValues
        )
        .map(([base, ability]) => +base + +ability);
    const totalValues = ['dex', 'agi', 'str', 'vit', 'int', 'spr']
        .map((key) => data[key]);

    const labels = points.map(([x, y], i) => (
        <g
            key={i}
            transform={`translate(${x * (radius - 10)}, ${y * (radius - 10)})`}
        >
            <text x={0} y={0}>
                {"ABCDEF".charAt(i)}
            </text>
        </g>
    ));


    return (
        <svg height={radius * 2} width={radius * 2} {...others}>
            <g transform={`translate(${radius}, ${radius})`}>
                <g strokeWidth="2">
                    <Hexagon
                        fill={blue200}
                        stroke={blue400}
                        values={totalValues}
                    />
                    <Hexagon
                        fill={green200}
                        stroke={green400}
                        values={initialValues}
                    />
                    <Hexagon
                        fill={red200}
                        stroke={red400}
                        values={baseValues}
                    />
                </g>
                <g
                    fill="none"
                    stroke={grey500}
                    strokwWidth="1"
                    style={{opacity: 0.25}}
                >
                    {radRays}
                    <Hexagon values={[6, 6, 6, 6, 6, 6]} />
                    <Hexagon values={[12, 12, 12, 12, 12, 12]} />
                    <Hexagon values={[18, 18, 18, 18, 18, 18]} />
                    <Hexagon values={[24, 24, 24, 24, 24, 24]} />
                    <Hexagon values={[30, 30, 30, 30, 30, 30]} />
                    {labels}
                </g>
            </g>
        </svg>
    );
};
AbilityRader.propTypes = {
    data: PropTypes.object.isRequired,
};
