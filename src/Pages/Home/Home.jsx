import { Helmet } from "react-helmet-async";
import About from "../About/About";
import Banner from "../Banner/Banner";
 import Location from "./Location";
import Faq from "../../FAQ/FAQ";
import Contact from "../../Contact/Contact";
 import Features from "../Features/Features";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title> REVITALIZE - Home</title> 
      </Helmet>
      <div>
        <Banner></Banner>
        <Features></Features>
         <About></About>
        <Location></Location>
        <Faq></Faq>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
