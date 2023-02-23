import About from '../modules/About';
import Calc from '../modules/Calc';
import Certificates from '../modules/Certificates';
import Description from '../modules/Description';
import Gallery from '../modules/Gallery';
import Header from '../modules/Header';
import HowItWorks from '../modules/HowItWorks';
import Separator from '../modules/Separator';
import Feedback from '../modules/Feedback';
import Footer from '../modules/Footer';
import Title from '../components/Title';
import { OrderForm } from '../components/OrderForm';

const App = () => {
    // @todo: use action creators here to put the order
    const onOrderSubmit = (...args) => console.log('form subbmitted:', args);

    return (
        <>
            <Header />
            <Description />
            <About />
            <Gallery />
            <Separator />
            <Calc />
            <section id="application" style={{ background: '#f7a136' }}>
                <Title condenced={true}>Оставить заявку:</Title>
                <OrderForm onSubmit={onOrderSubmit} />
            </section>
            <HowItWorks />
            <Certificates />
            <Feedback />
            <Footer />
        </>
    );
};

export default App;
