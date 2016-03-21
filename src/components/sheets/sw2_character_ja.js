import _ from 'lodash';
import FlatButton from 'material-ui/lib/flat-button';
import IconButton from 'material-ui/lib/icon-button';
import Delete from 'material-ui/lib/svg-icons/action/delete';
import Add from 'material-ui/lib/svg-icons/content/add';
import Paper from 'material-ui/lib/paper';
import React, {PropTypes} from 'react';
import {SheetField} from '../sheet-field';

const AbilityTable = ({data, readOnly, changeHandler}) => (
    <table style={{tableLayout: 'fixed'}}>
        <thead>
            <tr>
                <th colSpan={2}>能力値</th>
                <th>成長</th>
                <th>合計</th>
                <th>ボーナス</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td rowSpan={2}>
                    <SheetField
                        fullWidth
                        label="技"
                        readOnly={readOnly}
                        type="number"
                        value={data.ability_skill}
                        onChange={changeHandler('ability_skill')}
                    />
                </td>
                <td>
                    <SheetField
                        fullWidth
                        label="A"
                        readOnly={readOnly}
                        type="number"
                        value={data.ability_a}
                        onChange={changeHandler('ability_a')}
                    />
                </td>
                <td>
                    <SheetField
                        fullWidth
                        readOnly={readOnly}
                        type="number"
                        value={data.growth_a}
                        onChange={changeHandler('growth_a')}
                    />
                </td>
                <td>
                    <SheetField
                        fullWidth
                        readOnly
                        label="器用度"
                        type="number"
                        value={data.dex}
                    />
                </td>
                <td>
                    <SheetField
                        fullWidth
                        readOnly
                        type="number"
                        value={data.dex_bonus}
                    />
                </td>
            </tr>
            <tr>
                <td>
                    <SheetField
                        fullWidth
                        label="B"
                        readOnly={readOnly}
                        type="number"
                        value={data.ability_b}
                        onChange={changeHandler('ability_b')}
                    />
                </td>
                <td>
                    <SheetField
                        fullWidth
                        readOnly={readOnly}
                        type="number"
                        value={data.growth_b}
                        onChange={changeHandler('growth_b')}
                    />
                </td>
                <td>
                    <SheetField
                        fullWidth
                        readOnly
                        label="敏捷度"
                        type="number"
                        value={data.agi}
                    />
                </td>
                <td>
                    <SheetField
                        fullWidth
                        readOnly
                        type="number"
                        value={data.agi_bonus}
                    />
                </td>
            </tr>
            <tr>
                <td rowSpan={2}>
                    <SheetField
                        fullWidth
                        label="体"
                        readOnly={readOnly}
                        type="number"
                        value={data.ability_body}
                        onChange={changeHandler('ability_body')}
                    />
                </td>
                <td>
                    <SheetField
                        fullWidth
                        label="C"
                        readOnly={readOnly}
                        type="number"
                        value={data.ability_c}
                        onChange={changeHandler('ability_c')}
                    />
                </td>
                <td>
                    <SheetField
                        fullWidth
                        label=" "
                        readOnly={readOnly}
                        type="number"
                        value={data.growth_c}
                        onChange={changeHandler('growth_c')}
                    />
                </td>
                <td>
                    <SheetField
                        fullWidth
                        readOnly
                        label="筋力"
                        type="number"
                        value={data.pow}
                    />
                </td>
                <td>
                    <SheetField
                        fullWidth
                        readOnly
                        type="number"
                        value={data.pow_bonus}
                    />
                </td>
            </tr>
            <tr>
                <td>
                    <SheetField
                        fullWidth
                        label="D"
                        readOnly={readOnly}
                        type="number"
                        value={data.ability_d}
                        onChange={changeHandler('ability_d')}
                    />
                </td>
                <td>
                    <SheetField
                        fullWidth
                        readOnly={readOnly}
                        type="number"
                        value={data.growth_d}
                        onChange={changeHandler('growth_d')}
                    />
                </td>
                <td>
                    <SheetField
                        fullWidth
                        readOnly
                        label="生命力"
                        type="number"
                        value={data.vit}
                    />
                </td>
                <td>
                    <SheetField
                        fullWidth
                        readOnly
                        type="number"
                        value={data.vit_bonus}
                    />
                </td>
            </tr>
            <tr>
                <td rowSpan={2}>
                    <SheetField
                        fullWidth
                        label="心"
                        readOnly={readOnly}
                        type="number"
                        value={data.ability_mind}
                        onChange={changeHandler('ability_mind')}
                    />
                </td>
                <td>
                    <SheetField
                        fullWidth
                        label="E"
                        readOnly={readOnly}
                        type="number"
                        value={data.ability_e}
                        onChange={changeHandler('ability_e')}
                    />
                </td>
                <td>
                    <SheetField
                        fullWidth
                        label=" "
                        readOnly={readOnly}
                        type="number"
                        value={data.growth_e}
                        onChange={changeHandler('growth_e')}
                    />
                </td>
                <td>
                    <SheetField
                        fullWidth
                        readOnly
                        label="知力"
                        type="number"
                        value={data.int}
                    />
                </td>
                <td>
                    <SheetField
                        fullWidth
                        readOnly
                        type="number"
                        value={data.int_bonus}
                    />
                </td>
            </tr>
            <tr>
                <td>
                    <SheetField
                        fullWidth
                        label="F"
                        readOnly={readOnly}
                        type="number"
                        value={data.ability_f}
                        onChange={changeHandler('ability_f')}
                    />
                </td>
                <td>
                    <SheetField
                        fullWidth
                        readOnly={readOnly}
                        type="number"
                        value={data.growth_f}
                        onChange={changeHandler('growth_f')}
                    />
                </td>
                <td>
                    <SheetField
                        fullWidth
                        readOnly
                        label="精神力"
                        type="number"
                        value={data.spr}
                    />
                </td>
                <td>
                    <SheetField
                        fullWidth
                        readOnly
                        type="number"
                        value={data.spr_bonus}
                    />
                </td>
            </tr>
        </tbody>
    </table>
);
AbilityTable.propTypes = {
    changeHandler: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    readOnly: PropTypes.bool,
};

export const SkillTable = (props) => {
    const {
        cchangeHandler,
        data,
        pushHandler,
        readOnly,
        removeHandler,
    } = props;

    const itemElements = data.skills && data.skills.map((item, i) => (
        <tr key={i}>
            <td>
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
                    onChange={cchangeHandler('skills', i, 'skill')}
                />
            </td>
            <td>
                <SheetField
                    fullWidth
                    readOnly={readOnly}
                    type="number"
                    value={item.level}
                    onChange={cchangeHandler('skills', i, 'level')}
                />
            </td>
            <td>
                <SheetField
                    fullWidth
                    readOnly
                    type="number"
                    value={item.magic_power}
                />
            </td>
            <td>
                <SheetField
                    fullWidth
                    readOnly
                    type="number"
                    value={item.next_exp}
                />
            </td>
            <td>
                <SheetField
                    fullWidth
                    readOnly
                    type="number"
                    value={item.total_exp}
                />
            </td>
            <td style={{diaplay: readOnly ? 'none' : null}}>
                <IconButton onTouchTap={removeHandler('skills', i)}>
                    <Delete />
                </IconButton>
            </td>
        </tr>
    ));

    return (
        <table style={{width: '100%'}}>
            <thead>
                <tr>
                    <th>スキル</th>
                    <th>レベル</th>
                    <th>魔力</th>
                    <th>次経験点</th>
                    <th>累計経験点</th>
                </tr>
            </thead>
            <tbody>{itemElements}</tbody>
            <tfoot>
                <tr style={{display: readOnly ? 'none' : null}}>
                    <td colSpan={5}>
                        <FlatButton
                            label={<Add />}
                            style={{width: '100%'}}
                            onTouchTap={pushHandler('skills', {level: 1})}
                        />
                    </td>
                </tr>
            </tfoot>
        </table>
    );
};
SkillTable.propTypes = {
    cchangeHandler: PropTypes.func.isRequired,
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

    const changeHandler = (key) => (e, value) => onChange(id, key, value);
    const cchangeHandler =
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

    return (
        <div>
            <Paper style={{margin: 16, padding: 16}}>
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
            </Paper>
            <Paper style={{margin: 16}}>
                <AbilityTable
                    changeHandler={changeHandler}
                    data={data}
                    readOnly={readOnly}
                />
            </Paper>
            <Paper style={{margin: 16, padding: 16}}>
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
            </Paper>
            <Paper style={{margin: 16}}>
                <SkillTable
                    cchangeHandler={cchangeHandler}
                    data={data}
                    pushHandler={pushHandler}
                    readOnly={readOnly}
                    removeHandler={removeHandler}
                />
            </Paper>
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
