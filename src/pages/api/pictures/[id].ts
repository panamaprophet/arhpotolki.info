import { decorateWithAuthentification } from '../../../decorators';
import { removePicture, savePicture } from '../../../resolvers/pictures';


const handler = async ({ method, body, query: { id } }, response) => {
    let result = null;

    if (method === 'PUT') {
        result = await savePicture({ id, ...body });
    }

    if (method === 'DELETE') {
        result = await removePicture(id);
    }

    return response.status(200).json(result);
};


export default decorateWithAuthentification(handler);
