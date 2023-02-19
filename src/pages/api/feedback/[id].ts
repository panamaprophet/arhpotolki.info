import { decorateWithAuthentification } from '../../../decorators';
import { removeFeedback, saveFeedback } from '../../../resolvers/feedback';


const handler = async ({ method, body, query }) => {
    const { id } = query;

    if (method === 'PUT') {
        return saveFeedback({ id, ...body });
    }

    if (method === 'DELETE') {
        return removeFeedback(id);
    }

    return null;
};


export default decorateWithAuthentification(handler);
