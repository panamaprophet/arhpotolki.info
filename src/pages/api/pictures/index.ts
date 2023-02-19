import { decorateWithAuthentification } from '../../../decorators';
import { getPictures, savePicture } from '../../../resolvers/pictures';


const handler = ({ method, body }) => {
    if (method === 'POST') {
        return savePicture(body);
    }

    if (method === 'GET') {
        return getPictures();
    }
};


export default decorateWithAuthentification(handler, { allowedMethods: ['GET'] });
