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
        ...otherProps,
    } = props;

    const Style = {
        margin: 16,
        padding: Array.isArray(children) ? 16 : 0,
    };

    return (
        <Paper {...otherProps} style={Style}>
            {children}
        </Paper>
    );
};
Group.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.Element,
        PropTypes.arrayOf(PropTypes.Element),
    ]),
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
                    <Th>自動習得</Th>
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
        data.honors ? _(data.honors).map(({honor}) => +honor || 0).sum(): 0;

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
