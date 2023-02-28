import { useReducer } from 'react';
import { useSession, signIn, signOut, getSession } from 'next-auth/react';

import { Title } from '../components/Text';
import { InputTextLazy, InputList } from '../components/Input';
import {
    PictureEditor,
    FeedbackEditor,
    PriceEditor,
} from '../components/Editor';

import { getFeedbacks } from '../resolvers/feedback';
import { getPictures } from '../resolvers/pictures';
import { getSettings } from '../resolvers/settings';

import { reducer } from '../store/admin';
import {
    createUpdatePictureAction,
    createUpdateFeedbackAction,
    createSettingsUpdateAction,
    createRemovePictureAction,
    createRemoveFeedbackAction,
    createAddPictureAction,
} from '../store/admin/action-creators';

import { Feedback, Picture, Setting } from '../types';
import { List } from '../components/List';
import { Row } from '../components/Layout';
import { Card } from '../components/Card';


type Props = {
    settings: Setting[],
    pictures: Picture[],
    feedback: Feedback[],
};


const AdminPage = (props: Props) => {
    const { status } = useSession();
    const isAuthenticated = status === 'authenticated';
    const [state, dispatch] = useReducer(reducer, { ...props });

    const onPictureUpdate = createUpdatePictureAction(dispatch);
    const onFeedbackUpdate = createUpdateFeedbackAction(dispatch);
    const onSettingsUpdate = createSettingsUpdateAction(dispatch);
    const onPictureRemove = createRemovePictureAction(dispatch);
    const onFeedbackRemove = createRemoveFeedbackAction(dispatch);
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
                <section id="settings">
                    <Title condenced={true}>Настройки</Title>

                    <Row>
                        Уведомление в шапке:
                        <InputTextLazy value={state.settings.headerNotification} onChange={value => onSettingsUpdate('headerNotification', value)} />
                    </Row>

                    <Row>
                        Материалы:
                        <InputList value={state.settings.materials} onChange={value => onSettingsUpdate('materials', value)} />
                    </Row>

                    <Row>
                        Цена за дополнительный метр:
                        <InputTextLazy value={state.settings.defaultMeterPrice} onChange={value => onSettingsUpdate('defaultMeterPrice', value)} />
                    </Row>

                    <Row>
                        Цена за свветильник:
                        <InputTextLazy value={state.settings.lightPrice} onChange={value => onSettingsUpdate('lightPrice', value)} />
                    </Row>

                    <Row>
                        Цена за цвет:
                        <InputTextLazy value={state.settings.colorPrice} onChange={value => onSettingsUpdate('colorPrice', value)} />
                    </Row>
                </section>

                <section id="prices">
                    <Title condenced={true}>Цены</Title>
                    <PriceEditor
                        prices={state.settings.prices}
                        onChange={value => onSettingsUpdate('prices', value)}
                    />
                </section>

                <section id="pictures">
                    <Title condenced={true}>Картинки</Title>

                    <List align="flex-start">
                        {state.pictures.map((picture) => (
                            <Card key={picture.id} >
                                <PictureEditor {...picture} onCreate={onPictureCreate} onUpdate={onPictureUpdate} onRemove={onPictureRemove} />
                            </Card>
                        ))}
                    </List>

                    <PictureEditor onCreate={onPictureCreate} onUpdate={onPictureUpdate} onRemove={onPictureRemove} />
                </section>

                <section id="feedback">
                    <Title condenced={true}>Отзывы</Title>

                    {state.feedback.map((feedback) => (
                        <FeedbackEditor key={feedback.id} {...feedback} onUpdate={onFeedbackUpdate} onRemove={onFeedbackRemove} />
                    ))}
                </section>
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
