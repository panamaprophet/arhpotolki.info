import { DynamoDBClient/* , BatchWriteItemCommand, BatchGetItemCommand */ } from '@aws-sdk/client-dynamodb';
// import { marshall, unmarshall } from '@aws-sdk/util-dynamodb';


export const client = new DynamoDBClient({
    credentials: {
        accessKeyId: String(process.env.ACCESS_KEY),
        secretAccessKey: String(process.env.SECRET_KEY),
    },
    region: String(process.env.REGION),
});
