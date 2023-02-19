import { S3Client/* , BatchWriteItemCommand, BatchGetItemCommand */ } from '@aws-sdk/client-s3';
// import { marshall, unmarshall } from '@aws-sdk/util-dynamodb';


export const client = new S3Client({
    credentials: {
        accessKeyId: String(process.env.ACCESS_KEY),
        secretAccessKey: String(process.env.SECRET_KEY),
    },
    region: String(process.env.REGION),
});
