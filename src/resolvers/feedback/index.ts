import { DeleteItemCommand, PutItemCommand, ScanCommand } from '@aws-sdk/client-dynamodb';
import { marshall, unmarshall } from '@aws-sdk/util-dynamodb';
import { randomUUID } from 'crypto';
import { client as db } from '../../services/db';
import { Feedback } from '../../types';


const FEEDBACK_TABLE = String(process.env.FEEDBACK_TABLE)


export const saveFeedback = async (data: Partial<Feedback>) => {
    const { id = randomUUID(), text, author, picture, date = Date.now() } = data;

    const result = await db.send(new PutItemCommand({
        TableName: FEEDBACK_TABLE,
        Item: marshall({
            id,
            text,
            author,
            picture,
            date,
        }),
    }));

    return {
        success: (result.$metadata.httpStatusCode === 200),
        item: { id, text, author, picture, date },
    };
};

export const getFeedbacks = async () => {
    const result = await db.send(new ScanCommand({
        TableName: FEEDBACK_TABLE,
        Limit: 100,
    }));

    const items =
        result.Items
            ? result.Items.map(item => unmarshall(item) as Feedback)
            : [];

    return items;
};

export const removeFeedback = async (id: string) => {
    const result = await db.send(new DeleteItemCommand({
        TableName: FEEDBACK_TABLE,
        Key: marshall({ id }),
    }));

    return {
        success: (result.$metadata.httpStatusCode === 200),
        item: { id },
    };
};
