import { decorateWithAuthentification } from '../../../decorators';
import { getPictures, savePicture } from '../../../resolvers/pictures';


const handler = async ({ method, body }, response) => {
    let result = null;

    if (method === 'POST') {
        result = await savePicture(JSON.parse(body));
    }

    if (method === 'GET') {
        result = await getPictures();
    }

    return response.status(200).json(result);
};


export default decorateWithAuthentification(handler, { bypass: ['GET'] });
