import React from 'react';
import Navbar from '../../Navbar';
import MainSection from '../../MainSection';
import { homeObjOne,  } from './Data';
import Footer from '../Footer.js/Footer';
// import Job from "./Job";
//,  homeObjThree, homeObjTwo,  homeObjFour
// import Pricing from '../../Pricing';
import Cards from '../../Cards';


function Home() {
  return (
    <>
    <Navbar />
      <MainSection {...homeObjOne} />
      <Cards />
      <Footer />
      {/* <Pricing /> */}
      {/* <HeroSection {...homeObjThree} /> */}
      {/* <HeroSection {...homeObjTwo} /> */}
      {/* <HeroSection {...homeObjFour} /> */}
    </>
  );
}

export default Home;