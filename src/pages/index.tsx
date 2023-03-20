import { useState } from 'react';
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
import { Link } from '../components/Link';
import { VKWidget } from '../components/VKWidget';
import { LeadbackWidget } from '../components/LeadbackWidget';

import { getSettings } from '../resolvers/settings';
import { getFeedbacks } from '../resolvers/feedback';
import { getPictures } from '../resolvers/pictures';
import { Feedback, Picture } from '../types';
import { Description } from '../widgets/Description';
import { Steps } from '../widgets/StepsList';
import { Certificates } from '../widgets/Certificates';
import { Advantages } from '../widgets/Advantages';
import { HeaderWidget } from '../widgets/Header';
import { FooterWidget } from '../widgets/Footer';
import { FeedbacksWidget } from '../widgets/Feedbacks';
import { CalculatorWidget } from '../widgets/Calculator';
import { Application } from '../widgets/Application';


interface Props {
    feedbacks: Feedback[],
    gallery: Picture[],
    settings: any,
}


const App = (props: Props) => {
    const {
        feedbacks,
        settings,
        gallery
    } = props;

    const [order, setOrder] = useState({});

    return (
        <>
            <HeaderWidget {...settings} />

            <Description />

            <Advantages />

            {gallery.length && (
                <Section id="examples">
                    <Title>Наши работы</Title>
                    <Gallery items={gallery} />
                </Section>
            )}

            <Separator text="Изготовление - от одного дня, монтаж - от двух часов." />

            {settings.prices && settings.materials && (
                <CalculatorWidget setOrder={setOrder} order={order} {...settings} />
            )}

            <Application order={order} setOrder={setOrder} />

            <Steps />

            <Certificates />

            <FeedbacksWidget feedbacks={feedbacks} />

            <FooterWidget {...settings} />
        </>
    );
};


export default App;

export async function getServerSideProps() {
    return {
        props: {
            feedbacks: await getFeedbacks(),
            settings: await getSettings(),
            gallery: await getPictures(),
        }
    }
}
