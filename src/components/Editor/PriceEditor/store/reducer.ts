import { setGroupName, setPrice, renameRow, removeRow, addRow, addGroup, removeGroup, } from './actions';
import {
    ACTION_ADD_GROUP, ACTION_RENAME_GROUP, ACTION_REMOVE_GROUP,
    ACTION_ADD_ROW, ACTION_REMOVE_ROW, ACTION_RENAME_ROW, 
    ACTION_SET_PRICE,
    ACTION,
} from './action-types';
import { PriceGroups } from './types.d';


export const reducer = (state: PriceGroups, { type, payload }: ACTION): PriceGroups => {
    switch (type) {
        case ACTION_RENAME_GROUP:
            return setGroupName(state, payload.from, payload.to);
        case ACTION_SET_PRICE:
            return setPrice(state, payload.group, payload.key, payload.value);
        case ACTION_RENAME_ROW:
            return renameRow(state, payload.from, payload.to);
        case ACTION_REMOVE_ROW:
            return removeRow(state, payload.key);
        case ACTION_ADD_ROW:
            return addRow(state, payload.key);
        case ACTION_ADD_GROUP:
            return addGroup(state, payload.key);
        case ACTION_REMOVE_GROUP:
            return removeGroup(state, payload.key);
        default:
            return state;
    }
};
