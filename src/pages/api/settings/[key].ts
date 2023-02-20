import { decorateWithAuthentification } from '../../../decorators';
import { removeSetting, setSetting } from '../../../resolvers/settings';


const handler = async ({ method, body, query: { key } }, response) => {
    let result = null;

    if (method === 'PUT') {
        result = await setSetting({ key, ...body });
    }

    if (method === 'DELETE') {
        result = await removeSetting(key);
    }

    return response.status(200).json(result);
};


export default decorateWithAuthentification(handler);
