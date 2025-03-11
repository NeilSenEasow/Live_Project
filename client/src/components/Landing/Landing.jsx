import React from "react";
import Hero from "./Hero/Hero";
import Puzzles from "./Puzzles/Puzzles";
import Assist from "./Assist/Assist";
import Footer from "./Footer/Footer";
import CareerTestSection from "./CareerTestSection"; // Importing CareerTestSection
import "./Landing.css";
import 'animate.css';

const Landing = () => {
  return (
    <>
      <Hero />
      <CareerTestSection /> {/* Adding CareerTestSection here */}
      <Puzzles />
      <Assist />
      <Footer />
    </>
  );
};
  
export default Landing;