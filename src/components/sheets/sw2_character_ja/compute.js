import _ from 'lodash';

const EXP_B = [
    0,
    500,
    1000,
    1000,
    1500,
    1500,
    2000,
    2500,
    3000,
    4000,
    5000,
    6000,
    7500,
    9000,
    10500,
    12000,
    13500,
];
const EXP_A = [
    0,
    ...EXP_B.slice(2),
];

const computeAbility = (data) => {
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
                `correction_${keys[1]}`,
            ])
            .values()
            .filter()
            .map((a) => +a)
            .sum();

        data[keys[2]] = sum;
        data[`${keys[2]}_bonus`] = Math.floor(sum / 6);
    });
};

const CorrectionKeys = [
        'note',
    ].concat([
            'head',
            'face',
            'ear',
            'neck',
            'back',
            'rhand',
            'lhand',
            'waist',
            'leg',
            'other',
    ].map((key) => `ornament_${key}_effect`));
const CorrectionTable = {
    correction_a: ['dex', '器用度', '器用'],
    correction_b: ['agi', '敏捷度', '敏捷'],
    correction_c: ['str', '筋力'],
    correction_d: ['vit', '生命力', '生命'],
    correction_e: ['int', '知力'],
    correction_f: ['spr', '精神力', '精神'],
    speed: ['speed', 'spd', '移動力', '移動'],
    limited_speed: ['制限移動'],
    maximum_speed: ['全力移動'],
    correction_hp: ['HP'],
    correction_mp: ['MP'],
    vit_res_correction: ['生命抵抗力', '生命抵抗'],
    spr_res_correction: ['精神抵抗力', '精神抵抗'],
    magic_power_correction: ['魔力'],
    protection_correction: ['防護', '防護点'],
    evasion_correction: ['回避', '回避力'],
};
const CorrectionMap = {};
Object.keys(CorrectionTable)
    .forEach(
        (key) => CorrectionTable[key]
            .forEach((alias) => (CorrectionMap[alias] = key))
    );
const CorrectionPattern = new RegExp(
    `\\[(${Object.keys(CorrectionMap).join('|')})([+-=＋－＝])([0-9０-９]+)m?\\]`,
    'gi'
);
const computeAbilityCorrections = (data) => {
    Object.keys(CorrectionTable)
        .forEach((key) => (data[key] = 0));

    CorrectionKeys
        .map((key) => data[key])
        .concat((data.feats || []).map((item) => item.effect))
        .concat((data.weapons || []).map((item) => item.note))
        .filter((value) => value)
        .map((value) => value.replace(
            CorrectionPattern,
            // eslint-disable-next-line max-params
            (all, name, op, num) => {
                const key = CorrectionMap[name];
                if (!key) return;

                switch (op) {
                    case '+':
                    case '＋':
                        data[key] = (+data[key] || 0) + (+num);
                        break;
                    case '-':
                    case '－':
                        data[key] = (+data[key] || 0) - (+num);
                        break;
                    case '=':
                    case '＝':
                        data[key] = +num;
                        break;
                }
            }
        ));
};

const FairyProps = [
    'earth',
    'water_ice',
    'fire',
    'wind',
    'light',
    'gloom',
];
const computeFairyMagics = (data) => {
    data.fairy_skill = data.skills &&
        data.skills.find(({skill}) => skill && skill.match(/^フェアリーテイマー/));
    data.fairy_level = data.fairy_skill && +data.fairy_skill.level;

    if (data.fairy_level) {
        data.fairy_class_sum = _(FairyProps)
            .map((key) => +data[`fairy_${key}`] || 0)
            .sum();

        data.fairy_special = _(FairyProps)
            .map((key) => +data[`fairy_${key}`] || 0)
            .min();

        FairyProps.forEach((key) => {
            data[`fairy_${key}_others`] =
                Math.max(data.fairy_level * 2 - data[`fairy_${key}`], 0);
            data[`fairy_${key}_rank`] = Math.floor(Math.min(
                data[`fairy_${key}`] +  data[`fairy_${key}_others`] / 2,
                data[`fairy_${key}`] * 2
            ));
            data[`fairy_${key}_summon`] = data[`fairy_${key}`] > 0
                ? Math.min(
                    data[`fairy_${key}`] * 2 + 1,
                    data.fairy_level + 1
                )
                : 0;
        });
    }
};

export const compute = (data) => {
    computeAbilityCorrections(data);
    data.level = data.skills && _(data.skills)
        .map('level')
        .max();
    computeAbility(data);
    data.vit_res = data.level + data.vit_bonus + (data.vit_res_correction || 0);
    data.spr_res = data.level + data.spr_bonus + (data.spr_res_correction || 0);
    data.hp = (+data.correction_hp || 0) + data.level * 3 + data.vit;
    data.mp = (+data.correction_mp || 0) + (
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
                skill.magic_power = (+skill.level) +
                    (+data.int_bonus) +
                    (+data.magic_power_correction || 0);
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
    data.initiative = scout_wl_level > 0 ? scout_wl_level + data.agi_bonus : 0;
    data.limited_speed = data.limited_speed || 3;
    data.speed = (+data.speed || 0) + data.agi;
    data.maximum_speed = data.speed * 3;
    const evade_skill = data.skills &&
        data.skills.find(({skill}) => skill && skill === data.evade_skill);
    data.evasion =
        (
            evade_skill && evade_skill.level > 0
                ? +evade_skill.level + data.agi_bonus
                : 0
        ) + (+data.armor_evasion || 0) + (+data.shield_evasion || 0) +
        (+data.evasion_correction || 0);
    data.protection =
        (+data.armor_protection || 0) + (+data.shield_protection || 0) +
        (+data.protection_correction || 0);

    computeFairyMagics(data);

    return data;
};
