import { useReducer } from 'react';
import { reducer } from './reducer';

export { ACTION_SETTINGS_CHANGE, ACTION_SETTINGS_REMOVE } from './reducer/settings';
export { ACTION_FEEDBACK_CHANGE, ACTION_FEEDBACK_REMOVE } from './reducer/feedback';
export { ACTION_PICTURES_CHANGE, ACTION_PICTURES_REMOVE } from './reducer/pictures';

export const useAdminState = (initialState = {}) => useReducer(reducer, initialState);
