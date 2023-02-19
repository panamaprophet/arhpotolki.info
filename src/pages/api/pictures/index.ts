import { decorateWithAuthentification } from '../../../decorators';
import { getImages, removeImage, updateImage, uploadImage } from '../../../resolvers/images';


const handler = (request, request) => {
    switch (request.method) {
        case 'POST':
            return uploadImage(request.body);
        case 'GET':
            return getImages();
        case 'PUT':
            return updateImage(request.body);
        case 'DELETE':
            return removeImage(request.body.id);
    }
};


export default decorateWithAuthentification(handler, { allowedMethods: ['GET'] });
