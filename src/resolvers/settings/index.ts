import { PutItemCommand, DeleteItemCommand, ScanCommand } from '@aws-sdk/client-dynamodb';
import { marshall, unmarshall } from '@aws-sdk/util-dynamodb';
import { client as db } from '../../services/db';


const SETTINGS_TABLE = String(process.env.SETTINGS_TABLE);


export const setSetting = async ({ key, value }) => {
    const result = await db.send(new PutItemCommand({
        TableName: SETTINGS_TABLE,
        Item: marshall({ key, value }),
    }));

    return result.$metadata.httpStatusCode === 200 ? key : null;
};

export const removeSetting = async (key: string) => {
    const result = await db.send(new DeleteItemCommand({
        TableName: SETTINGS_TABLE,
        Key: marshall({ key }),
    }));

    return result.$metadata.httpStatusCode === 200;
};

export const getSettings = async () => {
    const result = await db.send(new ScanCommand({
        TableName: SETTINGS_TABLE,
    }));

    return result.Count > 0 ? result.Items.map(item => unmarshall(item)) : null;
};
