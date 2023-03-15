import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';


export const authOptions = {
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                // @todo: replace with actual backend stuff when it will be ready

                const username = String(process.env.ADMIN_USERNAME);
                const password = String(process.env.ADMIN_PASSWORD);

                if (credentials.username === username && credentials.password === password) {
                    return { id: 'admin' };
                };

                return null;
            },
            credentials: {
                username: {
                    type: 'text',
                    label: 'Username',
                },
                password: {
                    type: 'password',
                    label: 'Password',
                },
            },
        }),
    ],
};

export default NextAuth(authOptions);
