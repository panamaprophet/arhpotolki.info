/* eslint-disable react-hooks/exhaustive-deps */

import { useReducer, useState } from 'react';
import { InputText } from '../../Input';
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
    const indexes = prices[groups[0]].map((_, index) => index);

    const Groups = groups.map((group) => <InputText
        key={group}
        value={group}
        onChange={value => dispatch({ type: ACTION_RENAME_GROUP, payload: { from: group, to: value } })}
    />);

    const Rows = indexes.map((key, index) => (
        <div className="row" key={key}>
            <InputText
                value={key}
                onChange={value => dispatch({ type: ACTION_SET_INDEX, payload: { from: key, to: value } })}
            />

            {groups.map((group) => (
                <InputText
                    key={`${group}_${key}`}
                    value={prices[group][key]}
                    onChange={value => dispatch({ type: ACTION_SET_PRICE, payload: { group, key, value } })}
                />
            ))}

            <button type="button" onClick={() => dispatch({ type: ACTION_REMOVE_ROW, payload: { key } })}>X</button>
        </div>
    ));

    return (
        <div className="priceEditor">
            <div>{Groups}</div>
            <div>{Rows}</div>
            <button type="button" onClick={() => dispatch({ type: ACTION_INSERT_ROW, payload: {} })}>+</button>
            <button type="button" onClick={() => onChange(prices)}>Сохранить</button>
        </div>
    );
};
