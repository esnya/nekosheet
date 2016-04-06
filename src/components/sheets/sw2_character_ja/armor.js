import React, {PropTypes} from 'react';
import {Col} from '../../col';
import {Row} from '../../row';
import {SheetField} from '../../sheet-field';

export const Armor = ({changeHandler, data, readOnly}) => (
    <div style={{padding: '0 8px'}}>
        <Row>
            <Col style={{margin: '0 8px'}}>
                <SheetField
                    fullWidth
                    label="鎧"
                    readOnly={readOnly}
                    value={data.armor}
                    onChange={changeHandler('armor')}
                />
            </Col>
            <Col style={{margin: '0 8px'}}>
                <SheetField
                    fullWidth
                    label="必筋"
                    readOnly={readOnly}
                    type="number"
                    value={data.armor_str_req}
                    onChange={changeHandler('armor_str_req')}
                />
            </Col>
        </Row>
        <Row>
            <Col style={{margin: '0 8px'}}>
                <SheetField
                    fullWidth
                    label="回避修正"
                    readOnly={readOnly}
                    type="number"
                    value={data.armor_evasion}
                    onChange={changeHandler('armor_evasion')}
                />
            </Col>
            <Col style={{margin: '0 8px'}}>
                <SheetField
                    fullWidth
                    label="防護点"
                    readOnly={readOnly}
                    type="number"
                    value={data.armor_protection}
                    onChange={changeHandler('armor_protection')}
                />
            </Col>
        </Row>
        <div style={{padding: '0 8px'}}>
            <SheetField
                fullWidth
                multiLine
                label="備考"
                readOnly={readOnly}
                value={data.armor_note}
                onChange={changeHandler('armor_note')}
            />
        </div>
    </div>
);
Armor.propTypes = {
    changeHandler: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    readOnly: PropTypes.bool.isRequired,
};
