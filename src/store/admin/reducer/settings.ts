import { omit } from '../../../helpers';
import { Settings } from '../../../types';
import { ACTION, ACTION_SETTINGS_CHANGE, ACTION_SETTINGS_REMOVE } from './action-types';


export const reducer = (state: Settings, { type, payload }: ACTION) => {
    switch (type) {
        case ACTION_SETTINGS_REMOVE:
            return omit([payload.key], state);
        case ACTION_SETTINGS_CHANGE:
            return { ...state, [payload.key]: payload.value };
        default:
            return state;
    };
};
