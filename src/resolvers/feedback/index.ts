import { randomUUID } from 'crypto';
import { client as s3 } from '../../services/s3';
import { client as db } from '../../services/db';


export const saveFeedback = async (data: any) => {
    const id = randomUUID();
    const { text, author } = data;
    const picture = data.picture ? await s3.upload(data.picture) : null;

    const result = await db.save({
        id,
        text,
        author,
        picture,
        date: Date.now(),
    });

    return result;
};

export const getFeedbacks = () => {
    const result = await db.get();

    return result;
};

export const updateFeedback = (data: any) => {
    const { id } = data;
    const previousData = await db.get(id);
    const updatedData = { ...previousData, ...data };

    const result = await db.save(updatedData);

    return result;
};

export const removeFeedback = (data: any) => {
    const { id } = data;
    const result = await db.delete(id);

    return result;
};
