import _ from 'lodash';
import FlatButton from 'material-ui/lib/flat-button';
import IconButton from 'material-ui/lib/icon-button';
import Delete from 'material-ui/lib/svg-icons/action/delete';
import Add from 'material-ui/lib/svg-icons/content/add';
import React, {PropTypes} from 'react';
import {SheetField} from '../../sheet-field';
import {SheetPaper} from '../../sheet-paper';
import {Table, Thead, Tbody, Tfoot, Tr, Td, Th} from '../../sheet-table';
import {ItemList} from '../../item-list';

const AbilityTable = ({data, readOnly, changeHandler}) => {
    const lineElements = [
        {
            key: 'a',
            base: {key: 'skill', label: '技'},
            ability: {key: 'dex', label: '器用度'},
        },
        {
            key: 'b',
            ability: {key: 'agi', label: '敏捷度'},
        },
        {
            key: 'c',
            base: {key: 'body', label: '体'},
            ability: {key: 'str', label: '筋力'},
        },
        {
            key: 'd',
            ability: {key: 'vit', label: '生命力'},
        },
        {
            key: 'e',
            base: {key: 'mind', label: '心'},
            ability: {key: 'int', label: '知力'},
        },
        {
            key: 'f',
            ability: {key: 'spr', label: '精神力'},
        },
    ].map(({key, base, ability}) => {
        const baseElement = base && (
            <Td rowSpan={2}>
                <SheetField
                    fullWidth
                    label={base.label}
                    readOnly={readOnly}
                    type="number"
                    value={data[`ability_${base.key}`]}
                    onChange={changeHandler(`ability_${base.key}`)}
                />
            </Td>
        );

        return (
            <Tr key={key}>
                {baseElement}
                <Td>
                    <SheetField
                        fullWidth
                        label={key.toUpperCase()}
                        readOnly={readOnly}
                        type="number"
                        value={data[`ability_${key}`]}
                        onChange={changeHandler(`ability_${key}`)}
                    />
                </Td>
                <Td>
                    <SheetField
                        fullWidth
                        readOnly={readOnly}
                        type="number"
                        value={data[`growth_${key}`]}
                        onChange={changeHandler(`growth_${key}`)}
                    />
                </Td>
                <Td>
                    <SheetField
                        fullWidth
                        readOnly
                        label={ability.label}
                        type="number"
                        value={data[ability.key]}
                    />
                </Td>
                <Td>
                    <SheetField
                        fullWidth
                        readOnly
                        type="number"
                        value={data[`${ability.key}_bonus`]}
                    />
                </Td>
            </Tr>
        );
    });

    return (
        <Table>
            <Thead>
                <Tr>
                    <Th colSpan={2}>能力値</Th>
                    <Th>成長</Th>
                    <Th>合計</Th>
                    <Th>ボーナス</Th>
                </Tr>
            </Thead>
            <Tbody>
                {lineElements}
            </Tbody>
        </Table>
    );
};
AbilityTable.propTypes = {
    changeHandler: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
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

    const itemElements = data.weapons && data.weapons.map((item, i) => {
        const impactElements = [3,4,5,6,7,8,9,10,11,12].map((n) => {
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

        return (
            <Tr key={i}>
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
                {impactElements}
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
            </Tr>
        );
    });

    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>武器</Th>
                    <Th>用法</Th>
                    <Th>必筋</Th>
                    <Th>命中修正</Th>
                    <Th>命中力</Th>
                    <Th>威力</Th>
                    <Th>3</Th>
                    <Th>4</Th>
                    <Th>5</Th>
                    <Th>6</Th>
                    <Th>7</Th>
                    <Th>8</Th>
                    <Th>9</Th>
                    <Th>10</Th>
                    <Th>11</Th>
                    <Th>12</Th>
                    <Th>C値</Th>
                    <Th>ダメージ修正</Th>
                    <Th>追加ダメージ</Th>
                    <Th>備考</Th>
                </Tr>
            </Thead>
            <Tbody>{itemElements}</Tbody>
            <Tfoot>
                <Tr style={{display: readOnly ? 'none' : null}}>
                    <Td colSpan={21}>
                        <FlatButton
                            label={<Add />}
                            style={{width: '100%'}}
                            onTouchTap={pushHandler('weapons', {auto: false})}
                        />
                    </Td>
                </Tr>
            </Tfoot>
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
        <Tr key={key}>
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
        </Tr>
    ));

    return (
        <Table>
            <Thead>
                <Tr>
                    <Th />
                    <Th>装飾品</Th>
                    <Th>効果</Th>
                </Tr>
            </Thead>
            <Tbody>{tableLines}</Tbody>
        </Table>
    );
};
OrnamentTable.propTypes = {
    changeHandler: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
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
    const appendHandler = (list, value = {}) => () => onPush(id, list, value);
    const listHandler =
        (list) => (e, key, value) => onChange(id, `${list}/${key}`, value);
    const pushHandler = (key, value = {}) => () => onPush(id, key, value);
    const removeHandler = (key1, key2) => () => onDelete(id, key1, key2);
    const deleteHandler = (list) => (e, key) => onDelete(id, list, key);

    data.level = data.skills && _(data.skills)
        .map('level')
        .max();
    [
        ['skill', 'a', 'dex'],
        ['skill', 'b', 'agi'],
        ['body',  'c', 'str'],
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
            <SheetPaper>
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
            </SheetPaper>
            <SheetPaper>
                <AbilityTable
                    changeHandler={changeHandler}
                    data={data}
                    readOnly={readOnly}
                />
            </SheetPaper>
            <SheetPaper>
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
            </SheetPaper>
            <SheetPaper>
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
            <SheetPaper>
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
            </SheetPaper>
            <SheetPaper>
                <WeaponTable
                    changeHandler={changeHandler}
                    data={data}
                    pushHandler={pushHandler}
                    readOnly={readOnly}
                    removeHandler={removeHandler}
                />
            </SheetPaper>
            <SheetPaper>
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
            </SheetPaper>
            <SheetPaper>
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
            </SheetPaper>
            <SheetPaper>
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
            </SheetPaper>
            <SheetPaper>
                <OrnamentTable
                    changeHandler={changeHandler}
                    data={data}
                    readOnly={readOnly}
                />
            </SheetPaper>
            <SheetPaper>
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
            </SheetPaper>
            <SheetPaper style={{padding: '0 16px'}}>
                <SheetField
                    fullWidth
                    multiLine
                    label="所持品"
                    readOnly={readOnly}
                    value={data.inventory}
                    onChange={changeHandler('inventory')}
                />
            </SheetPaper>
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
