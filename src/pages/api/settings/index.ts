import { NextApiRequest, NextApiResponse } from 'next';
import { decorateWithAuthentification } from '../../../decorators';
import { getSettings } from '../../../resolvers/settings';


const handler = async ({ method }: NextApiRequest, response: NextApiResponse<{ [k: string]: unknown }>) => {
    let result = null;

    if (method === 'GET') {
        result = await getSettings();
    }

    return response.status(200).json(result);
};


export default decorateWithAuthentification(handler);
