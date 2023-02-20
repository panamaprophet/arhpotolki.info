import { useSession, signIn, signOut, getSession } from 'next-auth/react';

import { Manager } from '../components/Manager';
import Title from '../components/Title';

import {
    ACTION_FEEDBACK_CHANGE,
    ACTION_FEEDBACK_REMOVE,
    ACTION_PICTURES_CHANGE,
    ACTION_PICTURES_REMOVE,
    ACTION_SETTINGS_CHANGE,
    ACTION_SETTINGS_REMOVE,
    useAdmin,
} from '../hooks/useAdmin';

import {
    updatePicture,
    updateFeedback,
    updateSetting,
    removePicture,
    removeFeedback,
    removeSetting,
} from '../actions';

import { getFeedbacks } from '../resolvers/feedback';
import { getPictures } from '../resolvers/pictures';
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
    const [state, dispatch] = useAdmin({ ...props });


    const onPictureUpdate = async (payload) => dispatch({
        type: ACTION_PICTURES_CHANGE,
        payload: await updatePicture(payload),
    });

    const onFeedbackUpdate = async (payload) => dispatch({
        type: ACTION_FEEDBACK_CHANGE,
        payload: await updateFeedback(payload),
    });

    const onSettingsUpdate = async (payload) => dispatch({
        type: ACTION_SETTINGS_CHANGE,
        payload: await updateSetting(payload),
    });

    const onPictureRemove = async (id: string) => dispatch({
        type: ACTION_PICTURES_REMOVE,
        payload: await removePicture({ id }),
    });

    const onFeedbackRemove = async (id: string) => dispatch({
        type: ACTION_FEEDBACK_REMOVE,
        payload: await removeFeedback({ id }),
    });

    const onSettingRemove = async (key: string) => dispatch({
        type: ACTION_SETTINGS_REMOVE,
        payload: await removeSetting({ key }),
    });


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
