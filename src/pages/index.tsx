import About from "../modules/About";
import Calculator from "../modules/Calculator";
import Certificates from "../modules/Certificates";
import Description from "../modules/Description";
import Gallery from "../modules/Gallery";
import Header from "../modules/Header";
import HowItWorks from "../modules/HowItWorks";
import Separator from "../modules/Separator";
import FeedbackForm from "../modules/FeedbackForm";
import Feedbacks from "../modules/Feedbacks";
import Footer from "../modules/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Description />
      <About />
      <Gallery />
      <Separator />
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
