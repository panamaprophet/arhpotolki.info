export const ACTION_PICTURES_REMOVE = 'actions/pictures/remove';

export const ACTION_PICTURES_CHANGE = 'actions/pictures/change';


export const reducer = (state, { type, payload }) => {
    switch (type) {
        case ACTION_PICTURES_REMOVE:
            return state.filter(item => item.id !== payload.id);
        case ACTION_PICTURES_CHANGE:
            return state.map(item => item.id === payload.id ? { ...item, ...payload } : item);
        default:
            return state;
    };
};
