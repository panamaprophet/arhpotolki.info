import { useSession, signIn, signOut, getSession } from 'next-auth/react';

import Title from '../components/Title';
import { PictureEditor } from '../components/PictureEditor';
import { FeedbackEditor } from '../components/FeedbackEditor';

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
    // createRemoveSettingsAction,
    createAddPictureAction,
} from '../hooks/useAdmin/action-creators';
import { InputText } from '../components/Input';


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
    // const onSettingRemove = createRemoveSettingsAction(dispatch);
    const onPictureCreate = createAddPictureAction(dispatch);

    return (
        <>
            <div className="header">
                {!isAuthenticated
                    ? <button onClick={() => signIn()}>sign in</button>
                    : <button onClick={() => signOut()}>sign out</button>
                }
            </div>

            {isAuthenticated && <>
                <Title>Картинки</Title>

                {state.pictures.map((picture) => (
                    <PictureEditor
                        key={picture.id}
                        {...picture}
                        onCreate={onPictureCreate}
                        onUpdate={onPictureUpdate}
                        onRemove={onPictureRemove}
                    />
                ))}

                <hr />

                <div>
                    Добавить картинку:
                    <PictureEditor
                        onCreate={onPictureCreate}
                        onUpdate={onPictureUpdate}
                        onRemove={onPictureRemove}
                    />
                </div>

                <Title>Отзывы</Title>

                {state.feedback.map((feedback) => (
                    <FeedbackEditor
                        key={feedback.id}
                        {...feedback}
                        onUpdate={onFeedbackUpdate}
                        onRemove={onFeedbackRemove}
                    />
                ))}

                <Title>Настройки</Title>

                {state.settings.map((setting) => (
                    <div key={setting.key}>
                        {setting.key}:
                        <InputText
                            value={setting.value}
                            onChange={value => onSettingsUpdate({ ...setting, value })}
                        />
                    </div>
                ))}
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
