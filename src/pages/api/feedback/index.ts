import { getFeedbacks, saveFeedback } from '../../../resolvers/feedback';


const handler = async ({ method, body }) => {
    if (method === 'POST') {
        return saveFeedback(body);
    }

    if (method === 'GET') {
        return getFeedbacks();
    }

    return null;
};


export default handler;
