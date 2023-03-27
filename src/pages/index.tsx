import { getSettings } from '../resolvers/settings';
import { getPictures } from '../resolvers/pictures';
import { getFeedbacks } from '../resolvers/feedback';

import { Separator } from '../components/Separator';
import { LeadbackWidget } from '../components/LeadbackWidget';

import { Order } from '../widgets/Order';
import { Steps } from '../widgets/Steps';
import { Advantages } from '../widgets/Advantages';
import { Description } from '../widgets/Description';
import { Certificates } from '../widgets/Certificates';
import { HeaderWidget as Header } from '../widgets/Header';
import { FooterWidget as Footer } from '../widgets/Footer';
import { GalleryWidget as Gallery } from '../widgets/Gallery';
import { FeedbackWidget as Feedback } from '../widgets/Feedback';

import { Context } from '../context';
import * as Types from '../types';

interface Props {
    feedback: Types.Feedback[];
    pictures: Types.Picture[];
    settings: Types.Settings;
}

const App = (props: Props) => {
    const { feedback, settings, pictures } = props;

    return (
        <Context.Provider value={{ feedback, settings, pictures }}>
            <Header />
            <Description />
            <Advantages />
            <Gallery />
            <Separator text="Изготовление - от одного дня, монтаж - от двух часов." />
            <Order />
            <Steps />
            <Certificates />
            <Feedback />
            <Footer />
            <LeadbackWidget campaign={settings.leadbackCampaign} />
        </Context.Provider>
    );
};


export default App;


export const getServerSideProps = async () => ({
    props: {
        feedback: await getFeedbacks(),
        settings: await getSettings(),
        pictures: await getPictures(),
    },
})
