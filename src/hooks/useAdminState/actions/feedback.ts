import { Feedback } from '../../../types';


export const addFeedback = (item: Omit<Feedback, 'id'>) => fetch(`/api/feedback`, {
    method: 'POST',
    body: JSON.stringify(item),
});

export const updateFeedback = (item: Feedback) => fetch(`/api/feedback/${item.id}`, {
    method: 'PUT',
    body: JSON.stringify(item),
});

export const removeFeedback = (item: Pick<Feedback, 'id'>) => fetch(`/api/feedback/${item.id}`, {
    method: 'DELETE',
});
