import { useCallback, useReducer, useState } from 'react';
import Image from 'next/image';
import { signOut, getSession } from 'next-auth/react';
import { Title } from '../components/Text';
import { InputTextLazy, InputList, InputFile } from '../components/Input';
import { List } from '../components/List';
import { Column, Row } from '../components/Layout';
import { Card } from '../components/Card';
import { Section } from '../components/Section';
import { Carousel } from '../components/Carousel';
import { Button } from '../components/Button';
import { PictureEditor, FeedbackEditor, PriceEditor } from '../components/Editor';

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
import { GetServerSideProps } from 'next';
import { uploadMultiple } from '../resolvers/storage';


type Props = {
    settings: Setting,
    pictures: Picture[],
    feedback: Feedback[],
};


const AdminPage = (props: Props) => {
    const [state, dispatch] = useReducer(reducer, { ...props });
    const [urls, setUrls] = useState<string[]>([]);
    const [tags, setTags] = useState<string[]>([]);

    const addUrls = useCallback(async (files: File[]) => {
        const newUrls = await uploadMultiple(files);

        return setUrls(urls => [
            ...urls,
            ...newUrls,
        ])
    }, [])

    const onPictureUpdate = createUpdatePictureAction(dispatch);
    const onFeedbackUpdate = createUpdateFeedbackAction(dispatch);
    const onSettingsUpdate = createSettingsUpdateAction(dispatch);
    const onPictureRemove = createRemovePictureAction(dispatch);
    const onFeedbackRemove = createRemoveFeedbackAction(dispatch);
    const onPictureCreate = createAddPictureAction(dispatch);

    const saveNewPictures = async () => {
        const promises = urls.map(url => onPictureCreate({ url, tags }));

        await Promise.all(promises);

        setTags([]);
        setUrls([]);
    };

    return (
        <>
            <Section>
                <Row style={{ justifyContent: 'flex-end' }}>
                    <Button theme="green" onClick={() => signOut()}>Выйти</Button>
                </Row>
            </Section>

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

                <Row>
                    <strong>Leadback Campaign Id:</strong>
                    <InputTextLazy value={state.settings.leadbackCampaign} onChange={value => onSettingsUpdate('leadbackCampaign', value)} />
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
                <PriceEditor prices={state.settings.prices} onChange={value => onSettingsUpdate('prices', value)} />
            </Section>

            <Section id="pictures">
                <Title>Картинки</Title>

                <List align="flex-start" wrap={false}>
                    {state.pictures.map((picture) => (
                        <Card key={picture.id} >
                            <PictureEditor {...picture} onUpdate={onPictureUpdate} onRemove={onPictureRemove} />
                        </Card>
                    ))}
                </List>

                <Column>
                    <InputFile multiple={true} onChange={addUrls} />
                    <List align="flex-start" wrap={false}>
                        {urls && urls.map((url) => <Image src={url} key={url} alt="" width="120" height="120" />)}
                    </List>
                    <InputList placeholder="категории" onChange={setTags} value={tags} />

                    <Button theme="green" onClick={saveNewPictures}>Добавить</Button>
                </Column>
            </Section>

            <Section id="feedback">
                <Title>Отзывы</Title>

                <Carousel>
                    {state.feedback.map((feedback) => (
                        <FeedbackEditor key={feedback.id} {...feedback} onUpdate={onFeedbackUpdate} onRemove={onFeedbackRemove} />
                    ))}
                </Carousel>
            </Section>
        </>
    );
};


export const getServerSideProps: GetServerSideProps = async (ctx) => {
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
