import { Helmet } from "react-helmet-async";
import About from "../About/About";
import Banner from "../Banner/Banner";
  import Contact from "../../Contact/Contact";
 import Features from "../Features/Features";
import Team from "../Team/Team";

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
         <Team></Team>
         <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
