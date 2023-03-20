import { useState } from 'react';
import { Title } from '../components/Text';
import { Separator } from '../components/Separator';
import { Gallery } from '../components/Gallery';
import { Section } from '../components/Section';

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
import { Calculator } from '../widgets/Calculator';
import { Application } from '../widgets/Application';

interface Props {
    feedbacks: Feedback[];
    gallery: Picture[];
    settings: any;
}

const App = (props: Props) => {
    const { feedbacks, settings, gallery } = props;

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

            <Calculator setOrder={setOrder} order={order} {...settings} />

            <Application order={order} setOrder={setOrder} />

            <Steps />

            <Certificates />

            <FeedbacksWidget feedbacks={feedbacks} />

            <FooterWidget {...settings} />
        </>
    );
};

export default App;

export const getServerSideProps = async () => ({
    props: {
        feedbacks: await getFeedbacks(),
        settings: await getSettings(),
        gallery: await getPictures(),
    },
})
