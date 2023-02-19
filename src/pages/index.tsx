import About from "../modules/About";
import Calculator from "../modules/Calculator";
import Certificates from "../modules/Certificates";
import Description from "../modules/Description";
import Examples from "../modules/Examples";
import Header from "../modules/Header";
import HowItWorks from "../modules/HowItWorks";
import Meta from "../modules/Meta";
import Tagline from "../modules/Tagline";
import FeedbackForm from "../modules/FeedbackForm";
import Feedbacks from "../modules/Feedbacks";
import Footer from "../modules/Footer";

const App = () => {
  return (
    <>
      <Meta />
      <Header />
      <Description />
      <About />
      <Examples />
      <Tagline />
      <Calculator />
      <FeedbackForm />
      <HowItWorks />
      <Certificates />
      <Feedbacks />
      <Footer />
    </>
  );
};

export default App;
