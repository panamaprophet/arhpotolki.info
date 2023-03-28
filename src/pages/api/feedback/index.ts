import { NextApiRequest, NextApiResponse } from 'next';
import { getFeedbacks, saveFeedback } from '../../../resolvers/feedback';
import { Feedback } from '../../../types';


const handler = async ({ method, body }: NextApiRequest, response: NextApiResponse<{ success: boolean } | Feedback | Feedback[] | null>) => {
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
