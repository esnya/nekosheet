import React, {PropTypes} from 'react';
import {Col} from '../../col';
import {Row} from '../../row';
import {SheetField} from '../../sheet-field';

export const BasicStandards = ({data}) => (
    <div style={{margin: '0 8px'}}>
        <Row>
            <Col width={80}>
                <SheetField
                    fullWidth
                    readOnly
                    label="生命抵抗力"
                    type="number"
                    value={data.vit_res}
                />
            </Col>
            <Col width={80}>
                <SheetField
                    fullWidth
                    readOnly
                    label="精神抵抗力"
                    type="number"
                    value={data.spr_res}
                />
            </Col>
        </Row>
        <Row>
            <Col width={80}>
                <SheetField
                    fullWidth
                    readOnly
                    label="HP"
                    type="number"
                    value={data.hp}
                />
            </Col>
            <Col width={80}>
                <SheetField
                    fullWidth
                    readOnly
                    label="MP"
                    type="number"
                    value={data.mp}
                />
            </Col>
        </Row>
    </div>
);
BasicStandards.propTypes = {
    data: PropTypes.object.isRequired,
};
