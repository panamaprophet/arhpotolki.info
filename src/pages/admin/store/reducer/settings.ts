export const ACTION_SETTINGS_CHANGE = 'actions/settings/change';

export const ACTION_SETTINGS_REMOVE = 'actions/settings/remove';


export const reducer = (state, { type, payload: { key, value } }) => {
    switch (type) {
        case ACTION_SETTINGS_REMOVE:
            return state.filter(item => item.key !== key);
        case ACTION_SETTINGS_CHANGE:
            return state.map(item => item.key === key ? { key, value } : item);
        default:
            return state;
    };
};
