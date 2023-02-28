import Image from 'next/image';
import Gallery from '../modules/Gallery';
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
    menuLinks,
} from './index.mock';
import { ArrowDown, Burger } from '../components/Icon';
import { Modal } from '../components/Modal';
import Menu from '../components/Menu';
import { Logo } from '../components/Logo';
import { useState } from 'react';
import { Header } from '../components/Header';



const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    // @todo: use actions here to put the order
    const onOrderSubmit = (...args) => console.log('form subbmitted:', args);
    const onPriceChange = (...args) => console.log('price changed:', args);
    const onFeedbackSubmit = (...args) => console.log('form submitted:', args);

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

            <section id="description">
                <Text>Компания «АрхПотолки» на про­тя­же­нии шес­ти лет ус­пеш­но за­ни­ма­ет­ся про­да­жей и ус­та­нов­кой на­тяж­ных по­тол­ков, на тер­ри­то­рии всей Ар­хан­гель­ской об­ла­сти.</Text>
                <Text>Сво­им глав­ным дос­ти­же­ни­ем мы счи­та­ем ин­ди­ви­ду­аль­ный под­ход к каж­до­му кли­ен­ту и пер­во­класс­ное ка­чес­тво про­из­во­ди­мой на­ми ра­бо­ты.</Text>
                <Text>Од­но из глав­ных пре­и­му­ществ на­шей ком­па­нии, яв­ля­ет­ся сер­вис­ное об­слу­жи­ва­ние. Ведь на про­тя­же­нии всей га­ра­нтии мы за­бо­тим­ся о каж­дом ус­та­нов­лен­ном на­ми по­тол­ке, будь то бюд­жет­ный или экс­клю­зив­ный по­то­лок.</Text>
            </section>

            <section id="advantages" style={{ background: '#f7a136' }}>
                <Title>Только у нас:</Title>
                <List>
                    {features.map(item => (
                        <Card key={item.url}>
                            <Image src={item.url} alt="" width={64} height={64} />
                            <div>{item.text}</div>
                        </Card>
                    ))}
                </List>
            </section>

            <Gallery />

            <Separator text="Изготовление - от одного дня, монтаж - от двух часов." />

            <section id="calculator">
                <Title>Рассчитать стоимость:</Title>
                <Calculator
                    onCalc={onPriceChange}
                    materials={materials}
                    prices={prices}
                    lightPrice={lightPrice}
                    colorPrice={colorPrice}
                    defaultMeterPrice={costBySquare}
                />
            </section>

            <section id="application" style={{ background: '#f7a136' }}>
                <Title condenced={true}>Оставить заявку:</Title>
                <OrderForm onSubmit={onOrderSubmit} />
            </section>

            <section id="howto" className="layout">
                <Title>Как это работает?</Title>
                <List>
                    {steps.map(item => (
                        <Card key={item.url}>
                            <Image src={item.url} alt="" width={64} height={64} style={{ background: '#f7a136', borderRadius: '50%' }} />
                            <div>{item.text}</div>
                        </Card>
                    ))}
                </List>
            </section>

            <section id="certificates" className="layout">
                <Title>Сертификаты соответствия:</Title>
                <List>
                    {certificates.map(url => (
                        <Card key={url}>
                            <Image src={url} alt="" width="123" height="177" />
                        </Card>
                    ))}
                </List>
            </section>

            <section id="feedbacks">
                <Title>Отзывы:</Title>
                <Carousel>
                    {feedbacks.map(item => (
                        <FeedbackItem key={item.id} {...item} />
                    ))}
                </Carousel>
                <Row>
                    <Button theme="orange" onClick={() => console.log('open modal with feedbackform')}>
                        Оставить отзыв
                    </Button>
                </Row>

            </section>

            <FeedbackForm onSubmit={onFeedbackSubmit} />

            <Footer>
                <Column style={{ alignItems: 'center', textAlign: 'center' }}>
                    <Text>
                        АрхПотолки
                        <br />
                        город Архангельск, ул. Беломорской флотилии 2-3-33
                        <br />
                        +7 8182 47-67-24
                    </Text>

                    <Text>
                        <a target="_blank" href="http://vk.com/arhpotolki" rel="noreferrer">
                            vk.com/arhpotolki
                        </a>
                        <br />
                        <a target="_blank" href="mailto:hello@arhpotolki.info" rel="noreferrer">
                            hello@arhpotolki.info
                        </a>
                    </Text>

                    {/* insert the vk widget */}

                    <Text>
                        Copyright © АрхПотолки, 2014 - 2023 | <a href="/terms.html">Зашита персональной информации</a>
                    </Text>
                </Column>
            </Footer>
        </>
    );
};

export default App;
