import { Picture } from '../../../types';


export const updatePicture = (item: Picture) => fetch(`/api/pictures/${item.id}`, {
    method: 'PUT',
    body: JSON.stringify(item),
});

export const removePicture = (item: Pick<Picture, 'id'>) => fetch(`/api/pictures/${item.id}`, { method: 'DELETE' });

export const addPicture = (item: Omit<Picture, 'id'>) => fetch(`/api/pictures`, {
    method: 'POST',
    body: JSON.stringify(item),
});
