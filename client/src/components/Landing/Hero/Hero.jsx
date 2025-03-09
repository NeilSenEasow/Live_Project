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
    <div className="relative flex flex-col items-center justify-center text-center h-screen w-full bg-neutral-950 antialiased">
      {/* Hero Content */}
      <div className="max-w-2xl mx-auto p-4 relative z-10">
        <h1 className="hero-title animate__animated animate__fadeInDown bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-bold text-lg md:text-7xl">
          Land your <span className="highlight">dream job.</span>
        </h1>
        <h2 className="hero-subtitle animate__animated animate__fadeInDown text-neutral-400">
          Without the stress.
        </h2>
        <div className="hero-description text-neutral-500 max-w-lg mx-auto my-2 text-sm">
          <span className="typing-animation">{text}</span>
          <span className="cursor"></span>
        </div>

        {/* Features Section */}
        <div className="features mb-10 mt-5 p-5 bg-[#f0f4ff] rounded-lg shadow-lg">
          {[
            "AI Resume Builder",
            "Automated Job Tracking",
            "Optimize your LinkedIn Profile",
            "And Much More...",
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

        {/* Call to Action */}
        <Link to="/sign-up" className="hero-button">
          Sign Up for Free <span className="arrow">→</span>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
