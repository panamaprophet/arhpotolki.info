import { getUploadUrl } from "../../../services/s3";


const BUCKET_NAME = String(process.env.BUCKET_NAME);


const handler = async (request) => {
    const { name } = request.query;
    const target = `uploads/${name}`;
    const url = await getUploadUrl(BUCKET_NAME, target);

    return { url };
};


export default handler;
