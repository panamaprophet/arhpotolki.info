import { NextApiRequest, NextApiResponse } from 'next';
import { decorateWithAuthentification } from '../../../decorators';
import { savePicture } from '../../../resolvers/pictures';
import { Picture } from '../../../types';


const handler = async ({ method, body }: NextApiRequest, response: NextApiResponse<{ success: boolean } | Picture[] | null>) => {
    let result = null;

    if (method === 'POST') {
        result = await savePicture(JSON.parse(body));
    }

    return response.status(200).json(result);
};


export default decorateWithAuthentification(handler);
