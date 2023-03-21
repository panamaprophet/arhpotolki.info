import { Dispatch } from 'react';
import {
    ACTION_ADD_GROUP,
    ACTION_ADD_ROW,
    ACTION_REMOVE_GROUP,
    ACTION_REMOVE_ROW,
    ACTION_RENAME_GROUP,
    ACTION_RENAME_ROW,
    ACTION_SET_PRICE,
    ACTION,
} from './action-types';


export const createAddGroupAction =
    (dispatch: Dispatch<ACTION>) =>
        (group: string) =>
            dispatch({ type: ACTION_ADD_GROUP, payload: { key: group } });

export const createRenameGroupAction =
    (dispatch: Dispatch<ACTION>) =>
        (from: string, to: string) =>
            dispatch({ type: ACTION_RENAME_GROUP, payload: { from, to } });

export const createRemoveGroupAction =
    (dispatch: Dispatch<ACTION>) =>
        (group: string) =>
            dispatch({ type: ACTION_REMOVE_GROUP, payload: { key: group } });

export const createSetPriceAction =
    (dispatch: Dispatch<ACTION>) =>
        (group: string, key: number, value: number) =>
            dispatch({ type: ACTION_SET_PRICE, payload: { group, key, value } });

export const createAddRowAction =
    (dispatch: Dispatch<ACTION>) =>
        (row: number) =>
            dispatch({ type: ACTION_ADD_ROW, payload: { key: row } });

export const createRemoveRowAction =
    (dispatch: Dispatch<ACTION>) =>
        (row: number) =>
            dispatch({ type: ACTION_REMOVE_ROW, payload: { key: row } });

export const createRenameRowAction =
    (dispatch: Dispatch<ACTION>) =>
        (from: number, to: number) =>
            dispatch({ type: ACTION_RENAME_ROW, payload: { from, to } });
