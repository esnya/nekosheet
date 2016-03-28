import _ from 'lodash';
import FlatButton from 'material-ui/lib/flat-button';
import IconButton from 'material-ui/lib/icon-button';
import Delete from 'material-ui/lib/svg-icons/action/delete';
import Add from 'material-ui/lib/svg-icons/content/add';
import Paper from 'material-ui/lib/paper';
import React, {PropTypes} from 'react';
import {SheetField} from '../sheet-field';

const Group = (props) => {
    const {
        children,
        style,
        ...otherProps,
    } = props;

    const Style = {
        margin: 16,
        padding: Array.isArray(children) ? '0 16px' : 0,
    };

    return (
        <Paper {...otherProps} style={{...Style, ...style}}>
            {children}
        </Paper>
    );
};
Group.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.Element,
        PropTypes.arrayOf(PropTypes.Element),
    ]),
    style: PropTypes.object,
};

const Table = (props) => {
    const {
        children,
        ...otherProps,
    } = props;
    const Style = {
        width: 'calc(100% - 16px)',
        margin: 8,
        boxSizing: 'border-box',
    };

    return (
        <table {...otherProps} style={Style}>
            {children}
        </table>
    );
};
Table.propTypes = {
    children: PropTypes.arrayOf(PropTypes.Element),
};
const Th = (props) => {
    const {
        children,
        style,
        ...otherProps,
    } = props;
    const Style = {
        padding: 8,
        verticalAlign: 'bottom',
    };

    return (
        <th {...otherProps} style={{...Style, ...style}}>{children}</th>
    );
};
Th.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.Element,
        PropTypes.arrayOf(PropTypes.Element),
    ]),
    style: PropTypes.object,
};
const Td = (props) => {
    const {
        children,
        style,
        ...otherProps,
    } = props;
    const Style = {
        padding: 8,
        verticalAlign: 'bottom',
    };

    return (
        <td {...otherProps} style={{...Style, ...style}}>{children}</td>
    );
};
Td.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.Element,
        PropTypes.arrayOf(PropTypes.Element),
    ]),
    style: PropTypes.object,
};

const AbilityTable = ({data, readOnly, changeHandler}) => (
    <Table>
        <thead>
            <tr>
                <Th colSpan={2}>能力値</Th>
                <Th>成長</Th>
                <Th>合計</Th>
                <Th>ボーナス</Th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <Td rowSpan={2}>
                    <SheetField
                        fullWidth
                        label="技"
                        readOnly={readOnly}
                        type="number"
                        value={data.ability_skill}
                        onChange={changeHandler('ability_skill')}
                    />
                </Td>
                <Td>
                    <SheetField
                        fullWidth
                        label="A"
                        readOnly={readOnly}
                        type="number"
                        value={data.ability_a}
                        onChange={changeHandler('ability_a')}
                    />
                </Td>
                <Td>
                    <SheetField
                        fullWidth
                        readOnly={readOnly}
                        type="number"
                        value={data.growth_a}
                        onChange={changeHandler('growth_a')}
                    />
                </Td>
                <Td>
                    <SheetField
                        fullWidth
                        readOnly
                        label="器用度"
                        type="number"
                        value={data.dex}
                    />
                </Td>
                <Td>
                    <SheetField
                        fullWidth
                        readOnly
                        type="number"
                        value={data.dex_bonus}
                    />
                </Td>
            </tr>
            <tr>
                <Td>
                    <SheetField
                        fullWidth
                        label="B"
                        readOnly={readOnly}
                        type="number"
                        value={data.ability_b}
                        onChange={changeHandler('ability_b')}
                    />
                </Td>
                <Td>
                    <SheetField
                        fullWidth
                        readOnly={readOnly}
                        type="number"
                        value={data.growth_b}
                        onChange={changeHandler('growth_b')}
                    />
                </Td>
                <Td>
                    <SheetField
                        fullWidth
                        readOnly
                        label="敏捷度"
                        type="number"
                        value={data.agi}
                    />
                </Td>
                <Td>
                    <SheetField
                        fullWidth
                        readOnly
                        type="number"
                        value={data.agi_bonus}
                    />
                </Td>
            </tr>
            <tr>
                <Td rowSpan={2}>
                    <SheetField
                        fullWidth
                        label="体"
                        readOnly={readOnly}
                        type="number"
                        value={data.ability_body}
                        onChange={changeHandler('ability_body')}
                    />
                </Td>
                <Td>
                    <SheetField
                        fullWidth
                        label="C"
                        readOnly={readOnly}
                        type="number"
                        value={data.ability_c}
                        onChange={changeHandler('ability_c')}
                    />
                </Td>
                <Td>
                    <SheetField
                        fullWidth
                        label=" "
                        readOnly={readOnly}
                        type="number"
                        value={data.growth_c}
                        onChange={changeHandler('growth_c')}
                    />
                </Td>
                <Td>
                    <SheetField
                        fullWidth
                        readOnly
                        label="筋力"
                        type="number"
                        value={data.pow}
                    />
                </Td>
                <Td>
                    <SheetField
                        fullWidth
                        readOnly
                        type="number"
                        value={data.pow_bonus}
                    />
                </Td>
            </tr>
            <tr>
                <Td>
                    <SheetField
                        fullWidth
                        label="D"
                        readOnly={readOnly}
                        type="number"
                        value={data.ability_d}
                        onChange={changeHandler('ability_d')}
                    />
                </Td>
                <Td>
                    <SheetField
                        fullWidth
                        readOnly={readOnly}
                        type="number"
                        value={data.growth_d}
                        onChange={changeHandler('growth_d')}
                    />
                </Td>
                <Td>
                    <SheetField
                        fullWidth
                        readOnly
                        label="生命力"
                        type="number"
                        value={data.vit}
                    />
                </Td>
                <Td>
                    <SheetField
                        fullWidth
                        readOnly
                        type="number"
                        value={data.vit_bonus}
                    />
                </Td>
            </tr>
            <tr>
                <Td rowSpan={2}>
                    <SheetField
                        fullWidth
                        label="心"
                        readOnly={readOnly}
                        type="number"
                        value={data.ability_mind}
                        onChange={changeHandler('ability_mind')}
                    />
                </Td>
                <Td>
                    <SheetField
                        fullWidth
                        label="E"
                        readOnly={readOnly}
                        type="number"
                        value={data.ability_e}
                        onChange={changeHandler('ability_e')}
                    />
                </Td>
                <Td>
                    <SheetField
                        fullWidth
                        label=" "
                        readOnly={readOnly}
                        type="number"
                        value={data.growth_e}
                        onChange={changeHandler('growth_e')}
                    />
                </Td>
                <Td>
                    <SheetField
                        fullWidth
                        readOnly
                        label="知力"
                        type="number"
                        value={data.int}
                    />
                </Td>
                <Td>
                    <SheetField
                        fullWidth
                        readOnly
                        type="number"
                        value={data.int_bonus}
                    />
                </Td>
            </tr>
            <tr>
                <Td>
                    <SheetField
                        fullWidth
                        label="F"
                        readOnly={readOnly}
                        type="number"
                        value={data.ability_f}
                        onChange={changeHandler('ability_f')}
                    />
                </Td>
                <Td>
                    <SheetField
                        fullWidth
                        readOnly={readOnly}
                        type="number"
                        value={data.growth_f}
                        onChange={changeHandler('growth_f')}
                    />
                </Td>
                <Td>
                    <SheetField
                        fullWidth
                        readOnly
                        label="精神力"
                        type="number"
                        value={data.spr}
                    />
                </Td>
                <Td>
                    <SheetField
                        fullWidth
                        readOnly
                        type="number"
                        value={data.spr_bonus}
                    />
                </Td>
            </tr>
        </tbody>
    </Table>
);
AbilityTable.propTypes = {
    changeHandler: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    readOnly: PropTypes.bool,
};

export const SkillTable = (props) => {
    const {
        changeHandler,
        data,
        pushHandler,
        readOnly,
        removeHandler,
    } = props;

    const itemElements = data.skills && data.skills.map((item, i) => (
        <tr key={i}>
            <Td>
                <SheetField
                    fullWidth
                    items={[
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
                    ]}
                    readOnly={readOnly}
                    type="select"
                    value={item.skill}
                    onChange={changeHandler('skills', i, 'skill')}
                />
            </Td>
            <Td>
                <SheetField
                    fullWidth
                    readOnly={readOnly}
                    type="number"
                    value={item.level}
                    onChange={changeHandler('skills', i, 'level')}
                />
            </Td>
            <Td>
                <SheetField
                    fullWidth
                    readOnly
                    type="number"
                    value={item.magic_power}
                />
            </Td>
            <Td>
                <SheetField
                    fullWidth
                    readOnly
                    type="number"
                    value={item.next_exp}
                />
            </Td>
            <Td>
                <SheetField
                    fullWidth
                    readOnly
                    type="number"
                    value={item.total_exp}
                />
            </Td>
            <Td style={{diaplay: readOnly ? 'none' : null}}>
                <IconButton onTouchTap={removeHandler('skills', i)}>
                    <Delete />
                </IconButton>
            </Td>
        </tr>
    ));

    return (
        <Table>
            <thead>
                <tr>
                    <Th>スキル</Th>
                    <Th>レベル</Th>
                    <Th>魔力</Th>
                    <Th>次経験点</Th>
                    <Th>累計経験点</Th>
                </tr>
            </thead>
            <tbody>{itemElements}</tbody>
            <tfoot>
                <tr style={{display: readOnly ? 'none' : null}}>
                    <Td colSpan={6}>
                        <FlatButton
                            label={<Add />}
                            style={{width: '100%'}}
                            onTouchTap={pushHandler('skills', {level: 1})}
                        />
                    </Td>
                </tr>
            </tfoot>
        </Table>
    );
};
SkillTable.propTypes = {
    changeHandler: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    pushHandler: PropTypes.func.isRequired,
    removeHandler: PropTypes.func.isRequired,
    readOnly: PropTypes.bool,
};

export const FeatTable = (props) => {
    const {
        changeHandler,
        data,
        pushHandler,
        readOnly,
        removeHandler,
    } = props;

    const itemElements = data.feats && data.feats.map((item, i) => (
        <tr key={i}>
            <Td>
                <SheetField
                    fullWidth
                    readOnly={readOnly}
                    value={item.feat}
                    onChange={changeHandler('feats', i, 'feat')}
                />
            </Td>
            <Td style={{textAlign: 'center'}}>
                <SheetField
                    fullWidth
                    readOnly={readOnly}
                    type="checkbox"
                    value={item.auto}
                    onChange={changeHandler('feats', i, 'auto')}
                />
            </Td>
            <Td>
                <SheetField
                    fullWidth
                    readOnly={readOnly}
                    value={item.effect}
                    onChange={changeHandler('feats', i, 'effect')}
                />
            </Td>
            <Td style={{diaplay: readOnly ? 'none' : null}}>
                <IconButton onTouchTap={removeHandler('feats', i)}>
                    <Delete />
                </IconButton>
            </Td>
        </tr>
    ));

    return (
        <Table>
            <thead>
                <tr>
                    <Th>戦闘特技</Th>
                    <Th>自動</Th>
                    <Th>効果</Th>
                </tr>
            </thead>
            <tbody>{itemElements}</tbody>
            <tfoot>
                <tr style={{display: readOnly ? 'none' : null}}>
                    <Td colSpan={4}>
                        <FlatButton
                            label={<Add />}
                            style={{width: '100%'}}
                            onTouchTap={pushHandler('feats', {auto: false})}
                        />
                    </Td>
                </tr>
            </tfoot>
        </Table>
    );
};
FeatTable.propTypes = {
    changeHandler: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    pushHandler: PropTypes.func.isRequired,
    removeHandler: PropTypes.func.isRequired,
    readOnly: PropTypes.bool,
};

export const TechTable = (props) => {
    const {
        changeHandler,
        data,
        pushHandler,
        readOnly,
        removeHandler,
    } = props;

    const itemElements = data.techs && data.techs.map((item, i) => (
        <tr key={i}>
            <Td>
                <SheetField
                    fullWidth
                    readOnly={readOnly}
                    value={item.tech}
                    onChange={changeHandler('techs', i, 'tech')}
                />
            </Td>
            <Td>
                <SheetField
                    fullWidth
                    readOnly={readOnly}
                    value={item.effect}
                    onChange={changeHandler('techs', i, 'effect')}
                />
            </Td>
            <Td style={{diaplay: readOnly ? 'none' : null}}>
                <IconButton onTouchTap={removeHandler('techs', i)}>
                    <Delete />
                </IconButton>
            </Td>
        </tr>
    ));

    return (
        <Table>
            <thead>
                <tr>
                    <Th>練技/呪歌/騎芸/占瞳/鼓咆</Th>
                    <Th>効果</Th>
                </tr>
            </thead>
            <tbody>{itemElements}</tbody>
            <tfoot>
                <tr style={{display: readOnly ? 'none' : null}}>
                    <Td colSpan={4}>
                        <FlatButton
                            label={<Add />}
                            style={{width: '100%'}}
                            onTouchTap={pushHandler('techs', {auto: false})}
                        />
                    </Td>
                </tr>
            </tfoot>
        </Table>
    );
};
TechTable.propTypes = {
    changeHandler: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    pushHandler: PropTypes.func.isRequired,
    removeHandler: PropTypes.func.isRequired,
    readOnly: PropTypes.bool,
};

export const LanguageTable = (props) => {
    const {
        changeHandler,
        data,
        pushHandler,
        readOnly,
        removeHandler,
    } = props;

    const itemElements = data.languages && data.languages.map((item, i) => (
        <tr key={i}>
            <Td>
                <SheetField
                    fullWidth
                    readOnly={readOnly}
                    value={item.language}
                    onChange={changeHandler('languages', i, 'language')}
                />
            </Td>
            <Td style={{textAlign: 'center'}}>
                <SheetField
                    fullWidth
                    readOnly={readOnly}
                    type="checkbox"
                    value={item.talk}
                    onChange={changeHandler('languages', i, 'talk')}
                />
            </Td>
            <Td style={{textAlign: 'center'}}>
                <SheetField
                    fullWidth
                    readOnly={readOnly}
                    type="checkbox"
                    value={item.read}
                    onChange={changeHandler('languages', i, 'read')}
                />
            </Td>
            <Td style={{diaplay: readOnly ? 'none' : null}}>
                <IconButton onTouchTap={removeHandler('languages', i)}>
                    <Delete />
                </IconButton>
            </Td>
        </tr>
    ));

    return (
        <Table>
            <thead>
                <tr>
                    <Th>言語</Th>
                    <Th>会話</Th>
                    <Th>読文</Th>
                </tr>
            </thead>
            <tbody>{itemElements}</tbody>
            <tfoot>
                <tr style={{display: readOnly ? 'none' : null}}>
                    <Td colSpan={4}>
                        <FlatButton
                            label={<Add />}
                            style={{width: '100%'}}
                            onTouchTap={pushHandler('languages', {auto: false})}
                        />
                    </Td>
                </tr>
            </tfoot>
        </Table>
    );
};
LanguageTable.propTypes = {
    changeHandler: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    pushHandler: PropTypes.func.isRequired,
    removeHandler: PropTypes.func.isRequired,
    readOnly: PropTypes.bool,
};

export const HonorTable = (props) => {
    const {
        changeHandler,
        data,
        pushHandler,
        readOnly,
        removeHandler,
    } = props;

    const itemElements = data.honors && data.honors.map((item, i) => (
        <tr key={i}>
            <Td>
                <SheetField
                    fullWidth
                    readOnly={readOnly}
                    value={item.item}
                    onChange={changeHandler('honors', i, 'item')}
                />
            </Td>
            <Td>
                <SheetField
                    fullWidth
                    label={null}
                    readOnly={readOnly}
                    type="number"
                    value={item.honor}
                    onChange={changeHandler('honors', i, 'honor')}
                />
            </Td>
            <Td style={{diaplay: readOnly ? 'none' : null}}>
                <IconButton onTouchTap={removeHandler('honors', i)}>
                    <Delete />
                </IconButton>
            </Td>
        </tr>
    ));

    return (
        <Table>
            <thead>
                <tr>
                    <Th>名誉アイテム</Th>
                    <Th>名誉点</Th>
                </tr>
            </thead>
            <tbody>{itemElements}</tbody>
            <tfoot>
                <tr style={{display: readOnly ? 'none' : null}}>
                    <Td colSpan={4}>
                        <FlatButton
                            label={<Add />}
                            style={{width: '100%'}}
                            onTouchTap={pushHandler('honors', {auto: false})}
                        />
                    </Td>
                </tr>
                <tr>
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
                </tr>
                <tr>
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
                </tr>
            </tfoot>
        </Table>
    );
};
HonorTable.propTypes = {
    changeHandler: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    pushHandler: PropTypes.func.isRequired,
    removeHandler: PropTypes.func.isRequired,
    readOnly: PropTypes.bool,
};

export const WeaponTable = (props) => {
    const {
        changeHandler,
        data,
        pushHandler,
        readOnly,
        removeHandler,
    } = props;

    const itemElements = data.weapons && data.weapons.map((item, i) => (
        <tr key={i}>
            <Td>
                <SheetField
                    fullWidth
                    readOnly={readOnly}
                    value={item.weapon}
                    onChange={changeHandler('weapons', i, 'weapon')}
                />
            </Td>
            <Td>
                <SheetField
                    fullWidth
                    readOnly={readOnly}
                    value={item.to_use}
                    onChange={changeHandler('weapons', i, 'to_use')}
                />
            </Td>
            <Td>
                <SheetField
                    fullWidth
                    readOnly={readOnly}
                    type="number"
                    value={item.str_req}
                    onChange={changeHandler('weapons', i, 'str_req')}
                />
            </Td>
            <Td>
                <SheetField
                    fullWidth
                    readOnly={readOnly}
                    type="number"
                    value={item.acc_cor}
                    onChange={changeHandler('weapons', i, 'acc_cor')}
                />
            </Td>
            <Td>
                <SheetField
                    fullWidth
                    readOnly
                    type="number"
                    value={item.acc}
                    onChange={changeHandler('weapons', i, 'acc')}
                />
            </Td>
            <Td>
                <SheetField
                    fullWidth
                    readOnly={readOnly}
                    type="number"
                    value={item.impact}
                    onChange={changeHandler('weapons', i, 'impact')}
                />
            </Td>
            <Td>
                <SheetField
                    fullWidth
                    readOnly={readOnly}
                    type="number"
                    value={item.impact_3}
                    onChange={changeHandler('weapons', i, 'impact_3')}
                />
            </Td>
            <Td>
                <SheetField
                    fullWidth
                    readOnly={readOnly}
                    type="number"
                    value={item.impact_4}
                    onChange={changeHandler('weapons', i, 'impact_4')}
                />
            </Td>
            <Td>
                <SheetField
                    fullWidth
                    readOnly={readOnly}
                    type="number"
                    value={item.impact_5}
                    onChange={changeHandler('weapons', i, 'impact_5')}
                />
            </Td>
            <Td>
                <SheetField
                    fullWidth
                    readOnly={readOnly}
                    type="number"
                    value={item.impact_6}
                    onChange={changeHandler('weapons', i, 'impact_6')}
                />
            </Td>
            <Td>
                <SheetField
                    fullWidth
                    readOnly={readOnly}
                    type="number"
                    value={item.impact_7}
                    onChange={changeHandler('weapons', i, 'impact_7')}
                />
            </Td>
            <Td>
                <SheetField
                    fullWidth
                    readOnly={readOnly}
                    type="number"
                    value={item.impact_8}
                    onChange={changeHandler('weapons', i, 'impact_8')}
                />
            </Td>
            <Td>
                <SheetField
                    fullWidth
                    readOnly={readOnly}
                    type="number"
                    value={item.impact_9}
                    onChange={changeHandler('weapons', i, 'impact_9')}
                />
            </Td>
            <Td>
                <SheetField
                    fullWidth
                    readOnly={readOnly}
                    type="number"
                    value={item.impact_10}
                    onChange={changeHandler('weapons', i, 'impact_10')}
                />
            </Td>
            <Td>
                <SheetField
                    fullWidth
                    readOnly={readOnly}
                    type="number"
                    value={item.impact_11}
                    onChange={changeHandler('weapons', i, 'impact_11')}
                />
            </Td>
            <Td>
                <SheetField
                    fullWidth
                    readOnly={readOnly}
                    type="number"
                    value={item.impact_12}
                    onChange={changeHandler('weapons', i, 'impact_12')}
                />
            </Td>
            <Td>
                <SheetField
                    fullWidth
                    readOnly={readOnly}
                    type="number"
                    value={item.critical}
                    onChange={changeHandler('weapons', i, 'critical')}
                />
            </Td>
            <Td>
                <SheetField
                    fullWidth
                    readOnly={readOnly}
                    type="number"
                    value={item.damage_cor}
                    onChange={changeHandler('weapons', i, 'damage_cor')}
                />
            </Td>
            <Td>
                <SheetField
                    fullWidth
                    readOnly={readOnly}
                    type="number"
                    value={item.damage}
                    onChange={changeHandler('weapons', i, 'damage')}
                />
            </Td>
            <Td>
                <SheetField
                    fullWidth
                    readOnly={readOnly}
                    value={item.note}
                    onChange={changeHandler('weapons', i, 'note')}
                />
            </Td>
            <Td style={{diaplay: readOnly ? 'none' : null}}>
                <IconButton onTouchTap={removeHandler('weapons', i)}>
                    <Delete />
                </IconButton>
            </Td>
        </tr>
    ));

    return (
        <Table>
            <thead>
                <tr>
                    <Th>武器</Th>
                    <Th>用法</Th>
                    <Th>必筋</Th>
                    <Th>命中修正</Th>
                    <Th>命中力</Th>
                    <Th>威力</Th>
                    <Th>③</Th>
                    <Th>④</Th>
                    <Th>⑤</Th>
                    <Th>⑥</Th>
                    <Th>⑦</Th>
                    <Th>⑧</Th>
                    <Th>⑨</Th>
                    <Th>⑩</Th>
                    <Th>⑪</Th>
                    <Th>⑫</Th>
                    <Th>C値</Th>
                    <Th>ダメージ修正</Th>
                    <Th>追加ダメージ</Th>
                    <Th>備考</Th>
                </tr>
            </thead>
            <tbody>{itemElements}</tbody>
            <tfoot>
                <tr style={{display: readOnly ? 'none' : null}}>
                    <Td colSpan={21}>
                        <FlatButton
                            label={<Add />}
                            style={{width: '100%'}}
                            onTouchTap={pushHandler('weapons', {auto: false})}
                        />
                    </Td>
                </tr>
            </tfoot>
        </Table>
    );
};
WeaponTable.propTypes = {
    changeHandler: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    pushHandler: PropTypes.func.isRequired,
    removeHandler: PropTypes.func.isRequired,
    readOnly: PropTypes.bool,
};

export const OrnamentTable = (props) => {
    const {
        changeHandler,
        data,
        readOnly,
    } = props;

    const tableLines = [
        ['head', '頭'],
        ['face', '顔'],
        ['ear', '耳'],
        ['neck', '首'],
        ['back', '背中'],
        ['rhand', '右手'],
        ['lhand', '左手'],
        ['waist', '腰'],
        ['leg', '足'],
        ['other', 'その他'],
    ].map(([key, label]) => (
        <tr key={key}>
            <Th style={{verticalAlign: 'center'}}>{label}</Th>
            <Td>
                <SheetField
                    fullWidth
                    readOnly={readOnly}
                    value={data[`ornament_${key}`]}
                    onChange={changeHandler(`ornament_${key}`)}
                />
            </Td>
            <Td>
                <SheetField
                    fullWidth
                    readOnly={readOnly}
                    value={data[`ornament_${key}_effect`]}
                    onChange={changeHandler(`ornament_${key}_effect`)}
                />
            </Td>
        </tr>
    ));

    return (
        <Table>
            <thead>
                <tr>
                    <Th />
                    <Th>装飾品</Th>
                    <Th>効果</Th>
                </tr>
            </thead>
            <tbody>{tableLines}</tbody>
        </Table>
    );
};
OrnamentTable.propTypes = {
    changeHandler: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    readOnly: PropTypes.bool,
};

export const SupplyTable = (props) => {
    const {
        changeHandler,
        data,
        pushHandler,
        readOnly,
        removeHandler,
    } = props;

    const itemElements = data.supplies && data.supplies.map((item, i) => (
        <tr key={i}>
            <Td>
                <SheetField
                    fullWidth
                    readOnly={readOnly}
                    value={item.supply}
                    onChange={changeHandler('supplies', i, 'supply')}
                />
            </Td>
            <Td>
                <SheetField
                    fullWidth
                    readOnly={readOnly}
                    type="number"
                    value={item.count}
                    onChange={changeHandler('supplies', i, 'count')}
                />
            </Td>
            <Td style={{diaplay: readOnly ? 'none' : null}}>
                <IconButton onTouchTap={removeHandler('supplies', i)}>
                    <Delete />
                </IconButton>
            </Td>
        </tr>
    ));

    return (
        <Table>
            <thead>
                <tr>
                    <Th>消耗品</Th>
                    <Th>個数</Th>
                </tr>
            </thead>
            <tbody>{itemElements}</tbody>
            <tfoot>
                <tr style={{display: readOnly ? 'none' : null}}>
                    <Td colSpan={4}>
                        <FlatButton
                            label={<Add />}
                            style={{width: '100%'}}
                            onTouchTap={pushHandler('supplies', {auto: false})}
                        />
                    </Td>
                </tr>
            </tfoot>
        </Table>
    );
};
SupplyTable.propTypes = {
    changeHandler: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    pushHandler: PropTypes.func.isRequired,
    removeHandler: PropTypes.func.isRequired,
    readOnly: PropTypes.bool,
};

const EXP_B = [
    0,
    500,
    1000,
    1000,
    1500,
    2000,
    2500,
    3000,
    4500,
    5000,
    5500,
];
const EXP_A = [
    0,
    ...EXP_B.slice(2),
];

export const sw2_character_ja = (props) => {
    const {id, data, readOnly, onChange, onPush, onDelete} = props;

    const changeHandler =
        (...keys) => (e, value) => onChange(id, keys.join('/'), value);
    const pushHandler = (key, value = {}) => () => onPush(id, key, value);
    const removeHandler = (key1, key2) => () => onDelete(id, key1, key2);

    data.level = data.skills && _(data.skills)
        .map('level')
        .max();
    [
        ['skill', 'a', 'dex'],
        ['skill', 'b', 'agi'],
        ['body',  'c', 'pow'],
        ['body',  'd', 'vit'],
        ['mind',  'e', 'int'],
        ['mind',  'f', 'spr'],
    ].forEach((keys) => {
        const sum = _(data)
            .pick([
                `ability_${keys[0]}`,
                `ability_${keys[1]}`,
                `growth_${keys[1]}`,
            ])
            .values()
            .filter()
            .map((a) => +a)
            .sum();

        data[keys[2]] = sum;
        data[`${keys[2]}_bonus`] = Math.floor(sum / 6);
    });
    data.vit_res = data.level * 3 + data.vit_bonus;
    data.spr_res = data.level * 3 + data.spr_bonus;
    data.hp = data.level * 3 + data.vit;
    data.mp = (
        data.skills && _(data.skills)
            .filter(({skill}) => skill && skill.match(/\(魔[AB]\)$/))
            .map('level')
            .sum()
    ) * 3 + data.spr;
    if (data.skills) {
        data.skills.forEach((skill) => {
            if (!skill.skill) return;

            const m = skill.skill.match(/\((.)([AB])\)$/);
            if (!m) return;

            const cat = m[1];
            const table = m[2];

            if (cat === '魔') {
                skill.magic_power = +skill.level + +data.int_bonus;
            }

            const exp = table === 'A' ? EXP_A : EXP_B;
            const next = +skill.level + 1;
            skill.next_exp = exp[next];
            skill.total_exp = _(exp).slice(0, next).sum();
        });
        data.total_exp = _(data.skills)
            .filter('total_exp')
            .map('total_exp')
            .sum() +
            (data.fumble || 0) * 50 +
            (+data.exp || 0);
    }
    data.total_honor = (+data.honor || 0) +
        (data.honors ? _(data.honors).map(({honor}) => +honor || 0).sum() : 0);
    const sage = data.skills &&
        data.skills.find(({skill}) => skill && skill.match(/^セージ/));
    const rider = data.skills &&
        data.skills.find(({skill}) => skill && skill.match(/^ライダー/));
    data.monster_lore = sage ? (+sage.level + data.int_bonus) : 0;
    if (rider && rider.level > 0) {
        data.monster_lore += ` (${+rider.level + data.int_bonus})`;
    }
    const scout_wl_level = data.skills &&
        _(data.skills)
            .filter(({skill}) => skill && skill.match(/^(スカウト|ウォーリーダー)/))
            .map('level')
            .max();
    data.initiative = scout_wl_level > 0 ? scout_wl_level + data.int_bonus : 0;
    data.limited_speed = 3;
    data.speed = data.agi;
    data.maximum_speed = data.speed * 3;
    const evade_skill = data.skills &&
        data.skills.find(({skill}) => skill && skill === data.evade_skill);
    data.evasion =
        (
            evade_skill && evade_skill.level > 0
                ? +evade_skill.level + data.agi_bonus
                : 0
        ) + (+data.armor_evasion || 0) + (+data.shield_evasion || 0);
    data.protection =
        (+data.armor_protection || 0) + (+data.shield_protection || 0);

    return (
        <div>
            <Group>
                <SheetField
                    fullWidth
                    readOnly
                    label="冒険者レベル"
                    type="number"
                    value={data.level}
                />
                <SheetField
                    fullWidth
                    label="経験点"
                    readOnly={readOnly}
                    type="number"
                    value={data.exp}
                    onChange={changeHandler('exp')}
                />
                <SheetField
                    fullWidth
                    readOnly
                    label="累計経験点"
                    type="number"
                    value={data.total_exp}
                />
                <SheetField
                    fullWidth
                    label="1ゾロ"
                    readOnly={readOnly}
                    type="number"
                    value={data.fumble}
                    onChange={changeHandler('fumble')}
                />
                <SheetField
                    fullWidth
                    label="種族"
                    readOnly={readOnly}
                    value={data.race}
                    onChange={changeHandler('race')}
                />
                <SheetField
                    fullWidth
                    label="種族特徴"
                    readOnly={readOnly}
                    value={data.race_ability}
                    onChange={changeHandler('race_ability')}
                />
                <SheetField
                    fullWidth
                    label="年齢"
                    readOnly={readOnly}
                    type="number"
                    value={data.age}
                    onChange={changeHandler('age')}
                />
                <SheetField
                    fullWidth
                    label="性別"
                    readOnly={readOnly}
                    value={data.sex}
                    onChange={changeHandler('sex')}
                />
                <SheetField
                    fullWidth
                    label="生まれ"
                    readOnly={readOnly}
                    value={data.natinality}
                    onChange={changeHandler('natinality')}
                />
                <SheetField
                    fullWidth
                    label="穢れ"
                    readOnly={readOnly}
                    type="number"
                    value={data.foul}
                    onChange={changeHandler('foul')}
                />
            </Group>
            <Group>
                <AbilityTable
                    changeHandler={changeHandler}
                    data={data}
                    readOnly={readOnly}
                />
            </Group>
            <Group>
                <SheetField
                    fullWidth
                    readOnly
                    label="生命抵抗力"
                    type="number"
                    value={data.vit_res}
                />
                <SheetField
                    fullWidth
                    readOnly
                    label="精神抵抗力"
                    type="number"
                    value={data.spr_res}
                />
                <SheetField
                    fullWidth
                    readOnly
                    label="HP"
                    type="number"
                    value={data.hp}
                />
                <SheetField
                    fullWidth
                    readOnly
                    label="MP"
                    type="number"
                    value={data.mp}
                />
            </Group>
            <Group>
                <SkillTable
                    changeHandler={changeHandler}
                    data={data}
                    pushHandler={pushHandler}
                    readOnly={readOnly}
                    removeHandler={removeHandler}
                />
            </Group>
            <Group>
                <FeatTable
                    changeHandler={changeHandler}
                    data={data}
                    pushHandler={pushHandler}
                    readOnly={readOnly}
                    removeHandler={removeHandler}
                />
            </Group>
            <Group>
                <TechTable
                    changeHandler={changeHandler}
                    data={data}
                    pushHandler={pushHandler}
                    readOnly={readOnly}
                    removeHandler={removeHandler}
                />
            </Group>
            <Group>
                <LanguageTable
                    changeHandler={changeHandler}
                    data={data}
                    pushHandler={pushHandler}
                    readOnly={readOnly}
                    removeHandler={removeHandler}
                />
            </Group>
            <Group>
                <HonorTable
                    changeHandler={changeHandler}
                    data={data}
                    pushHandler={pushHandler}
                    readOnly={readOnly}
                    removeHandler={removeHandler}
                />
            </Group>
            <Group style={{padding: '0 16px'}}>
                <SheetField
                    fullWidth
                    multiLine
                    label="経歴、メモ"
                    readOnly={readOnly}
                    value={data.note}
                    onChange={changeHandler('note')}
                />
            </Group>
            <Group>
                <SheetField
                    fullWidth
                    readOnly
                    label="魔物知識"
                    type="number"
                    value={data.monster_lore}
                />
                <SheetField
                    fullWidth
                    readOnly
                    label="先制力"
                    type="number"
                    value={data.initiative}
                />
                <SheetField
                    fullWidth
                    readOnly
                    label="制限移動"
                    type="number"
                    value={data.limited_speed}
                />
                <SheetField
                    fullWidth
                    readOnly
                    label="移動力"
                    type="number"
                    value={data.speed}
                />
                <SheetField
                    fullWidth
                    readOnly
                    label="全力移動"
                    type="number"
                    value={data.maximum_speed}
                />
            </Group>
            <Group>
                <WeaponTable
                    changeHandler={changeHandler}
                    data={data}
                    pushHandler={pushHandler}
                    readOnly={readOnly}
                    removeHandler={removeHandler}
                />
            </Group>
            <Group>
                <SheetField
                    fullWidth
                    label="鎧"
                    readOnly={readOnly}
                    value={data.armor}
                    onChange={changeHandler('armor')}
                />
                <SheetField
                    fullWidth
                    label="必筋"
                    readOnly={readOnly}
                    type="number"
                    value={data.armor_str_req}
                    onChange={changeHandler('armor_str_req')}
                />
                <SheetField
                    fullWidth
                    label="回避修正"
                    readOnly={readOnly}
                    type="number"
                    value={data.armor_evasion}
                    onChange={changeHandler('armor_evasion')}
                />
                <SheetField
                    fullWidth
                    label="防護点"
                    readOnly={readOnly}
                    type="number"
                    value={data.armor_protection}
                    onChange={changeHandler('armor_protection')}
                />
                <SheetField
                    fullWidth
                    label="備考"
                    readOnly={readOnly}
                    value={data.armor_note}
                    onChange={changeHandler('armor_note')}
                />
            </Group>
            <Group>
                <SheetField
                    fullWidth
                    label="盾"
                    readOnly={readOnly}
                    value={data.shield}
                    onChange={changeHandler('shield')}
                />
                <SheetField
                    fullWidth
                    label="必筋"
                    readOnly={readOnly}
                    type="number"
                    value={data.shield_str_req}
                    onChange={changeHandler('shield_str_req')}
                />
                <SheetField
                    fullWidth
                    label="回避修正"
                    readOnly={readOnly}
                    type="number"
                    value={data.shield_evasion}
                    onChange={changeHandler('shield_evasion')}
                />
                <SheetField
                    fullWidth
                    label="防護点"
                    readOnly={readOnly}
                    type="number"
                    value={data.shield_protection}
                    onChange={changeHandler('shield_protection')}
                />
                <SheetField
                    fullWidth
                    label="備考"
                    readOnly={readOnly}
                    value={data.shield_note}
                    onChange={changeHandler('shield_note')}
                />
            </Group>
            <Group>
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
                <SheetField
                    fullWidth
                    readOnly
                    label="回避力"
                    type="number"
                    value={data.evasion}
                />
                <SheetField
                    fullWidth
                    readOnly
                    label="防護点"
                    type="number"
                    value={data.protection}
                />
            </Group>
            <Group>
                <OrnamentTable
                    changeHandler={changeHandler}
                    data={data}
                    readOnly={readOnly}
                />
            </Group>
            <Group>
                <SheetField
                    fullWidth
                    label="所持金"
                    readOnly={readOnly}
                    type="number"
                    value={data.money}
                    onChange={changeHandler('money')}
                />
                <SheetField
                    fullWidth
                    label="貯金"
                    readOnly={readOnly}
                    type="number"
                    value={data.deposit}
                    onChange={changeHandler('deposit')}
                />
                <SheetField
                    fullWidth
                    label="借金"
                    readOnly={readOnly}
                    type="number"
                    value={data.debit}
                    onChange={changeHandler('debit')}
                />
            </Group>
            <Group style={{padding: '0 16px'}}>
                <SheetField
                    fullWidth
                    multiLine
                    label="所持品"
                    readOnly={readOnly}
                    value={data.inventory}
                    onChange={changeHandler('inventory')}
                />
            </Group>
            <Group>
                <SupplyTable
                    changeHandler={changeHandler}
                    data={data}
                    pushHandler={pushHandler}
                    readOnly={readOnly}
                    removeHandler={removeHandler}
                />
            </Group>
        </div>
    );
};
sw2_character_ja.propTypes = {
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onPush: PropTypes.func.isRequired,
    data: PropTypes.object,
    readOnly: PropTypes.bool,
};
sw2_character_ja.defaultProps = {
    data: {},
};
