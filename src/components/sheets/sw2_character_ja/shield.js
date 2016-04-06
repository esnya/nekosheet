import React, {PropTypes} from 'react';
import {Col} from '../../col';
import {Row} from '../../row';
import {SheetField} from '../../sheet-field';

export const Shield = ({changeHandler, data, readOnly}) => (
    <div style={{padding: '0 8px'}}>
        <Row>
            <Col style={{margin: '0 8px'}}>
                <SheetField
                    fullWidth
                    label="盾"
                    readOnly={readOnly}
                    value={data.shield}
                    onChange={changeHandler('shield')}
                />
            </Col>
            <Col style={{margin: '0 8px'}}>
                <SheetField
                    fullWidth
                    label="必筋"
                    readOnly={readOnly}
                    type="number"
                    value={data.shield_str_req}
                    onChange={changeHandler('shield_str_req')}
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
                    value={data.shield_evasion}
                    onChange={changeHandler('shield_evasion')}
                />
            </Col>
            <Col style={{margin: '0 8px'}}>
                <SheetField
                    fullWidth
                    label="防護点"
                    readOnly={readOnly}
                    type="number"
                    value={data.shield_protection}
                    onChange={changeHandler('shield_protection')}
                />
            </Col>
        </Row>
        <div style={{padding: '0 8px'}}>
            <SheetField
                fullWidth
                multiLine
                label="備考"
                readOnly={readOnly}
                value={data.shield_note}
                onChange={changeHandler('shield_note')}
            />
        </div>
    </div>
);
Shield.propTypes = {
    changeHandler: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    readOnly: PropTypes.bool.isRequired,
};
