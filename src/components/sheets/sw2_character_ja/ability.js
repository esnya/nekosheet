import React, {PropTypes} from 'react';
import {SheetField} from '../../sheet-field';
import {Table, Thead, Tbody, Tfoot, Tr, Td, Th} from '../../sheet-table';

export const AbilityTable = ({data, readOnly, changeHandler}) => {
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
