import { NextApiRequest, NextApiResponse } from 'next';
import { getFeedbacks, saveFeedback } from '../../../resolvers/feedback';


const handler = async ({ method, body }: NextApiRequest, response: NextApiResponse<{ success: true } | null>) => {
    let result = null;

    if (method === 'POST') {
        result = await saveFeedback(JSON.parse(body));
    }

    if (method === 'GET') {
        result = await getFeedbacks();
    }

    return response.status(200).json(result);
};


export default handler;
