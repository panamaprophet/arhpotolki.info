import { getServerSession } from 'next-auth/next';
import { authOptions } from '../pages/api/auth/[...nextauth]';


export const decorateWithAuthentification =
    (handler: any, { bypass = [] }: { bypass?: string[] } = {}) =>
        async (request, response) => {
            const session = await getServerSession(request, response, authOptions);

            if (!session && !bypass.includes(request.method)) {
                return response.status(401);
            }

            return handler(request, response);
        };
