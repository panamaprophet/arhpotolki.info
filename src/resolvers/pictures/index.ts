import { DeleteItemCommand, PutItemCommand, QueryCommand } from '@aws-sdk/client-dynamodb';
import { marshall, unmarshall } from '@aws-sdk/util-dynamodb';
import { randomUUID } from 'crypto';
import { client as db } from '../../services/db';


const PICTURES_TABLE = String(process.env.PICTURES_TABLE);


export const savePicture = async ({ id = randomUUID(), url, tags = [] }) => {
    const result = await db.send(new PutItemCommand({
        TableName: PICTURES_TABLE,
        Item: marshall({ id, url, tags }),
    }));

    return result.$metadata.httpStatusCode === 200 ? id : null;
};

export const removePicture = async (id: string) => {
    const result = await db.send(new DeleteItemCommand({
        TableName: PICTURES_TABLE,
        Key: marshall({ id }),
    }));

    return result.$metadata.httpStatusCode === 200;
};

export const getPictures = async () => {
    const result = await db.send(new QueryCommand({
        TableName: PICTURES_TABLE,
    }))

    return result.Count > 0 ? result.Items.map(item => unmarshall(item)) : null;
};
