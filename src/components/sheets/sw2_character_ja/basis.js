import React, {PropTypes} from 'react';
import {Col} from '../../col';
import {Row} from '../../row';
import {SheetField} from '../../sheet-field';

export const Basis = ({changeHandler, data, readOnly}) => (
    <div style={{margin: '0 8px'}}>
        <Row>
            <Col style={{margin: '0 8px'}}>
                <SheetField
                    fullWidth
                    readOnly
                    label="冒険者レベル"
                    type="number"
                    value={data.level}
                />
            </Col>
            <Col style={{margin: '0 8px'}}>
                <SheetField
                    fullWidth
                    label="経験点"
                    readOnly={readOnly}
                    type="number"
                    value={data.exp}
                    onChange={changeHandler('exp')}
                />
            </Col>
            <Col style={{margin: '0 8px'}}>
                <SheetField
                    fullWidth
                    readOnly
                    label="累計経験点"
                    type="number"
                    value={data.total_exp}
                />
            </Col>
            <Col style={{margin: '0 8px'}}>
                <SheetField
                    fullWidth
                    label="1ゾロ"
                    readOnly={readOnly}
                    type="number"
                    value={data.fumble}
                    onChange={changeHandler('fumble')}
                />
            </Col>
        </Row>
        <Row>
            <Col style={{margin: '0 8px'}}>
                <SheetField
                    fullWidth
                    label="種族"
                    readOnly={readOnly}
                    value={data.race}
                    onChange={changeHandler('race')}
                />
            </Col>
            <Col style={{margin: '0 8px'}}>
                <SheetField
                    fullWidth
                    label="種族特徴"
                    readOnly={readOnly}
                    value={data.race_ability}
                    onChange={changeHandler('race_ability')}
                />
            </Col>
            <Col style={{margin: '0 8px'}}>
                <SheetField
                    fullWidth
                    label="生まれ"
                    readOnly={readOnly}
                    value={data.natinality}
                    onChange={changeHandler('natinality')}
                />
            </Col>
        </Row>
        <Row>
            <Col style={{margin: '0 8px'}}>
                <SheetField
                    fullWidth
                    label="年齢"
                    readOnly={readOnly}
                    type="number"
                    value={data.age}
                    onChange={changeHandler('age')}
                />
            </Col>
            <Col style={{margin: '0 8px'}}>
                <SheetField
                    fullWidth
                    label="性別"
                    readOnly={readOnly}
                    value={data.sex}
                    onChange={changeHandler('sex')}
                />
            </Col>
            <Col style={{margin: '0 8px'}}>
                <SheetField
                    fullWidth
                    label="穢れ"
                    readOnly={readOnly}
                    type="number"
                    value={data.foul}
                    onChange={changeHandler('foul')}
                />
            </Col>
        </Row>
    </div>
);
Basis.propTypes = {
    changeHandler: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    readOnly: PropTypes.bool.isRequired,
};
