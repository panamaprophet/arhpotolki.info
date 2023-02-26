const omit = <T extends { [k: string]: any }>(keys: string[], obj: T) => Object.fromEntries(Object.entries(obj).filter(([key]) => !keys.includes(key)));


const setGroupName = (prices, from, to) => ({
    ...omit([from], prices),
    [to]: { ...prices[from] },
});

const setPrice = (prices, group, index, value) => {
    const values = {
        ...prices[group],
        [index]: Number(value),
    };

    return {
        ...prices,
        [group]: values,
    };
};

const setIndex = (prices, from, to) => ({
    ...Object.keys(prices).reduce((acc, group) => {
        const values = { ...prices[group] };
        const price = values[from];

        delete values[from];

        values[to] = price;

        return { ...acc, [group]: values };
    }, {})
});

const removeRow = (prices, index) => ({
    ...Object.keys(prices).reduce((acc, group) => {
        const values = omit([index], prices[group]);

        return { ...acc, [group]: values };
    }, {})
});

const insertRow = (prices, key) => ({
    ...Object.keys(prices).reduce((acc, group) => {
        const values = { ...prices[group], [key]: 0 };

        return { ...acc, [group]: values };
    }, {})
});


export const ACTION_RENAME_GROUP = 'actions/priceEditor/rename_group';

export const ACTION_SET_PRICE = 'actions/priceEditor/set_price';

export const ACTION_SET_INDEX = 'actions/priceEditor/set_index';

export const ACTION_REMOVE_ROW = 'actions/priceEditor/remove_row';

export const ACTION_INSERT_ROW = 'actions/priceEditor/insert_row';


export const reducer = (state, { type, payload }) => {
    switch (type) {
        case ACTION_RENAME_GROUP:
            return setGroupName(state, payload.from, payload.to);
        case ACTION_SET_PRICE:
            return setPrice(state, payload.group, payload.key, payload.value);
        case ACTION_SET_INDEX:
            return setIndex(state, payload.from, payload.to);
        case ACTION_REMOVE_ROW:
            return removeRow(state, payload.key);
        case ACTION_INSERT_ROW:
            return insertRow(state, payload.key);
        default:
            return state;
    }
};
