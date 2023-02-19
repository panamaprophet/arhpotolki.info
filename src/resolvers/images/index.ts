import { client as s3 } from '../../services/s3';
import { client as db } from '../../services/db';


export const uploadImage = () => {
    // upload to s3
    // optimize
    // save to db
    // return uuid of image
};

export const updateImage = (data: any) => {
    // update image json in db
};

export const removeImage = (id: string) => {
    // remove from db, remove from s3
};

export const getImages = () => {
    // return all images in following format:
    // { id, path, tag (category?) }
};
