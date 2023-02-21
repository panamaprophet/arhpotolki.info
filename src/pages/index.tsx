import React from 'react';
import About from '../modules/About';
import Calc from '../modules/Calc';
import Certificates from '../modules/Certificates';
import Description from '../modules/Description';
import Gallery from '../modules/Gallery';
import Header from '../modules/Header';
import HowItWorks from '../modules/HowItWorks';
import Separator from '../modules/Separator';
import FeedbackForm from '../modules/FeedbackForm';
import Feedback from '../modules/Feedback';
import Footer from '../modules/Footer';

const App = () => {
    return (
        <>
            <Header />
            <Description />
            <About />
            <Gallery />
            <Separator />
            <Calc />
            <FeedbackForm />
            <HowItWorks />
            <Certificates />
            <Feedback />
            <Footer />
        </>
    );
};

export default App;
