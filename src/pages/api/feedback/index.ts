import { getServerSession } from 'next-auth/next';
// @ts-ignore
import { authOptions } from '../auth/[...nextauth]';


const handler = async (request, response) => {
    const session = await getServerSession(request, response, authOptions);
    const allowedUnauthorizedMethods = ['POST'];

    if (!session && !allowedUnauthorizedMethods.includes(request.method)) {
        return response.status(401);
    }

    if (request.method === 'POST') {
        // add feedback item
    }

    if (session && request.method === 'PUT') {
        // update feedback item
    }

    if (session && request.method === 'DELETE') {
        // remove feedback item
    }

    return null;
};


export default handler;
