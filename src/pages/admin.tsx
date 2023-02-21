import { useState } from 'react';
import { useSession, signIn, signOut, getSession } from 'next-auth/react';
import Image from 'next/image';

import Title from '../components/Title';
import { Manager } from '../components/Manager';
import { InputFile } from '../components/InputFile';
import { InputList } from '../components/Manager/elements/InputList';

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
    createAddPictureAction,
} from '../hooks/useAdmin/action-creators';


const Picture = ({ id = null, url = '', tags = [], onCreate, onUpdate, onRemove }) => {
    const [picture, setPicture] = useState({ id, url, tags });

    return (
        <div>
            {!url && <InputFile onUpload={url => setPicture({ ...picture, url })} />}
            {url && <Image src={url} alt={id} width="100" height="100" />}
            <InputList onChange={tags => setPicture({ ...picture, tags })} value={picture.tags} />
            {!picture.id && <button onClick={() => onCreate(picture)}>Добавить</button>}
            {picture.id && <button onClick={() => onUpdate(picture)}>Сохранить</button>}
            {picture.id && <button onClick={() => onRemove(picture)}>Удалить</button>}
        </div>
    );
};


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
    const onPictureCreate = createAddPictureAction(dispatch);

    return (
        <>
            <div className="header">
                {!isAuthenticated && <button onClick={() => signIn()}>sign in</button>}
                {isAuthenticated && <button onClick={() => signOut()}>sign out</button>}
            </div>

            {isAuthenticated && <>
                <Title>Картинки</Title>
                {/* <Manager items={state.pictures} onChange={onPictureUpdate} onRemove={onPictureRemove} /> */}

                {state.pictures.map((picture) => (
                    <Picture
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
                    <Picture
                        onCreate={onPictureCreate}
                        onUpdate={onPictureUpdate}
                        onRemove={onPictureRemove}
                    />
                </div>

                <Title>Отзывы</Title>
                <Manager
                    items={state.feedback}
                    onChange={onFeedbackUpdate}
                    onRemove={onFeedbackRemove}
                />

                <Title>Настройки</Title>
                <Manager
                    items={state.settings}
                    onChange={onSettingsUpdate}
                    onRemove={onSettingRemove}
                />
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
