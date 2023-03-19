/* eslint-disable react-hooks/exhaustive-deps */

import { useReducer } from 'react';
import { Button } from '../../Button';
import { InputTextLazy } from '../../Input';
import {
    ACTION_INSERT_ROW,
    ACTION_REMOVE_ROW,
    ACTION_RENAME_GROUP,
    ACTION_SET_INDEX,
    ACTION_SET_PRICE,
    reducer,
} from './store';

import styles from './index.module.css';


const INITIAL_VALUE = {
    'default group': {
        0: 0,
    },
};


export const PriceEditor = ({ prices: initialValue = { ...INITIAL_VALUE }, onChange }) => {
    const [prices, dispatch] = useReducer(reducer, initialValue);

    const groups = Object.keys(prices);
    const indexes = Object.keys(prices[groups[0]]);

    const Groups = groups.map((group) => (
        <th key={group}>
            <InputTextLazy
                value={group}
                onChange={value => dispatch({ type: ACTION_RENAME_GROUP, payload: { from: group, to: value } })}
            />
        </th>
    ));

    const Rows = indexes.map((key, index) => (
        <tr key={key}>
            <td>
                <InputTextLazy
                    value={key}
                    onChange={value => dispatch({ type: ACTION_SET_INDEX, payload: { from: key, to: value } })}
                />
            </td>

            {groups.map((group) => (
                <td key={`${group}_${key}`}>
                    <InputTextLazy
                        value={prices[group][key]}
                        onChange={value => dispatch({ type: ACTION_SET_PRICE, payload: { group, key, value } })}
                    />
                </td>
            ))}

            <td className={styles.columnLast}>
                {(!indexes[index + 1] || (Number(indexes[index + 1]) - Number(key)) > 1) && (
                    <Button theme="green" onClick={() => dispatch({ type: ACTION_INSERT_ROW, payload: { key: Number(key) + 1 } })}>+</Button>
                )}

                <Button theme="orange" onClick={() => dispatch({ type: ACTION_REMOVE_ROW, payload: { key } })}>x</Button>
            </td>
        </tr>
    ));

    return (
        <table className={styles.root}>
            <thead>
                <tr>
                    <th></th>
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
