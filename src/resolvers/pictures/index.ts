import { DeleteItemCommand, PutItemCommand, ScanCommand } from '@aws-sdk/client-dynamodb';
import { marshall, unmarshall } from '@aws-sdk/util-dynamodb';
import { randomUUID } from 'crypto';
import { client as db } from '../../services/db';
import { Picture } from '../../types';


const PICTURES_TABLE = String(process.env.PICTURES_TABLE);


export const savePicture = async ({ id = randomUUID(), url, tags = [] }) => {
    const result = await db.send(new PutItemCommand({
        TableName: PICTURES_TABLE,
        Item: marshall({ id, url, tags }),
    }));

    return {
        success: (result.$metadata.httpStatusCode === 200),
        item: { id, url, tags },
    };
};

export const removePicture = async (id: string) => {
    const result = await db.send(new DeleteItemCommand({
        TableName: PICTURES_TABLE,
        Key: marshall({ id }),
    }));

    return {
        success: (result.$metadata.httpStatusCode === 200),
        item: { id },
    };
};

export const getPictures = async () => {
    const result = await db.send(new ScanCommand({
        TableName: PICTURES_TABLE,
    }));

    const items =
        result.Count > 0
            ? result.Items.map(item => unmarshall(item) as Picture)
            : [];

    return items;
};
