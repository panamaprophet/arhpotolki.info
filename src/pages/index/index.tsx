import Calc from '../../modules/Calc';
import Description from '../../modules/Description';
import Gallery from '../../modules/Gallery';
import Header from '../../modules/Header';
import Separator from '../../modules/Separator';
import Feedback from '../../modules/Feedback';
import Footer from '../../modules/Footer';
import Title from '../../components/Title';
import { OrderForm } from '../../components/OrderForm';
import { List } from '../../components/List';
import Image from 'next/image';
import { Card } from '../../components/Card';
import { certificates, steps, features } from './mock';


const App = () => {
    // @todo: use actions here to put the order
    const onOrderSubmit = (...args) => console.log('form subbmitted:', args);

    return (
        <>
            <Header />
            <Description />

            <section id="advantages" style={{ background: '#f7a136' }}>
                <Title>Только у нас:</Title>
                <List>
                    {features.map((item) => (
                        <Card key={item.url}>
                            <Image src={item.url} alt="" width={64} height={64} />
                            <div>{item.text}</div>
                        </Card>
                    ))}
                </List>
            </section>

            <Gallery />
            <Separator />
            <Calc />

            <section id="application" style={{ background: '#f7a136' }}>
                <Title condenced={true}>Оставить заявку:</Title>
                <OrderForm onSubmit={onOrderSubmit} />
            </section>

            <section id="howto" className="layout">
                <Title>Как это работает?</Title>
                <List nowrap={true}>
                    {steps.map((item) => (
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
                    {certificates.map((url) => (
                        <Image src={url} alt="" key={url} width="123" height="177" />
                    ))}
                </List>
            </section>

            <Feedback />
            <Footer />
        </>
    );
};

export default App;
