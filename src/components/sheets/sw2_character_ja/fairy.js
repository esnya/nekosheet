import React, {PropTypes} from 'react';
import {Col} from '../../col';
import {Row} from '../../row';
import {SheetField} from '../../sheet-field';
import {Table, Thead, Tbody, Tr, Th, Td} from '../../sheet-table';

export const Fairy = ({changeHandler, data, readOnly}) => (
    <Table>
        <Thead>
            <Tr>
                <Th style={{verticalAlign: 'middle'}}>属性</Th>
                <Th style={{verticalAlign: 'middle'}}>契約クラス</Th>
                <Th style={{verticalAlign: 'middle'}}>他属性妖精数</Th>
                <Th style={{verticalAlign: 'middle'}}>使用可能ランク</Th>
                <Th style={{verticalAlign: 'middle'}}>召喚可能レベル</Th>
            </Tr>
        </Thead>
        <Tbody>
            <Tr>
                <Th style={{verticalAlign: 'middle'}}>土</Th>
                <Td>
                    <SheetField
                        fullWidth
                        readOnly={readOnly}
                        type="number"
                        value={data.fairy_earth}
                        onChange={changeHandler('fairy_earth')}
                    />
                </Td>
                <Td>
                    <SheetField
                        fullWidth
                        readOnly
                        type="number"
                        value={data.fairy_earth_others}
                    />
                </Td>
                <Td>
                    <SheetField
                        fullWidth
                        readOnly
                        type="number"
                        value={data.fairy_earth_rank}
                    />
                </Td>
                <Td>
                    <SheetField
                        fullWidth
                        readOnly
                        type="number"
                        value={data.fairy_earth_summon}
                    />
                </Td>
            </Tr>
            <Tr>
                <Th style={{verticalAlign: 'middle'}}>水・氷</Th>
                <Td>
                    <SheetField
                        fullWidth
                        readOnly={readOnly}
                        type="number"
                        value={data.fairy_water_ice}
                        onChange={changeHandler('fairy_water_ice')}
                    />
                </Td>
                <Td>
                    <SheetField
                        fullWidth
                        readOnly
                        type="number"
                        value={data.fairy_water_ice_others}
                    />
                </Td>
                <Td>
                    <SheetField
                        fullWidth
                        readOnly
                        type="number"
                        value={data.fairy_water_ice_rank}
                    />
                </Td>
                <Td>
                    <SheetField
                        fullWidth
                        readOnly
                        type="number"
                        value={data.fairy_water_ice_summon}
                    />
                </Td>
            </Tr>
            <Tr>
                <Th style={{verticalAlign: 'middle'}}>炎</Th>
                <Td>
                    <SheetField
                        fullWidth
                        readOnly={readOnly}
                        type="number"
                        value={data.fairy_fire}
                        onChange={changeHandler('fairy_fire')}
                    />
                </Td>
                <Td>
                    <SheetField
                        fullWidth
                        readOnly
                        type="number"
                        value={data.fairy_fire_others}
                    />
                </Td>
                <Td>
                    <SheetField
                        fullWidth
                        readOnly
                        type="number"
                        value={data.fairy_fire_rank}
                    />
                </Td>
                <Td>
                    <SheetField
                        fullWidth
                        readOnly
                        type="number"
                        value={data.fairy_fire_summon}
                    />
                </Td>
            </Tr>
            <Tr>
                <Th style={{verticalAlign: 'middle'}}>風</Th>
                <Td>
                    <SheetField
                        fullWidth
                        readOnly={readOnly}
                        type="number"
                        value={data.fairy_wind}
                        onChange={changeHandler('fairy_wind')}
                    />
                </Td>
                <Td>
                    <SheetField
                        fullWidth
                        readOnly
                        type="number"
                        value={data.fairy_wind_others}
                    />
                </Td>
                <Td>
                    <SheetField
                        fullWidth
                        readOnly
                        type="number"
                        value={data.fairy_wind_rank}
                    />
                </Td>
                <Td>
                    <SheetField
                        fullWidth
                        readOnly
                        type="number"
                        value={data.fairy_wind_summon}
                    />
                </Td>
            </Tr>
            <Tr>
                <Th style={{verticalAlign: 'middle'}}>光</Th>
                <Td>
                    <SheetField
                        fullWidth
                        readOnly={readOnly}
                        type="number"
                        value={data.fairy_light}
                        onChange={changeHandler('fairy_light')}
                    />
                </Td>
                <Td>
                    <SheetField
                        fullWidth
                        readOnly
                        type="number"
                        value={data.fairy_light_others}
                    />
                </Td>
                <Td>
                    <SheetField
                        fullWidth
                        readOnly
                        type="number"
                        value={data.fairy_light_rank}
                    />
                </Td>
                <Td>
                    <SheetField
                        fullWidth
                        readOnly
                        type="number"
                        value={data.fairy_light_summon}
                    />
                </Td>
            </Tr>
            <Tr>
                <Th style={{verticalAlign: 'middle'}}>闇</Th>
                <Td>
                    <SheetField
                        fullWidth
                        readOnly={readOnly}
                        type="number"
                        value={data.fairy_gloom}
                        onChange={changeHandler('fairy_gloom')}
                    />
                </Td>
                <Td>
                    <SheetField
                        fullWidth
                        readOnly
                        type="number"
                        value={data.fairy_gloom_others}
                    />
                </Td>
                <Td>
                    <SheetField
                        fullWidth
                        readOnly
                        type="number"
                        value={data.fairy_gloom_rank}
                    />
                </Td>
                <Td>
                    <SheetField
                        fullWidth
                        readOnly
                        type="number"
                        value={data.fairy_gloom_summon}
                    />
                </Td>
            </Tr>
            <Tr>
                <Th style={{verticalAlign: 'middle'}}>特殊</Th>
                <Td>
                    <SheetField
                        fullWidth
                        readOnly
                        type="number"
                        value={data.fairy_special}
                    />
                </Td>
            </Tr>
            <Tr>
                <Td />
                <Td>
                    <SheetField
                        fullWidth
                        readOnly
                        inputStyle={{textAlign: 'center'}}
                        value={
                            data.fairy_class_sum + '/' + data.fairy_level * 2
                        }
                    />
                </Td>
            </Tr>
        </Tbody>
    </Table>
);
Fairy.propTypes = {
    changeHandler: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    readOnly: PropTypes.bool.isRequired,
};
