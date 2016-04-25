import React, {PropTypes} from 'react';
import {Col} from '../../col';
import {ItemList} from '../../item-list';
import {Row} from '../../row';
import {SheetField} from '../../sheet-field';
import {SheetPaper} from '../../sheet-paper';
import {Tr, Td, Th} from '../../sheet-table';
import {compute} from './compute';
import {AbilityTable} from './ability';
import {Armor} from './armor';
import {Basis} from './basis';
import {BasicStandards} from './basic-standards';
import {CombatStandards} from './combat-standards';
import {Money} from './money';
import {OrnamentTable} from './ornament';
import {Shield} from './shield';
import {SkillStandards} from './skill-standards';
import {TableOfContents} from './table-of-contents';
import {WeaponTable} from './weapon';

export const sw2_character_ja = (props) => {
    const {id, readOnly, onChange, onPush, onDelete} = props;
    const data =  compute(props.data);

    const changeHandler =
        (...keys) => (e, value) => onChange(id, keys.join('/'), value);
    const appendHandler = (list, value = {}) => () => onPush(id, list, value);
    const listHandler =
        (list) => (e, key, value) => onChange(id, `${list}/${key}`, value);
    const pushHandler = (key, value = {}) => () => onPush(id, key, value);
    const removeHandler = (key1, key2) => () => onDelete(id, key1, key2);
    const deleteHandler = (list) => (e, key) => onDelete(id, list, key);

    const overflowStyle = {
        WebkitOverflowScroll: 'touch',
        overflowX: 'auto',
    };

    return (
        <div>
            <a id="basis" />
            <SheetPaper>
                <Basis
                    changeHandler={changeHandler}
                    data={data}
                    readOnly={readOnly}
                />
            </SheetPaper>
            <Row>
                <Col style={{marginBottom: 16, maxWidth: '100%'}} width={450}>
                    <a id="ability" />
                    <SheetPaper style={overflowStyle}>
                        <AbilityTable
                            changeHandler={changeHandler}
                            data={data}
                            readOnly={readOnly}
                        />
                    </SheetPaper>
                </Col>
                <Col style={{marginBottom: 16, maxWidth: '100%'}} width={450}>
                    <a id="skill" />
                    <SheetPaper style={overflowStyle}>
                        <ItemList
                            fields={[
                                {
                                    key: 'skill',
                                    label: '技能',
                                    type: 'select',
                                    items: [
                                        'ファイター(近A)',
                                        'グラップラー(近A)',
                                        'フェンサー(近B)',
                                        'シューター(近B)',
                                        'ソーサラー(魔A)',
                                        'コンジャラー(魔A)',
                                        'プリースト(魔A)',
                                        'フェアリーテイマー(魔A)',
                                        'マギテック(魔A)',
                                        'デーモンルーラー(魔A)',
                                        'スカウト(他B)',
                                        'レンジャー(他B)',
                                        'セージ(他B)',
                                        'エンハンサー(他B)',
                                        'バード(他B)',
                                        'ライダー(他B)',
                                        'ウォーリーダー(他B)',
                                        'ミスティック(他B)',
                                    ],
                                },
                                {key: 'level', label: 'レベル', type: 'number'},
                                {
                                    key: 'magic_power',
                                    label: '魔力',
                                    type: 'number',
                                    readOnly: true,
                                },
                                {
                                    key: 'next_exp',
                                    label: '次経験点',
                                    type: 'number',
                                    readOnly: true,
                                },
                                {
                                    key: 'total_exp',
                                    label: '累計経験点',
                                    type: 'number',
                                    readOnly: true,
                                },
                            ]}
                            items={data.skills}
                            readOnly={readOnly}
                            onAppend={appendHandler('skills', {level: 1})}
                            onChange={listHandler('skills')}
                            onDelete={deleteHandler('skills')}
                        />
                    </SheetPaper>
                </Col>
            </Row>
            <a id="standards" />
            <Row>
                <Col style={{marginBottom: 16}} width={200}>
                    <SheetPaper>
                        <BasicStandards
                            changeHandler={changeHandler}
                            data={data}
                            readOnly={readOnly}
                        />
                    </SheetPaper>
                </Col>
                <Col style={{marginBottom: 16}} width={200}>
                    <SheetPaper>
                        <SkillStandards
                            changeHandler={changeHandler}
                            data={data}
                            readOnly={readOnly}
                        />
                    </SheetPaper>
                </Col>
            </Row>
            <a id="feat" />
            <Row>
                <Col style={{marginBottom: 16}}>
                    <SheetPaper>
                        <ItemList
                            fields={[
                                {key: 'feat', label: '戦闘特技'},
                                {key: 'auto', label: '自動', type: 'checkbox'},
                                {key: 'effect', label: '効果'},
                            ]}
                            items={data.feats}
                            readOnly={readOnly}
                            onAppend={appendHandler('feats', {auto: false})}
                            onChange={listHandler('feats')}
                            onDelete={deleteHandler('feats')}
                        />
                    </SheetPaper>
                </Col>
                <Col style={{marginBottom: 16}}>
                    <SheetPaper>
                        <ItemList
                            fields={[
                                {key: 'technique', label: '練技/呪歌/騎芸/占瞳/鼓咆'},
                                {key: 'effect', label: '効果'},
                            ]}
                            items={data.techniques}
                            readOnly={readOnly}
                            onAppend={appendHandler('techniques')}
                            onChange={listHandler('techniques')}
                            onDelete={deleteHandler('techniques')}
                        />
                    </SheetPaper>
                </Col>
            </Row>
            <Row>
                <Col style={{marginBottom: 16}}>
                    <a id="language" />
                    <SheetPaper>
                        <ItemList
                            fields={[
                                {key: 'language', label: '言語'},
                                {key: 'talk', label: '会話', type: 'checkbox'},
                                {key: 'read', label: '読文', type: 'checkbox'},
                            ]}
                            items={data.languages}
                            readOnly={readOnly}
                            onAppend={appendHandler('languages')}
                            onChange={listHandler('languages')}
                            onDelete={deleteHandler('languages')}
                        />
                    </SheetPaper>
                </Col>
                <Col style={{marginBottom: 16}}>
                    <a id="honor" />
                    <SheetPaper>
                        <ItemList
                            fields={[
                                {key: 'item', label: '名誉アイテム'},
                                {key: 'honor', label: '名誉点', type: 'number'},
                            ]}
                            items={data.honors}
                            readOnly={readOnly}
                            onAppend={appendHandler('honors')}
                            onChange={listHandler('honors')}
                            onDelete={deleteHandler('honors')}
                        >
                            <Tr>
                                <Th>所持名誉点</Th>
                                <Td>
                                    <SheetField
                                        fullWidth
                                        readOnly={readOnly}
                                        type="number"
                                        value={data.honor}
                                        onChange={changeHandler('honor')}
                                    />
                                </Td>
                            </Tr>
                            <Tr>
                                <Th>合計名誉点</Th>
                                <Td>
                                    <SheetField
                                        fullWidth
                                        readOnly
                                        type="number"
                                        value={data.total_honor}
                                        onChange={changeHandler('total_honor')}
                                    />
                                </Td>
                            </Tr>
                        </ItemList>
                    </SheetPaper>
                </Col>
            </Row>
            <a id="note" />
            <SheetPaper style={{padding: '0 16px'}}>
                <SheetField
                    fullWidth
                    multiLine
                    label="経歴、メモ"
                    readOnly={readOnly}
                    value={data.note}
                    onChange={changeHandler('note')}
                />
            </SheetPaper>
            <a id="weapon" />
            <WeaponTable
                changeHandler={changeHandler}
                data={data}
                pushHandler={pushHandler}
                readOnly={readOnly}
                removeHandler={removeHandler}
            />
            <Row>
                <Col style={{marginBottom: 16}} width={200}>
                    <a id="armor" />
                    <SheetPaper>
                        <Armor
                            changeHandler={changeHandler}
                            data={data}
                            readOnly={readOnly}
                        />
                    </SheetPaper>
                </Col>
                <Col style={{marginBottom: 16}} width={200}>
                    <a id="shield" />
                    <SheetPaper>
                        <Shield
                            changeHandler={changeHandler}
                            data={data}
                            readOnly={readOnly}
                        />
                    </SheetPaper>
                </Col>
            </Row>
            <a id="combat" />
            <SheetPaper>
                <CombatStandards
                    changeHandler={changeHandler}
                    data={data}
                    readOnly={readOnly}
                />
            </SheetPaper>
            <a id="ornament" />
            <SheetPaper>
                <OrnamentTable
                    changeHandler={changeHandler}
                    data={data}
                    readOnly={readOnly}
                />
            </SheetPaper>
            <a id="money" />
            <SheetPaper>
                <Money
                    changeHandler={changeHandler}
                    data={data}
                    readOnly={readOnly}
                />
            </SheetPaper>
            <Row>
                <Col style={{marginBottom: 16}}>
                    <a id="inventory" />
                    <SheetPaper style={{padding: '0 8px'}}>
                        <SheetField
                            fullWidth
                            multiLine
                            label="所持品"
                            readOnly={readOnly}
                            value={data.inventory}
                            onChange={changeHandler('inventory')}
                        />
                    </SheetPaper>
                </Col>
                <Col style={{marginBottom: 16}}>
                    <a id="supply" />
                    <SheetPaper>
                        <ItemList
                            fields={[
                                {key: 'supply', label: '消耗品'},
                                {key: 'count', label: '個数', type: 'number'},
                            ]}
                            items={data.supplies}
                            readOnly={readOnly}
                            onAppend={appendHandler('supplies')}
                            onChange={listHandler('supplies')}
                            onDelete={deleteHandler('supplies')}
                        />
                    </SheetPaper>
                </Col>
            </Row>
            <TableOfContents />
        </div>
    );
};
sw2_character_ja.propTypes = {
    data: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onPush: PropTypes.func.isRequired,
    readOnly: PropTypes.bool,
};
