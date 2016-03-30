import React, {PropTypes} from 'react';
import {SheetField} from '../../sheet-field';
import {Table, Thead, Tbody, Tr, Td, Th} from '../../sheet-table';

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
