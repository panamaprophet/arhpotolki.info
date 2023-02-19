import { decorateWithAuthentification } from '../../../decorators';
import { removeFeedback, saveFeedback } from '../../../resolvers/feedback';


const handler = async ({ method, body, query: { id } }, response) => {
    let result = null;

    if (method === 'PUT') {
        result = await saveFeedback({ id, ...body });
    }

    if (method === 'DELETE') {
        result = await removeFeedback(id);
    }

    return response.status(200).json(result);
};


export default decorateWithAuthentification(handler);
