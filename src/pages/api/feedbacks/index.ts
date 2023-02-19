import { decorateWithAuthentification } from '../../../decorators';
import { getFeedbacks, removeFeedback, saveFeedback, updateFeedback } from '../../../resolvers/feedback';


const handler = async (request, request) => {
    switch (request.method) {
        case 'POST':
            return saveFeedback(request.body);
        case 'GET':
            return getFeedbacks();
        case 'PUT':
            return updateFeedback(request.body);
        case 'DELETE':
            return removeFeedback(request.body.id);
    }
};


export default decorateWithAuthentification(handler, { allowedMethods: ['GET', 'POST'] });
