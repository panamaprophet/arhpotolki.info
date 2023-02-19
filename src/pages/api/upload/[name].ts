import { getUploadUrl } from "../../../services/s3";


const BUCKET_NAME = String(process.env.BUCKET_NAME);


const handler = async (request) => {
    const { name } = request.query;
    const url = await getUploadUrl(BUCKET_NAME, name);

    return { url };
};


export default handler;
