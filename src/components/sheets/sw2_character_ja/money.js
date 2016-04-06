import React, {PropTypes} from 'react';
import {Col} from '../../col';
import {Row} from '../../row';
import {SheetField} from '../../sheet-field';

export const Money = ({changeHandler, data, readOnly}) => (
    <Row style={{padding: '0 8px'}}>
        <Col style={{margin: '0 8px'}}>
            <SheetField
                fullWidth
                label="所持金"
                readOnly={readOnly}
                type="number"
                value={data.money}
                onChange={changeHandler('money')}
            />
        </Col>
        <Col style={{margin: '0 8px'}}>
            <SheetField
                fullWidth
                label="貯金"
                readOnly={readOnly}
                type="number"
                value={data.deposit}
                onChange={changeHandler('deposit')}
            />
        </Col>
        <Col style={{margin: '0 8px'}}>
            <SheetField
                fullWidth
                label="借金"
                readOnly={readOnly}
                type="number"
                value={data.debit}
                onChange={changeHandler('debit')}
            />
        </Col>
    </Row>
);
Money.propTypes = {
    changeHandler: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    readOnly: PropTypes.bool.isRequired,
};
