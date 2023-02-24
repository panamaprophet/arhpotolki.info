import Gallery from '../modules/Gallery';
import Header from '../modules/Header';
import Footer from '../modules/Footer';
import Title from '../components/Title';
import { OrderForm } from '../components/OrderForm';
import { List } from '../components/List';
import Image from 'next/image';
import { Card } from '../components/Card';
import { Calculator } from '../components/Calculator';
import { Text } from '../components/Text';
import { Carousel } from '../components/Carousel';
import { FeedbackItem } from '../components/FeedbackItem/FeedbackItem';
import { Separator } from '../components/Separator';

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
} from './index.mock';


const App = () => {
    // @todo: use actions here to put the order
    const onOrderSubmit = (...args) => console.log('form subbmitted:', args);
    const onPriceChange = (...args) => console.log('price changed:', args);

    return (
        <>
            <Header />

            <section id="description">
                <Text>
                    <p>Компания «АрхПотолки» на про­тя­же­нии шес­ти лет ус­пеш­но за­ни­ма­ет­ся про­да­жей и ус­та­нов­кой на­тяж­ных по­тол­ков, на тер­ри­то­рии всей Ар­хан­гель­ской об­ла­сти.</p>
                    <p>Сво­им глав­ным дос­ти­же­ни­ем мы счи­та­ем ин­ди­ви­ду­аль­ный под­ход к каж­до­му кли­ен­ту и пер­во­класс­ное ка­чес­тво про­из­во­ди­мой на­ми ра­бо­ты.</p>
                    <p>Од­но из глав­ных пре­и­му­ществ на­шей ком­па­нии, яв­ля­ет­ся сер­вис­ное об­слу­жи­ва­ние. Ведь на про­тя­же­нии всей га­ра­нтии мы за­бо­тим­ся о каж­дом ус­та­нов­лен­ном на­ми по­тол­ке, будь то бюд­жет­ный или экс­клю­зив­ный по­то­лок.</p>
                </Text>
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
                <List nowrap={true}>
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
                        <Image src={url} alt="" key={url} width="123" height="177" />
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
                <button>Оставить отзыв</button>
            </section>
            <Footer />
        </>
    );
};

export default App;
