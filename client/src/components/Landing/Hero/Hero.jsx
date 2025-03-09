import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Hero.css"; // Keep the Hero.css for specific styles
import 'animate.css';

const Hero = () => {
  const [text, setText] = useState("");
  // const fullText = "Share your career aspirations, and I'll guide you on the most efficient path to success—no guesswork, no detours. Let's turn your goals into reality.";
  let index = 0;

  // useEffect(() => {
  //   const typingInterval = setInterval(() => {
  //     if (index < fullText.length) {
  //       setText((prev) => prev + fullText.charAt(index));
  //       index++;
  //     } else {
  //       clearInterval(typingInterval);
  //     }
  //   }, 50); // Adjust typing speed here

  //   return () => clearInterval(typingInterval);
  // }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title animate__animated animate__fadeInDown">
          Land your <span className="highlight">dream job.</span>
        </h1>
        <h2 className="hero-subtitle animate__animated animate__fadeInDown">
          Without the stress.
        </h2>
        <div className="hero-description">
          <span className="typing-animation">{text}</span>
          <span className="cursor"></span>
        </div>
        <div className="features mb-10" style={{ backgroundColor: '#f0f4ff', marginTop: '20px' }}>
          <div className="feature">
            <img src="https://cdn.prod.website-files.com/635c591378332f38be25d45f/66d58e393b6ca7c7bf48d3df_Frame%201618873091.svg" alt="check" className="feature-icon" />
            AI Resume Builder
          </div>
          <div className="feature">
            <img src="https://cdn.prod.website-files.com/635c591378332f38be25d45f/66d58e393b6ca7c7bf48d3df_Frame%201618873091.svg" alt="check" className="feature-icon" />
            Automated Job Tracking
          </div>
          <div className="feature">
            <img src="https://cdn.prod.website-files.com/635c591378332f38be25d45f/66d58e393b6ca7c7bf48d3df_Frame%201618873091.svg" alt="check" className="feature-icon" />
            Optimize your LinkedIn Profile
          </div>
          <div className="feature">
            <img src="https://cdn.prod.website-files.com/635c591378332f38be25d45f/66d58e393b6ca7c7bf48d3df_Frame%201618873091.svg" alt="check" className="feature-icon" />
            And Much More...
          </div>
        </div>
        <Link to="/sign-up" className="hero-button">
          Sign Up for Free <span className="arrow">→</span>
        </Link>
        
      </div>
    </section>
  );
};

export default Hero; 