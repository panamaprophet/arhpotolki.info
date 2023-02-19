import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';


export const client = new S3Client({
    credentials: {
        accessKeyId: String(process.env.ACCESS_KEY),
        secretAccessKey: String(process.env.SECRET_KEY),
    },
    region: String(process.env.REGION),
});

export const getUploadUrl = (bucket: string, key: string) => getSignedUrl(client, new PutObjectCommand({
    Bucket: bucket,
    Key: key,
}));
