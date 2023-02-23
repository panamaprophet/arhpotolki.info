import { NextApiRequest, NextApiResponse } from 'next';
import { decorateWithAuthentification } from '../../../decorators';
import { removePicture, savePicture } from '../../../resolvers/pictures';


const handler = async ({ method, body, query: { id } }: NextApiRequest, response: NextApiResponse<{ success: boolean } | null>) => {
    let result = null;

    if (method === 'PUT') {
        result = await savePicture({ id, ...JSON.parse(body) });
    }

    if (method === 'DELETE') {
        result = await removePicture(id as string);
    }

    return response.status(200).json(result);
};


export default decorateWithAuthentification(handler);
