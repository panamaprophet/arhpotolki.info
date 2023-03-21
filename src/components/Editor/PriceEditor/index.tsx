import { useReducer, useState } from 'react';
import { Button } from '../../Button';
import { InputTextLazy } from '../../Input';

import {
    createAddGroupAction,
    createAddRowAction,
    createRemoveGroupAction,
    createRemoveRowAction,
    createRenameGroupAction,
    createRenameRowAction,
    createSetPriceAction,
    PriceGroups,
    reducer,
} from './store';

import { GroupRow } from './elements/GroupRow';
import { GroupName } from './elements/GroupName';

import styles from './index.module.css';


interface Props {
    prices: PriceGroups;
    onChange: (prices: PriceGroups) => void;
}


export const PriceEditor = ({ prices: initialValue = { '': { 0: 0 } }, onChange }: Props) => {
    const [prices, dispatch] = useReducer(reducer, initialValue);
    const [tempGroupName, setTempGroupName] = useState('');

    const groups = Object.keys(prices);
    const keys = Object.keys(prices[groups[0]]).map(Number);

    const renameRow = createRenameRowAction(dispatch);
    const setPrice = createSetPriceAction(dispatch);
    const removeRow = createRemoveRowAction(dispatch);
    const addRow = createAddRowAction(dispatch);
    const addGroup = createAddGroupAction(dispatch);
    const renameGroup = createRenameGroupAction(dispatch);
    const removeGroup = createRemoveGroupAction(dispatch);

    const onGroupAdd = (group: string) => {
        addGroup(group);
        setTempGroupName('');
    };

    const rows = keys.map((key) => [key, ...groups.map(group => prices[group][key])]);

    return (
        <table className={styles.root}>
            <thead>
                <tr>
                    <th>
                        <InputTextLazy placeholder="Новая группа" key={tempGroupName} value={tempGroupName} onChange={setTempGroupName} />
                        <Button size="small" onClick={() => onGroupAdd(tempGroupName)} theme="green" className={styles.inputButton}>
                            +
                        </Button>
                    </th>
                    {groups.map((group) => (<GroupName
                        key={group}
                        name={group}
                        onChange={value => renameGroup(group, value)}
                        onRemove={() => removeGroup(group)}
                    />))}
                    <th></th>
                </tr>
            </thead>

            <tbody>
                {rows.map(([key, ...values], index) => (
                    <GroupRow
                        key={key}
                        groupKey={key}
                        values={values}
                        onKeyRename={value => renameRow(key, value)}
                        onPriceChange={(groupIndex, value) => setPrice(groups[groupIndex], key, value)}
                        onAddRow={() => addRow(key + 1)}
                        onRowRemove={() => removeRow(key)}
                        isLastRow={!rows[index + 1] || rows[index + 1][0] - key > 1}
                    />
                ))}

                <tr>
                    <td colSpan={4}>
                        <Button theme="green" className={styles.submitButton} onClick={() => onChange(prices)}>
                            Сохранить
                        </Button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};
