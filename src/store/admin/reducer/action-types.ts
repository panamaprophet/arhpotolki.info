import { Settings, Feedback, Picture } from '../../../types';


export const ACTION_FEEDBACK_REMOVE = 'actions/feedback/remove';

export const ACTION_FEEDBACK_CHANGE = 'actions/feedback/change';

export const ACTION_PICTURES_REMOVE = 'actions/pictures/remove';

export const ACTION_PICTURES_CHANGE = 'actions/pictures/change';

export const ACTION_PICTURES_ADD = 'actions/pictures/add';

export const ACTION_SETTINGS_CHANGE = 'actions/settings/change';

export const ACTION_SETTINGS_REMOVE = 'actions/settings/remove';


export type TYPE_ACTION_SETTINGS_CHANGE = { type: typeof ACTION_SETTINGS_CHANGE, payload: { key: keyof Settings, value: unknown } };

export type TYPE_ACTION_SETTINGS_REMOVE = { type: typeof ACTION_SETTINGS_REMOVE, payload: { key: keyof Settings } };

export type TYPE_ACTION_FEEDBACK_REMOVE = { type: typeof ACTION_FEEDBACK_REMOVE, payload: { id: string } };

export type TYPE_ACTION_FEEDBACK_CHANGE = { type: typeof ACTION_FEEDBACK_CHANGE, payload: Feedback };

export type TYPE_ACTION_PICTURES_REMOVE = { type: typeof ACTION_PICTURES_REMOVE, payload: Picture };

export type TYPE_ACTION_PICTURES_ADD = { type: typeof ACTION_PICTURES_ADD, payload: Picture };

export type TYPE_ACTION_PICTURES_CHANGE = { type: typeof ACTION_PICTURES_CHANGE, payload: Picture };


export type ACTION =
    | TYPE_ACTION_FEEDBACK_CHANGE
    | TYPE_ACTION_FEEDBACK_REMOVE
    | TYPE_ACTION_SETTINGS_CHANGE
    | TYPE_ACTION_SETTINGS_REMOVE
    | TYPE_ACTION_PICTURES_ADD
    | TYPE_ACTION_PICTURES_CHANGE
    | TYPE_ACTION_PICTURES_REMOVE
    ;
