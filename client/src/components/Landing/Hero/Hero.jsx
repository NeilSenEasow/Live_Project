import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMyContext } from "../../../../src/context/MyContext"; // Adjust the path as necessary
import "./Hero.css";
import "animate.css";
import { BackgroundBeams } from "../../../effects/background-beams";

const Hero = () => {
  const { state, setState } = useMyContext(); // Access context
  const [text, setText] = useState("");
  let indexRef = React.useRef(0); // Fix issue with index resetting

  return (
    <div className="relative flex flex-row items-center justify-between h-screen w-full bg-neutral-950 antialiased">
      {/* Hero Content */}
      <div className="max-w-2xl p-4 relative z-10 text-left">
        <h1 className="hero-title animate__animated animate__fadeInDown">
          The world's best <span className="highlight">career test.</span>
        </h1>
        <h2 className="hero-subtitle animate__animated animate__fadeInDown">
          Using advanced machine learning, psychometrics, and career satisfaction data, we've reimagined what a career test can be.
        </h2>
        <div className="hero-button-container">
          <Link to="/test" className="hero-button">
            Start the career test
          </Link>
        </div>

        {/* Features Section */}
        <div className="features mb-100 mt-5 p-5 bg-[#f0f4ff] rounded-lg shadow-lg">
          {[
            "500 M questions answered",
            "1500+ degrees and careers",
            "140+ personality traits",
          ].map((feature, idx) => (
            <div key={idx} className="feature flex items-center gap-2 text-neutral-600">
              <img
                src="https://cdn.prod.website-files.com/635c591378332f38be25d45f/66d58e393b6ca7c7bf48d3df_Frame%201618873091.svg"
                alt="check"
                className="feature-icon w-5 h-5"
              />
              {feature}
            </div>
          ))}
        </div>
      </div>
      <div className="hidden md:block w-1/2">
        {/* <img
          src="https://plus.unsplash.com/premium_photo-1704546974012-78acde0d4905?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" // Replace with your image URL
          alt="Career Test Illustration"
          className="w-full h-auto"
        /> */}
      </div>
    </div>
  );
};

export default Hero;
