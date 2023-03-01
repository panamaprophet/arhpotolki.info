import { omit } from '../../../helpers';


export const ACTION_SETTINGS_CHANGE = 'actions/settings/change';

export const ACTION_SETTINGS_REMOVE = 'actions/settings/remove';


export const reducer = (state, { type, payload: { key, value } }) => {
    switch (type) {
        case ACTION_SETTINGS_REMOVE:
            return omit([key], state);
        case ACTION_SETTINGS_CHANGE:
            return { ...state, [key]: value };
        default:
            return state;
    };
};
