import { decorateWithAuthentification } from '../../../decorators';
import { getFeedbacks, removeFeedback, saveFeedback } from '../../../resolvers/feedback';


const handler = async (request, response) => {
    switch (request.method) {
        case 'POST':
        case 'PUT':
            return saveFeedback(request.body);
        case 'GET':
            return getFeedbacks();
        case 'DELETE':
            return removeFeedback(request.body.id);
    }
};


export default decorateWithAuthentification(handler, { allowedMethods: ['GET', 'POST'] });
