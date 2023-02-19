import { getFeedbacks, saveFeedback } from '../../../resolvers/feedback';


const handler = async ({ method, body }, response) => {
    let result = null;

    if (method === 'POST') {
        result = await saveFeedback(JSON.parse(body));
    }

    if (method === 'GET') {
        result = await getFeedbacks();
    }

    return response.status(200).json(result);
};


export default handler;
