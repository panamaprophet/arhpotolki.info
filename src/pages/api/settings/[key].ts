import { NextApiRequest, NextApiResponse } from 'next';
import { decorateWithAuthentification } from '../../../decorators';
import { removeSetting, setSetting } from '../../../resolvers/settings';


const handler = async ({ method, body, query: { key } }: NextApiRequest, response: NextApiResponse<{ success: boolean } | null>) => {
    let result = null;

    if (method === 'PUT') {
        const { value } = JSON.parse(body);

        result = await setSetting({ key, value });
    }

    if (method === 'DELETE') {
        result = await removeSetting(key as string);
    }

    return response.status(200).json(result);
};


export default decorateWithAuthentification(handler);
