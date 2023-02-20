import { decorateWithAuthentification } from '../../../decorators';
import { getSettings } from '../../../resolvers/settings';


const handler = async ({ method }, response) => {
    let result = null;

    if (method === 'GET') {
        result = await getSettings();
    }

    return response.status(200).json(result);
};


export default decorateWithAuthentification(handler);
