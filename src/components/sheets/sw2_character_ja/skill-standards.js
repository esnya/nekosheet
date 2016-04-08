import React, {PropTypes} from 'react';
import {Col} from '../../col';
import {Row} from '../../row';
import {SheetField} from '../../sheet-field';

export const SkillStandards = ({data}) => (
    <div style={{margin: '0 8px'}}>
        <Row>
            <Col width={80}>
                <SheetField
                    fullWidth
                    readOnly
                    label="魔物知識"
                    type="number"
                    value={data.monster_lore}
                />
            </Col>
            <Col width={80}>
                <SheetField
                    fullWidth
                    readOnly
                    label="先制力"
                    type="number"
                    value={data.initiative}
                />
            </Col>
        </Row>
        <Row>
            <Col width={80}>
                <SheetField
                    fullWidth
                    readOnly
                    label="制限移動"
                    type="number"
                    value={data.limited_speed}
                />
            </Col>
            <Col width={80}>
                <SheetField
                    fullWidth
                    readOnly
                    label="移動力"
                    type="number"
                    value={data.speed}
                />
            </Col>
            <Col width={80}>
                <SheetField
                    fullWidth
                    readOnly
                    label="全力移動"
                    type="number"
                    value={data.maximum_speed}
                />
            </Col>
        </Row>
    </div>
);
SkillStandards.propTypes = {
    data: PropTypes.object.isRequired,
};
