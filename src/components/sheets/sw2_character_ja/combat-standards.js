import React, {PropTypes} from 'react';
import {Col} from '../../col';
import {Row} from '../../row';
import {SheetField} from '../../sheet-field';

export const CombatStandards = ({changeHandler, data, readOnly}) => (
    <Row style={{padding: '0 8px'}}>
        <Col style={{margin: '0 8px'}}>
            <SheetField
                fullWidth
                items={[
                    '(選択なし)',
                    'ファイター(近A)',
                    'グラップラー(近A)',
                    'フェンサー(近B)',
                    'シューター(近B)',
                ]}
                label="回避技能"
                readOnly={readOnly}
                type="select"
                value={data.evade_skill}
                onChange={changeHandler('evade_skill')}
            />
        </Col>
        <Col style={{margin: '0 8px'}}>
            <SheetField
                fullWidth
                readOnly
                label="回避力"
                type="number"
                value={data.evasion}
            />
        </Col>
        <Col style={{margin: '0 8px'}}>
            <SheetField
                fullWidth
                readOnly
                label="防護点"
                type="number"
                value={data.protection}
            />
        </Col>
    </Row>
);
CombatStandards.propTypes = {
    changeHandler: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    readOnly: PropTypes.bool.isRequired,
};
