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
import { Section } from '../components/Section';
import { Carousel } from '../components/Carousel';
import { Button } from '../components/Button';


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
                    <Button theme="orange" onClick={() => signOut()}>Выйти</Button>
            </div>

            {isAuthenticated && <>
                <Section id="settings">
                    <Title>Настройки</Title>

                    <Row>
                        <strong>Уведомление в шапке:</strong>
                        <InputTextLazy value={state.settings.headerNotification} onChange={value => onSettingsUpdate('headerNotification', value)} />
                    </Row>

                    <Row>
                        <strong>Материалы:</strong>
                        <InputList value={state.settings.materials || []} onChange={value => onSettingsUpdate('materials', value)} />
                    </Row>

                    <Row>
                        <strong>Цена за дополнительный метр:</strong>
                        <InputTextLazy value={state.settings.defaultMeterPrice} onChange={value => onSettingsUpdate('defaultMeterPrice', value)} />
                    </Row>

                    <Row>
                        <strong>Цена за свветильник:</strong>
                        <InputTextLazy value={state.settings.lightPrice} onChange={value => onSettingsUpdate('lightPrice', value)} />
                    </Row>

                    <Row>
                        <strong>Цена за цвет:</strong>
                        <InputTextLazy value={state.settings.colorPrice} onChange={value => onSettingsUpdate('colorPrice', value)} />
                    </Row>
                </Section>

                <Section id="contacts">
                    <Title>Контакты</Title>
                    <Row>
                        <strong>Телефон:</strong>
                        <InputTextLazy value={state.settings.phone} onChange={value => onSettingsUpdate('phone', value)} />
                    </Row>
                    <Row>
                        <strong>Адрес:</strong>
                        <InputTextLazy value={state.settings.address} onChange={value => onSettingsUpdate('address', value)} />
                    </Row>
                    <Row>
                        <strong>Название компании:</strong>
                        <InputTextLazy value={state.settings.companyName} onChange={value => onSettingsUpdate('companyName', value)} />
                    </Row>
                    <Row>
                        <strong>Ссылки:</strong>
                        <InputList value={state.settings.links || []} onChange={value => onSettingsUpdate('links', value)} />
                    </Row>
                </Section>

                <Section id="prices">
                    <Title>Цены</Title>
                    <PriceEditor
                        prices={state.settings.prices}
                        onChange={value => onSettingsUpdate('prices', value)}
                    />
                </Section>

                <Section id="pictures">
                    <Title>Картинки</Title>

                    <List align="flex-start" wrap={false}>
                        {state.pictures.map((picture) => (
                            <Card key={picture.id} >
                                <PictureEditor {...picture} onCreate={onPictureCreate} onUpdate={onPictureUpdate} onRemove={onPictureRemove} />
                            </Card>
                        ))}
                    </List>

                    <PictureEditor onCreate={onPictureCreate} onUpdate={onPictureUpdate} onRemove={onPictureRemove} />
                </Section>

                <Section id="feedback">
                    <Title>Отзывы</Title>

                    <Carousel>
                        {state.feedback.map((feedback) => (
                            <FeedbackEditor key={feedback.id} {...feedback} onUpdate={onFeedbackUpdate} onRemove={onFeedbackRemove} />
                        ))}
                    </Carousel>
                </Section>
            </>}
        </>
    );
};


export const getServerSideProps = async (ctx) => {
    const session = await getSession({ req: ctx.req });
    const destination = ctx.req.url;

    if (!session) {
        return {
            redirect: {
                destination: `/api/auth/signin?callbackUrl=${destination}`,
                permanent: false,
            },
        };
    }

    return {
        props: {
            settings: await getSettings(),
            pictures: await getPictures(),
            feedback: await getFeedbacks(),
        },
    };
};


export default AdminPage;
