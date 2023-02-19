import { getServerSession } from 'next-auth/next';
// @ts-ignore
import { authOptions } from '../pages/api/auth/[...nextauth]';


export const decorateWithAuthentification = (handler: any, { allowedMethods = [] }: { allowedMethods?: string[] } = {}) => async (request, response) => {
    const session = await getServerSession(request, response, authOptions);

    if (!session && !allowedMethods.includes(request.method)) {
        return response.status(401);
    }

    return handler(request, response);
};
