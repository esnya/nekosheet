import Add from 'material-ui/lib/svg-icons/content/add';
import Delete from 'material-ui/lib/svg-icons/action/delete';
import FlatButton from 'material-ui/lib/flat-button';
import IconButton from 'material-ui/lib/icon-button';
import React, {PropTypes} from 'react';
import {SheetField} from '../../sheet-field';
import {Table, Thead, Tbody, Tfoot, Tr, Td, Th} from '../../sheet-table';

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
