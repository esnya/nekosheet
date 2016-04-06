import _ from 'lodash';

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

export const compute = (data) => {
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

    return data;
};
