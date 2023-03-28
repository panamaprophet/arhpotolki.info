import { Feedback } from '../../../types';
import { ACTION, ACTION_FEEDBACK_REMOVE, ACTION_FEEDBACK_CHANGE } from './action-types';


export const reducer = (state: Feedback[], { type, payload }: ACTION) => {
    switch (type) {
        case ACTION_FEEDBACK_REMOVE:
            return state.filter(item => item.id !== payload.id);
        case ACTION_FEEDBACK_CHANGE:
            return state.map(item => item.id === payload.id ? { ...item, ...payload } : item);
        default:
            return state;
    };
};
