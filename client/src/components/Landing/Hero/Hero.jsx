import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Hero.css"; // Keep the Hero.css for specific styles
import 'animate.css';

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Shhare your career aspirations, and I'll guide you on the most efficient path to success—no guesswork, no detours. Let's turn your goals into reality.";
  let index = 0;

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50); // Adjust typing speed here

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title animate__animated animate__fadeInDown">
          Hi I'm ProPilot
        </h1>
        <h2 className="hero-subtitle animate__animated animate__fadeInDown">Your Personal AI✨ Career Assistant</h2>
        <div className="hero-description">
          <span className="typing-animation">{text}</span>
          <span className="cursor"></span>
        </div>
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