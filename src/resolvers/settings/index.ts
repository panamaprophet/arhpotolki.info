import { PutItemCommand, DeleteItemCommand, ScanCommand } from '@aws-sdk/client-dynamodb';
import { marshall, unmarshall } from '@aws-sdk/util-dynamodb';
import { client as db } from '../../services/db';
import { Settings } from '../../types';


const SETTINGS_TABLE = String(process.env.SETTINGS_TABLE);


export const setSetting = async ({ key, value }) => {
    const result = await db.send(new PutItemCommand({
        TableName: SETTINGS_TABLE,
        Item: marshall({ key, value }),
    }));

    return {
        success: (result.$metadata.httpStatusCode === 200),
        item: { key, value },
    };
};

export const removeSetting = async (key: string) => {
    const result = await db.send(new DeleteItemCommand({
        TableName: SETTINGS_TABLE,
        Key: marshall({ key }),
    }));

    return {
        success: (result.$metadata.httpStatusCode === 200),
        item: { key },
    };
};

export const getSettings = async (): Promise<Settings> => {
    const result = await db.send(new ScanCommand({
        TableName: SETTINGS_TABLE,
        Limit: 100,
    }));

    const items =
        result.Count > 0
            ? result.Items.map(item => unmarshall(item))
            : [];

    return items.reduce((result, item) => ({
        ...result,
        [item.key]: item.value,
    }), {});
};
