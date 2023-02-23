import { useSession, signIn, signOut } from 'next-auth/react';

const AdminPage = () => {
    const { data: session, status } = useSession();

    if (status === 'authenticated') {
        return (
            <div>
                admin. <button onClick={() => signOut()}>sign out</button>
            </div>
        );
    }

    return <button onClick={() => signIn()}>sign in</button>;
};

export default AdminPage;
