import React from "react";
import Hero from "./Hero/Hero";
import Puzzles from "./Puzzles/Puzzles";
import Assist from "./Assist";
import "./Landing.css";
import 'animate.css';

const Landing = () => {
  return (
    <>
      <Hero />
      <Puzzles />
      <Assist />
    </>
  );
};

export default Landing; 