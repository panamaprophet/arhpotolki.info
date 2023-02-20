import { useSession, signIn, signOut, getSession } from 'next-auth/react';

import { PicturesManager, FeedbackManager, SettingsManager } from '../components/Manager';
import Title from '../components/Title';

import {
    ACTION_FEEDBACK_CHANGE,
    ACTION_FEEDBACK_REMOVE,
    ACTION_PICTURES_CHANGE,
    ACTION_PICTURES_REMOVE,
    ACTION_SETTINGS_CHANGE,
    ACTION_SETTINGS_REMOVE,
    useAdminState,
} from '../hooks/useAdminState';

import { updateFeedback, updatePicture, updateSetting } from '../hooks/useAdminState/actions';

import { getFeedbacks } from '../resolvers/feedback';
import { getPictures, removePicture } from '../resolvers/pictures';
import { getSettings } from '../resolvers/settings';

import { Feedback, Picture, Setting } from '../types';


type Props = {
    settings: Setting[],
    pictures: Picture[],
    feedback: Feedback[],
};


const AdminPage = (props: Props) => {
    const { status } = useSession();
    const isAuthenticated = status === 'authenticated';
    const [state, dispatch] = useAdminState({ ...props });


    const onPictureUpdate = async (payload) => {
        await updatePicture(payload);
        dispatch({ type: ACTION_PICTURES_CHANGE, payload });
    };

    const onFeedbackUpdate = async (payload) => {
        await updateFeedback(payload);
        dispatch({ type: ACTION_FEEDBACK_CHANGE, payload });
    };

    const onSettingsUpdate = async (payload) => {
        await updateSetting(payload);
        dispatch({ type: ACTION_SETTINGS_CHANGE, payload });
    }

    const onPictureRemove = async (id: string) => {
        await removePicture(id);
        dispatch({ type: ACTION_PICTURES_REMOVE, payload: { id } });
    };

    const onFeedbackRemove = async (id: string) => {
        await removePicture(id);
        dispatch({ type: ACTION_FEEDBACK_REMOVE, payload: { id } });
    };

    const onSettingRemove = async (id: string) => {
        await removePicture(id);
        dispatch({ type: ACTION_SETTINGS_REMOVE, payload: { id } });
    };


    return (
        <>
            <div className="header">
                {isAuthenticated && <button onClick={() => signOut()}>sign out</button>}
                {!isAuthenticated && <button onClick={() => signIn()}>sign in</button>}
            </div>

            {isAuthenticated && <>
                <Title>Картинки</Title>
                <PicturesManager items={state.pictures} onChange={onPictureUpdate} onRemove={onPictureRemove} />

                <Title>Отзывы</Title>
                <FeedbackManager items={state.feedback} onChange={onFeedbackUpdate} onRemove={onFeedbackRemove} />

                <Title>Настройки</Title>
                <SettingsManager items={state.settings} onChange={onSettingsUpdate} onRemove={onSettingRemove} />
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
