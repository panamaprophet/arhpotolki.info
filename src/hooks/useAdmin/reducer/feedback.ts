export const ACTION_FEEDBACK_REMOVE = 'actions/feedback/remove';

export const ACTION_FEEDBACK_CHANGE = 'actions/feedback/change';


export const reducer = (state, { type, payload }) => {
    switch (type) {
        case ACTION_FEEDBACK_REMOVE:
            return state.filter(item => item.id !== payload.id);
        case ACTION_FEEDBACK_CHANGE:
            return state.map(item => item.id === payload.id ? { ...item, ...payload } : item);
        default:
            return state;
    };
};
