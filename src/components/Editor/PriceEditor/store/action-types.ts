export const ACTION_ADD_GROUP = 'actions/pricesEditor/addGroup';

export const ACTION_REMOVE_GROUP = 'actions/priceEditor/removeGroup';

export const ACTION_RENAME_GROUP = 'actions/priceEditor/renameGroup';

export const ACTION_SET_PRICE = 'actions/priceEditor/setPrice';

export const ACTION_RENAME_ROW = 'actions/priceEditor/renameRow';

export const ACTION_ADD_ROW = 'actions/priceEditor/inserRow';

export const ACTION_REMOVE_ROW = 'actions/priceEditor/removeRow';


export type TYPE_ACTION_RENAME_GROUP = { type: typeof ACTION_RENAME_GROUP, payload: { from: string, to: string } };

export type TYPE_ACTION_ADD_GROUP = { type: typeof ACTION_ADD_GROUP, payload: { key: string } };

export type TYPE_ACTION_REMOVE_GROUP = { type: typeof ACTION_REMOVE_GROUP, payload: { key: string } };

export type TYPE_ACTION_SET_PRICE = { type: typeof ACTION_SET_PRICE, payload: { group: string, key: number, value: number } };

export type TYPE_ACTION_RENAME_ROW = { type: typeof ACTION_RENAME_ROW, payload: { from: number, to: number } };

export type TYPE_ACTION_ADD_ROW = { type: typeof ACTION_ADD_ROW, payload: { key: number } };

export type TYPE_ACTION_REMOVE_ROW = { type: typeof ACTION_REMOVE_ROW, payload: { key: number } };


export type ACTION =
    | TYPE_ACTION_ADD_GROUP
    | TYPE_ACTION_REMOVE_GROUP
    | TYPE_ACTION_RENAME_GROUP
    | TYPE_ACTION_SET_PRICE
    | TYPE_ACTION_RENAME_ROW
    | TYPE_ACTION_ADD_ROW
    | TYPE_ACTION_REMOVE_ROW
    ;
