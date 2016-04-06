import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';
import Delete from 'material-ui/lib/svg-icons/action/delete';
import FlatButton from 'material-ui/lib/flat-button';
import React, {PropTypes} from 'react';
import {Col} from '../../col';
import {Row} from '../../row';
import {SheetField} from '../../sheet-field';
import {Table, Thead, Tbody, Tr, Td, Th} from '../../sheet-table';

export const WeaponTable = (props) => {
    const {
        changeHandler,
        data,
        pushHandler,
        readOnly,
        removeHandler,
    } = props;

    const itemElements = data.weapons && data.weapons.map((item, i) => {
        const skill = item.skill &&
            data.skills.find(({skill}) => skill && skill === item.skill);
        item.acc = (skill ? (+skill.level + data.dex_bonus) : 0) +
            (+item.acc_cor || 0);
        item.damage = (skill ? (+skill.level + data.str_bonus) : 0) +
            (+item.damage_cor || 0);

        const impacts = [3,4,5,6,7,8,9,10,11,12];
        const impactHeaders = impacts.map((n) => <Th key={n}>{n}</Th>);
        const impactElements = impacts.map((n) => {
            const key = `impact_${n}`;

            return (
                <Td key={key}>
                    <SheetField
                        fullWidth
                        readOnly={readOnly}
                        type="number"
                        value={item[key]}
                        onChange={changeHandler('weapons', i, key)}
                    />
                </Td>
            );
        });
        const deleteElement = readOnly ? null : (
            <FlatButton
                label={<Delete />}
                style={{width: '100%'}}
                onTouchTap={removeHandler('weapons', i)}
            />
        );

        return (
            <Card key={i} style={{margin: '0 8px 16px'}}>
                <CardHeader
                    actAsExpander
                    showExpandableButton
                    subtitle="武器"
                    title={item.weapon}
                />
                <CardText expandable style={{padding: '0 8px 16px'}}>
                    <Row>
                        <Col style={{margin: '0 8px'}}>
                            <SheetField
                                fullWidth
                                label="名前"
                                readOnly={readOnly}
                                value={item.weapon}
                                onChange={
                                    changeHandler('weapons', i, 'weapon')
                                }
                            />
                        </Col>
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
                                label="使用技能"
                                readOnly={readOnly}
                                type="select"
                                value={item.skill}
                                onChange={
                                    changeHandler('weapons', i, 'skill')
                                }
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{margin: '0 8px'}}>
                            <SheetField
                                fullWidth
                                label="用法"
                                readOnly={readOnly}
                                value={item.to_use}
                                onChange={
                                    changeHandler('weapons', i, 'to_use')
                                }
                            />
                        </Col>
                        <Col style={{margin: '0 8px'}}>
                            <SheetField
                                fullWidth
                                label="必筋"
                                readOnly={readOnly}
                                type="number"
                                value={item.str_req}
                                onChange={
                                    changeHandler('weapons', i, 'str_req')
                                }
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{margin: '0 8px'}}>
                            <SheetField
                                fullWidth
                                label="命中修正"
                                readOnly={readOnly}
                                type="number"
                                value={item.acc_cor}
                                onChange={
                                    changeHandler('weapons', i, 'acc_cor')
                                }
                            />
                        </Col>
                        <Col style={{margin: '0 8px'}}>
                            <SheetField
                                fullWidth
                                readOnly
                                label="命中力"
                                type="number"
                                value={item.acc}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{margin: '0 8px'}}>
                            <SheetField
                                fullWidth
                                label="威力"
                                readOnly={readOnly}
                                type="number"
                                value={item.impact}
                                onChange={
                                    changeHandler('weapons', i, 'impact')
                                }
                            />
                        </Col>
                        <Col style={{margin: '0 8px'}}>
                            <SheetField
                                fullWidth
                                label="C値"
                                readOnly={readOnly}
                                type="number"
                                value={item.critical}
                                onChange={
                                    changeHandler('weapons', i, 'critical')
                                }
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{margin: '0 8px'}}>
                            <SheetField
                                fullWidth
                                label="ダメージ修正"
                                readOnly={readOnly}
                                type="number"
                                value={item.damage_cor}
                                onChange={
                                    changeHandler('weapons', i, 'damage_cor')
                                }
                            />
                        </Col>
                        <Col style={{margin: '0 8px'}}>
                            <SheetField
                                fullWidth
                                readOnly
                                label="追加ダメージ"
                                type="number"
                                value={item.damage}
                            />
                        </Col>
                    </Row>
                    <SheetField
                        fullWidth
                        multiLine
                        label="補足"
                        readOnly={readOnly}
                        value={item.note}
                        onChange={
                            changeHandler('weapons', i, 'note')
                        }
                    />
                    <Table>
                        <Thead><Tr><Th>2</Th>{impactHeaders}</Tr></Thead>
                        <Tbody><Tr><Th>*</Th>{impactElements}</Tr></Tbody>
                    </Table>
                    {deleteElement}
                </CardText>
            </Card>
        );
    });

    const appendElement = readOnly ? null : (
        <div style={{margin: '0 8px 16px'}}>
            <FlatButton
                label="武器追加"
                style={{width: '100%'}}
                onTouchTap={pushHandler('weapons', {
                    weapon: '(新しい武器)',
                    critical: 10,
                })}
            />
        </div>
    );

    return (
        <div>
            {itemElements}
            {appendElement}
        </div>
    );
};
WeaponTable.propTypes = {
    changeHandler: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    pushHandler: PropTypes.func.isRequired,
    removeHandler: PropTypes.func.isRequired,
    readOnly: PropTypes.bool,
};
