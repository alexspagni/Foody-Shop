import React from "react";
import Header from "../components/Header";
import SezioneAcquisti from "../components/homeComponents/SezioneAcquisti";
import Contatti from "../components/homeComponents/Contatti";
import InviaEmail from "../components/homeComponents/InviaEmail";
import Footer from "../components/Footer";
import Slider from "./Slider"


const Home = ({ match }) => {
  window.scrollTo(0, 0);
  const keyword = match.params.keyword;
  return (
    <div>
      <Header />
      <Slider />
      <SezioneAcquisti keyword={keyword} />
      <InviaEmail />
      <Contatti />
      <Footer />
    </div>
  );
};

export default Home;
