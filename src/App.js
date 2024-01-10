
import React from 'react';
import Header from './navigations/header';
import Empowering from './components/home/Empowering';
import Icons from './components/home/Icons';
import About from './components/home/About';
import Footer from './navigations/footer';
import Offer from './components/home/Offer';
import Explorer from './components/home/Explorer';
import PeopleSay from './components/home/PeopleSay';
import TrustedPartner from './components/home/TrustedPartner';
import Knowledge from './components/home/Knowledge';

const App = () => {
  return (
    <div>
      <Header />
      <Empowering />
      <Icons />
      <About />
      <Offer />
      <Explorer />
      <PeopleSay />
      <TrustedPartner />
      <Knowledge />
      {/* <Footer /> */}
      {/* Add other components and content for your application */}
    </div>
  );
};

export default App;


