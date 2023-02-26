/* eslint-disable react-hooks/exhaustive-deps */

import { useReducer } from 'react';
import { InputTextLazy } from '../../Input';
import { Column, Row } from '../../Layout';
import {
    ACTION_INSERT_ROW,
    ACTION_REMOVE_ROW,
    ACTION_RENAME_GROUP,
    ACTION_SET_INDEX,
    ACTION_SET_PRICE,
    reducer,
} from './store';


export const PriceEditor = ({ prices: initialValue, onChange }) => {
    const [prices, dispatch] = useReducer(reducer, initialValue);

    const groups = Object.keys(prices);
    const indexes = Object.keys(prices[groups[0]]);

    const Groups = groups.map((group) => <InputTextLazy
        key={group}
        value={group}
        onChange={value => dispatch({ type: ACTION_RENAME_GROUP, payload: { from: group, to: value } })}
    />);

    const Rows = indexes.map((key, index) => (
        <Row key={key}>
            <InputTextLazy
                value={key}
                onChange={value => dispatch({ type: ACTION_SET_INDEX, payload: { from: key, to: value } })}
            />

            {groups.map((group) => (
                <InputTextLazy
                    key={`${group}_${key}`}
                    value={prices[group][key]}
                    onChange={value => dispatch({ type: ACTION_SET_PRICE, payload: { group, key, value } })}
                />
            ))}

            {(!indexes[index + 1] || (Number(indexes[index + 1]) - Number(key)) > 1) && (
                <button type="button" onClick={() => dispatch({ type: ACTION_INSERT_ROW, payload: { key: Number(key) + 1 } })}>+</button>
            )}

            <button type="button" onClick={() => dispatch({ type: ACTION_REMOVE_ROW, payload: { key } })}>X</button>
        </Row>
    ));

    return (
        <Column>
            <Row>
                {Groups}
            </Row>
            <Column>
                {Rows}
            </Column>
            <Column>
                <button type="button" onClick={() => onChange(prices)}>Сохранить</button>
            </Column>
        </Column>
    );
};
