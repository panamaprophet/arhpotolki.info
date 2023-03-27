import { Gallery } from '../widgets/Gallery';
import { Separator } from '../components/Separator';

import { getSettings } from '../resolvers/settings';
import { getPictures } from '../resolvers/pictures';
import { getFeedbacks } from '../resolvers/feedback';

import { Feedback, Picture } from '../types';

import { Order } from '../widgets/Order';
import { Steps } from '../widgets/StepsList';
import { HeaderWidget } from '../widgets/Header';
import { FooterWidget } from '../widgets/Footer';
import { Advantages } from '../widgets/Advantages';
import { Description } from '../widgets/Description';
import { Certificates } from '../widgets/Certificates';
import { FeedbacksWidget } from '../widgets/Feedbacks';
import { LeadbackWidget } from '../components/LeadbackWidget';

interface Props {
    feedbacks: Feedback[];
    gallery: Picture[];
    settings: any;
}

const App = (props: Props) => {
    const { feedbacks, settings, gallery } = props;

    return (
        <>
            <HeaderWidget {...settings} />

            <Description />

            <Advantages />

            <Gallery gallery={gallery} />

            <Separator text="Изготовление - от одного дня, монтаж - от двух часов." />

            <Order {...settings} />

            <Steps />

            <Certificates />

            <FeedbacksWidget feedbacks={feedbacks} />

            <FooterWidget {...settings} />

            <LeadbackWidget campaign="0a656cc19f3f5b27324bfa32" />
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
