import { Feedback } from '../types';


export const addFeedback = async (item: Omit<Feedback, 'id'>) => {
    const response = await fetch(`/api/feedback`, {
        method: 'POST',
        body: JSON.stringify(item),
    }).then(response => response.json());

    return response.item;
};

export const updateFeedback = async (item: Feedback) => {
    const response = await fetch(`/api/feedback/${item.id}`, {
        method: 'PUT',
        body: JSON.stringify(item),
    }).then(response => response.json());

    return response.item;
};

export const removeFeedback = async (item: Pick<Feedback, 'id'>) => {
    const response = await fetch(`/api/feedback/${item.id}`, {
        method: 'DELETE',
    }).then(response => response.json());

    return response.item;
};
