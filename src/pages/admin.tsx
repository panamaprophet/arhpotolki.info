import { useSession, signIn, signOut, getSession } from 'next-auth/react';
import { getFeedbacks } from '../resolvers/feedback';
import { getPictures } from '../resolvers/pictures';
import { getSettings } from '../resolvers/settings';


const PicturesManager = ({ items }) => (<div>pictures manager</div>);

const FeedbackManager = ({ items }) => (<div>feedback manager</div>);

const SettingsManager = ({ items }) => (<div>settings manager</div>);


const AdminPage = ({ settings, pictures, feedback }) => {
    const { status } = useSession();
    const isAuthenticated = status === 'authenticated';

    if (!isAuthenticated) {
        return (
            <>
                <button onClick={() => signIn()}>sign in</button>
            </>
        );
    }

    return (
        <>
            <div className="header">
                <span>admin</span>
                <button onClick={() => signOut()}>sign out</button>
            </div>

            <PicturesManager items={pictures} />
            <FeedbackManager items={feedback} />
            <SettingsManager items={settings} />
        </>
    );
};

AdminPage.getInitialProps = async (ctx) => {
    const session = await getSession({ req: ctx.req });

    if (!session) {
        return null;
    }

    return {
        settings: await getSettings(),
        pictures: await getPictures(),
        feedback: await getFeedbacks(),
    };
};


export default AdminPage;
