import { NextApiRequest, NextApiResponse } from 'next';
import { decorateWithAuthentification } from '../../../decorators';
import { removeFeedback, saveFeedback } from '../../../resolvers/feedback';


const handler = async ({ method, body, query: { id } }: NextApiRequest, response: NextApiResponse<{ success: boolean } | null>) => {
    let result = null;

    if (method === 'PUT') {
        result = await saveFeedback({ id, ...body });
    }

    if (method === 'DELETE') {
        result = await removeFeedback(id as string);
    }

    return response.status(200).json(result);
};


export default decorateWithAuthentification(handler);
