import { Fragment, useState } from 'react';
import Image from 'next/image';
import { Footer } from '../components/Footer';
import { OrderForm } from '../components/OrderForm';
import { List } from '../components/List';
import { Card } from '../components/Card';
import { Calculator } from '../components/Calculator';
import { Subtitle, Text, Title } from '../components/Text';
import { Carousel } from '../components/Carousel';
import { FeedbackForm } from '../components/FeedbackForm';
import { FeedbackItem } from '../components/FeedbackItem/FeedbackItem';
import { Separator } from '../components/Separator';
import { Column } from '../components/Layout';
import { Row } from '../components/Layout';
import { Button } from '../components/Button';
import { ArrowDown, Burger } from '../components/Icon';
import { Modal } from '../components/Modal';
import { Menu } from '../components/Menu';
import { Logo } from '../components/Logo';
import { Header } from '../components/Header';
import { Gallery } from '../components/Gallery';
import { Section } from '../components/Section';
import { Map } from '../components/Map';

import {
    certificates,
    steps,
    features,
    feedbacks,
    costBySquare,
    colorPrice,
    lightPrice,
    prices,
    materials,
    headerNotification,
    contacts,
    gallery,
    menuLinks,
} from './index.mock';

const getFullYear = () => (new Date()).getFullYear();

const formatLink = (link: string) => link.replaceAll(/^(mailto:|\/\/|http:\/\/|https:\/\/)/gi, '');


const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    // @todo: use actions here to put the order
    const onOrderSubmit = (...args) => console.log('form subbmitted:', args);
    const onPriceChange = (...args) => console.log('price changed:', args);
    const onFeedbackSubmit = (...args) => console.log('form submitted:', args);

    const [isFeedbackFormVisible, setFeedbackFormVisible] = useState(false);
    const showFeedbackForm = () => setFeedbackFormVisible(true);
    const hideFeedbackForm = () => setFeedbackFormVisible(false);

    return (
        <>
            <Header>
                <Row style={{ width: '100%', justifyContent: 'space-between' }}>
                    <Image src="/icons/eco.png" width="80" height="96" alt="" />
                    <Row>
                        <Subtitle color="#a6c719">
                            {contacts.phone}
                        </Subtitle>
                        <Button onClick={() => setIsModalOpen(true)}>
                            <Burger />
                        </Button>
                        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                            <Menu links={menuLinks} onClick={() => setIsModalOpen(false)} />
                        </Modal>
                    </Row>
                </Row>

                <Logo />

                <Row >
                    <Subtitle color="#2484c6">
                        {headerNotification}
                    </Subtitle>
                    <a href="#description">
                        <ArrowDown />
                    </a>
                </Row>
            </Header>

            <Section id="description" style={{ marginTop: 40, marginBottom: 40 }}>
                <Text>Компания «АрхПотолки» на про­тя­же­нии шес­ти лет ус­пеш­но за­ни­ма­ет­ся про­да­жей и ус­та­нов­кой на­тяж­ных по­тол­ков, на тер­ри­то­рии всей Ар­хан­гель­ской об­ла­сти.</Text>
                <Text>Сво­им глав­ным дос­ти­же­ни­ем мы счи­та­ем ин­ди­ви­ду­аль­ный под­ход к каж­до­му кли­ен­ту и пер­во­класс­ное ка­чес­тво про­из­во­ди­мой на­ми ра­бо­ты.</Text>
                <Text>Од­но из глав­ных пре­и­му­ществ на­шей ком­па­нии, яв­ля­ет­ся сер­вис­ное об­слу­жи­ва­ние. Ведь на про­тя­же­нии всей га­ра­нтии мы за­бо­тим­ся о каж­дом ус­та­нов­лен­ном на­ми по­тол­ке, будь то бюд­жет­ный или экс­клю­зив­ный по­то­лок.</Text>
            </Section>

            <Section id="advantages" style={{ background: '#f7a136' }}>
                <Title>Только у нас:</Title>
                <List align="center">
                    {features.map(item => (
                        <Card key={item.url}>
                            <Image src={item.url} alt="" width={64} height={64} />
                            <div>{item.text}</div>
                        </Card>
                    ))}
                </List>
            </Section>

            <Section id="examples">
                <Title>Наши работы</Title>
                <Gallery items={gallery} />
            </Section>

            <Separator text="Изготовление - от одного дня, монтаж - от двух часов." />

            <Section id="calculator">
                <Title>Рассчитать стоимость:</Title>
                <Calculator
                    onCalc={onPriceChange}
                    materials={materials}
                    prices={prices}
                    lightPrice={lightPrice}
                    colorPrice={colorPrice}
                    defaultMeterPrice={costBySquare}
                />
            </Section>

            <Section id="application" style={{ background: '#f7a136' }}>
                <Title condenced={true}>Оставить заявку:</Title>
                <OrderForm onSubmit={onOrderSubmit} />
            </Section>

            <Section id="howto">
                <Title>Как это работает?</Title>
                <List align="center">
                    {steps.map(item => (
                        <Card key={item.url}>
                            <Image src={item.url} alt="" width={64} height={64} style={{ background: '#f7a136', borderRadius: '50%' }} />
                            <div>{item.text}</div>
                        </Card>
                    ))}
                </List>
            </Section>

            <Section id="certificates">
                <Title>Сертификаты соответствия:</Title>
                <List align="center">
                    {certificates.map(url => (
                        <Card key={url}>
                            <Image src={url} alt="" width="123" height="177" />
                        </Card>
                    ))}
                </List>
            </Section>

            <Section id="feedbacks">
                <Title>Отзывы:</Title>
                <Carousel>
                    {feedbacks.map(item => (
                        <FeedbackItem key={item.id} {...item} />
                    ))}
                </Carousel>
                <Row>
                    <Button theme="orange" onClick={showFeedbackForm}>
                        Оставить отзыв
                    </Button>
                    <Modal isOpen={isFeedbackFormVisible} onClose={hideFeedbackForm}>
                        <FeedbackForm onSubmit={onFeedbackSubmit} />
                    </Modal>
                </Row>
            </Section>

            <Footer>
                <Column style={{ alignItems: 'center', textAlign: 'center', gap: 16 }}>
                    <Map />
                    <Text>
                        <strong>{contacts.companyName}</strong>
                        <br />
                        {contacts.address}
                        <br />
                        {contacts.phone}
                    </Text>

                    <Text>
                        {contacts.links.map((link) => (
                            <Fragment key={link}>
                                <a target="_blank" href={link} rel="noreferrer">{formatLink(link)}</a>
                                <br />
                            </Fragment>
                        ))}
                    </Text>

                    {/* insert the vk widget */}

                    <Text>
                        Copyright © {contacts.companyName}, 2014 - {getFullYear()} | <a href="/terms.html">Защита персональной информации</a>
                    </Text>
                </Column>
            </Footer >
        </>
    );
};


export default App;
