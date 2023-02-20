import { decorateWithAuthentification } from '../../../decorators';
import { removeSetting, setSetting } from '../../../resolvers/settings';


const handler = async ({ method, body, query: { key } }, response) => {
    let result = null;

    if (method === 'PUT') {
        const { value } = JSON.parse(body);

        result = await setSetting({ key, value });
    }

    if (method === 'DELETE') {
        result = await removeSetting(key);
    }

    return response.status(200).json(result);
};


export default decorateWithAuthentification(handler);
