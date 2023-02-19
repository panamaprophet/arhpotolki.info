import { decorateWithAuthentification } from '../../../decorators';
import { removePicture, savePicture } from '../../../resolvers/pictures';


const handler = async ({ method, body, query }) => {
    const { id } = query;

    if (method === 'PUT') {
        return savePicture({ id, ...body });
    }

    if (method === 'DELETE') {
        return removePicture(id);
    }

    return null;
};


export default decorateWithAuthentification(handler);
