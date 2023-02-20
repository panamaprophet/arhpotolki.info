import { Picture } from '../types';


export const updatePicture = async (item: Picture): Promise<Picture> => {
    const response = await fetch(`/api/pictures/${item.id}`, {
        method: 'PUT',
        body: JSON.stringify(item),
    }).then(response => response.json());

    return response.item;
}

export const removePicture = async <T extends Pick<Picture, 'id'>>(item: T): Promise<T> => {
    const response = await fetch(`/api/pictures/${item.id}`, {
        method: 'DELETE',
    }).then(response => response.json());

    return response.item;
};

export const addPicture = async (item: Omit<Picture, 'id'>): Promise<Picture> => {
    const response = await fetch(`/api/pictures`, {
        method: 'POST',
        body: JSON.stringify(item),
    }).then(response => response.json());

    return response.item;
};
