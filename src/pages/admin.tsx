import { useSession, signIn, signOut } from 'next-auth/react';


const PicturesManager = ({ items }) => (<div>pictures manager</div>);

const FeedbackManager = ({ items }) => (<div>feedback manager</div>);


const AdminPage = () => {
    const { data: session, status } = useSession();
    const isAuthenticated = status === 'authenticated';

    if (!isAuthenticated) {
        return (
            <button onClick={() => signIn()}>sign in</button>
        );
    }

    return (
        <>
            <div className="header">
                admin.
                <button onClick={() => signOut()}>sign out</button>
            </div>
            <PicturesManager items={[]} />
            <FeedbackManager items={[]} />
        </>
    );
};

AdminPage.getLayout = page => (
    <div>
        {page}
    </div>
);

export default AdminPage;
