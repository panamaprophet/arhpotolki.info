import { useSession, signIn, signOut, getSession } from 'next-auth/react';

import Title from '../components/Title';
import { Manager } from '../components/Manager';
import { useAdmin } from '../hooks/useAdmin';

import { getFeedbacks } from '../resolvers/feedback';
import { getPictures } from '../resolvers/pictures';
import { getSettings } from '../resolvers/settings';

import { Feedback, Picture, Setting } from '../types';

import {
    createUpdatePictureAction,
    createUpdateFeedbackAction,
    createSettingsUpdateAction,
    createRemovePictureAction,
    createRemoveFeedbackAction,
    createRemoveSettingsAction,
} from '../hooks/useAdmin/action-creators';


type Props = {
    settings: Setting[],
    pictures: Picture[],
    feedback: Feedback[],
};


const AdminPage = (props: Props) => {
    const { status } = useSession();
    const isAuthenticated = status === 'authenticated';
    const [state, dispatch] = useAdmin({ ...props });

    const onPictureUpdate = createUpdatePictureAction(dispatch);
    const onFeedbackUpdate = createUpdateFeedbackAction(dispatch);
    const onSettingsUpdate = createSettingsUpdateAction(dispatch);
    const onPictureRemove = createRemovePictureAction(dispatch);
    const onFeedbackRemove = createRemoveFeedbackAction(dispatch);
    const onSettingRemove = createRemoveSettingsAction(dispatch);

    return (
        <>
            <div className="header">
                {!isAuthenticated && <button onClick={() => signIn()}>sign in</button>}
                {isAuthenticated && <button onClick={() => signOut()}>sign out</button>}
            </div>

            {isAuthenticated && <>
                <Title>Картинки</Title>
                <Manager items={state.pictures} onChange={onPictureUpdate} onRemove={onPictureRemove} />

                <Title>Отзывы</Title>
                <Manager items={state.feedback} onChange={onFeedbackUpdate} onRemove={onFeedbackRemove} />

                <Title>Настройки</Title>
                <Manager items={state.settings} onChange={onSettingsUpdate} onRemove={onSettingRemove} />
            </>}
        </>
    );
};

AdminPage.getInitialProps = async (ctx) => {
    const session = await getSession({ req: ctx.req });

    if (!session) {
        return {};
    }

    return {
        settings: await getSettings(),
        pictures: await getPictures(),
        feedback: await getFeedbacks(),
    };
};


export default AdminPage;
