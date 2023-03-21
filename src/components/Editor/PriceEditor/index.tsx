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
    reducer,
} from './store';
import styles from './index.module.css';


export const PriceEditor = ({ prices: initialValue = { '': { 0: 0 } }, onChange }) => {
    const [prices, dispatch] = useReducer(reducer, initialValue);
    const [tempGroupName, setTempGroupName] = useState('');

    const groups = Object.keys(prices);
    const indexes = Object.keys(prices[groups[0]]).map(Number);

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

    const Groups = groups.map((group) => (
        <th key={group}>
            <InputTextLazy value={group} onChange={value => renameGroup(group, value)} />
            <Button size="small" onClick={() => removeGroup(group)} theme="orange" className={styles.inputButton}>
                ⤫
            </Button>
        </th>
    ));

    const Rows = indexes.map((key, rowIndex) => (
        <tr key={key}>
            <td>
                <InputTextLazy value={String(key)} onChange={value => renameRow(key, Number(value))} />
            </td>

            {groups.map((group, columnIndex) => {
                const numberKey = Number(key);
                const hasButtons = !groups[columnIndex + 1];
                const hasAddButton = hasButtons && (!indexes[rowIndex + 1] || Number(indexes[rowIndex + 1]) - numberKey > 1);

                return (
                    <td key={`${group}_${key}`} title={`${group}_${key}`}>
                        <InputTextLazy
                            value={String(prices[group][key])}
                            onChange={value => setPrice(group, key, Number(value))}
                        />
                        {hasButtons && <Button
                            theme="orange"
                            size="small"
                            className={styles.inputButton}
                            onClick={() => removeRow(key)}
                        >
                            ⤫
                        </Button>}
                        {hasAddButton && (
                            <Button
                                theme="green"
                                size="small"
                                className={styles.addButton}
                                onClick={() => addRow(Number(key) + 1)}>
                                +
                            </Button>
                        )}
                    </td>
                );
            })}
        </tr>
    ));

    return (
        <table className={styles.root}>
            <thead>
                <tr>
                    <th>
                        <InputTextLazy placeholder="Новая группа" key={tempGroupName} value={tempGroupName} onChange={setTempGroupName} />
                        <Button size="small" onClick={() => onGroupAdd(tempGroupName)} theme="green" className={styles.inputButton}>+</Button>
                    </th>
                    {Groups}
                    <th></th>
                </tr>
            </thead>

            <tbody>
                {Rows}
                <tr>
                    <td colSpan={4}>
                        <Button theme="green" className={styles.submitButton} onClick={() => onChange(prices)}>Сохранить</Button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};
