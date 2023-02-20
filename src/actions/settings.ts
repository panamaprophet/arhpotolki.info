import { Setting } from '../types';


export const updateSetting = async ({ key, value }: Setting): Promise<Setting> => {
    const response = await fetch(`/api/settings/${key}`, {
        method: 'PUT',
        body: JSON.stringify({ value }),
    }).then(response => response.json());

    return response.item;
};

export const removeSetting = async <T extends Pick<Setting, 'key'>>(item: T): Promise<T> => {
    const response = await fetch(`/api/pictures/${item.key}`, {
        method: 'DELETE',
    }).then(response => response.json());

    return response.item;
};
