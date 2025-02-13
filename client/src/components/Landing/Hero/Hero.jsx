import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css"; // Keep the Hero.css for specific styles
import 'animate.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content animate__animated animate__backInDown">
        <h1 className="hero-title">
          Hi I'm ProPilot
        </h1>
        <h2>Your Personal AI✨ Career Assistant</h2>
        <p className="hero-description">
          Tell me your career goal, and I'll help you achieve it - the fastest route, no detours.
        </p>
        <Link to="/test" className="hero-button">
          Get Started <span className="arrow">→</span>
        </Link>
      </div>
      {/* Uncomment if you want to include the image */}
      {/* <img src="https://unsplash.com/photos/a-row-of-light-bulbs-with-a-mans-head-in-the-middle-bPPGBNqAorg" alt="Portal Image" className="portal-image" /> */}
    </section>
  );
};

export default Hero; 