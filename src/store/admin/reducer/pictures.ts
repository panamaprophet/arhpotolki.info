import { Picture } from '../../../types';
import { ACTION, ACTION_PICTURES_ADD, ACTION_PICTURES_CHANGE, ACTION_PICTURES_REMOVE } from './action-types';


export const reducer = (state: Picture[], { type, payload }: ACTION) => {
    switch (type) {
        case ACTION_PICTURES_REMOVE:
            return state.filter(item => item.id !== payload.id);
        case ACTION_PICTURES_CHANGE:
            return state.map(item => item.id === payload.id ? { ...item, ...payload } : item);
        case ACTION_PICTURES_ADD:
            return [...state, payload];
        default:
            return state;
    };
};
