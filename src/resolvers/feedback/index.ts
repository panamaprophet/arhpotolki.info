import { DeleteItemCommand, PutItemCommand, ScanCommand } from '@aws-sdk/client-dynamodb';
import { marshall, unmarshall } from '@aws-sdk/util-dynamodb';
import { randomUUID } from 'crypto';
import { client as db } from '../../services/db';


const FEEDBACK_TABLE = String(process.env.FEEDBACK_TABLE)


export const saveFeedback = async (data: any) => {
    const { id = randomUUID(), text, author, picture } = data;

    const result = await db.send(new PutItemCommand({
        TableName: FEEDBACK_TABLE,
        Item: marshall({
            id,
            text,
            author,
            picture,
            date: Date.now(),
        }),
    }));

    return { 
        success: (result.$metadata.httpStatusCode === 200),
    };
};

export const getFeedbacks = async () => {
    const result = await db.send(new ScanCommand({
        TableName: FEEDBACK_TABLE,
    }));

    const items = result.Count > 0 ? result.Items.map(item => unmarshall(item)) : null;

    return { items };
};

export const removeFeedback = async (id: string) => {
    const result = await db.send(new DeleteItemCommand({
        TableName: FEEDBACK_TABLE,
        Key: marshall({ id }),
    }));

    return { 
        success: (result.$metadata.httpStatusCode === 200),
    };
};
