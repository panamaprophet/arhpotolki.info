import { decorateWithAuthentification } from '../../../decorators';
import { getImages, removeImage, saveImage } from '../../../resolvers/images';


const handler = (request, response) => {
    switch (request.method) {
        case 'POST':
        case 'PUT':
            return saveImage(request.body);
        case 'GET':
            return getImages();
        case 'DELETE':
            return removeImage(request.body.id);
    }
};


export default decorateWithAuthentification(handler, { allowedMethods: ['GET'] });
