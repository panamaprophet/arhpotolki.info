import { omit } from '../../../../helpers';
import { PriceGroups } from './types.d';


export const setGroupName = (prices: PriceGroups, from: string, to: string) => ({
    ...omit([from], prices),
    [to]: { ...prices[from] },
});

export const setPrice = (prices: PriceGroups, group: string, index: number, value: number) => {
    const values = {
        ...prices[group],
        [index]: Number(value),
    };

    return {
        ...prices,
        [group]: values,
    };
};

export const renameRow = (prices: PriceGroups, from: number, to: number) => ({
    ...Object.keys(prices).reduce((acc, group) => {
        const values = { ...prices[group] };
        const price = values[String(from)];

        delete values[from];

        values[to] = price;

        return { ...acc, [group]: values };
    }, {})
});

export const removeRow = (prices: PriceGroups, index: number) => ({
    ...Object.keys(prices).reduce((acc, group) => {
        const values = omit([String(index)], prices[group]);

        return { ...acc, [group]: values };
    }, {})
});

export const addRow = (prices: PriceGroups, key: number) => ({
    ...Object.keys(prices).reduce((acc, group) => {
        const values = { ...prices[group], [key]: 0 };

        return { ...acc, [group]: values };
    }, {})
});

export const addGroup = (prices: PriceGroups, groupName: string) => {
    const [key] = Object.keys(prices);
    const groupKeys = Object.keys(prices[key]);

    return {
        ...prices,
        [groupName]: groupKeys.reduce((acc, groupKey) => ({
            ...acc,
            [groupKey]: 0,
        }), {}),
    };
};

export const removeGroup = (prices: PriceGroups, groupName: string) => ({
    ...Object
        .keys(prices)
        .filter(group => group !== groupName)
        .reduce((acc, group) => ({
            ...acc,
            [group]: prices[group],
        }), {})
});
