import React from "react";
import Hero from "./Hero/Hero";
import Puzzles from "./Puzzles/Puzzles";
import Assist from "./Assist/Assist";
import Footer from "./Footer/Footer";
import "./Landing.css";
import 'animate.css';

const Landing = () => {
  return (
    <>
      <Hero />
      <Puzzles />
      <Assist />
      <Footer />
    </>
  );
};
  
export default Landing;