import React from "react";
import styles from "../pages/Home.module.css"
import Navbaar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import CTA from "../components/CTA/CTA";
import Testimonials from "../components/Testimonials/Testimonials";
import Featured from "../components/Featured/Featured";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import Destinations from "../components/Destinations/Destinations";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";

function Home() {
  
  return (
    <>
      <Navbaar />
      <Hero/>
      <Services/>
      <Destinations/>
      <HowItWorks/>
      <Featured/>
      <Testimonials/>
      <CTA/>
      <Footer />
    </>
  );
}

export default Home;
