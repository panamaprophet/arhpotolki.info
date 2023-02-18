import { getServerSession } from 'next-auth/next';
// @ts-ignore
import { authOptions } from '../auth/[...nextauth]';

const handler = async (request, response) => {
    const session = await getServerSession(request, response, authOptions);

    if (!session) {
        return response.status(401);
    }

    if (request.method === 'POST') {
        // add picture
    }

    if (request.method === 'PUT') {
        // update picture
    }

    if (request.method === 'DELETE') {
        // remove picture
    }

    return null;
};

export default handler;
