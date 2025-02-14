import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Puzzles.css";

const Puzzles = () => {
  const [text, setText] = useState("");
  const fullText = "Get Started";
  let index = 0;

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100); // Typing speed for the button text

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="puzzles">
      <div className="puzzles-content">
        <div className="puzzles-text">
          <h2 className="puzzles-title animate__animated animate__fadeIn">Solve Your Career Puzzles</h2>
          <ul className="puzzles-list animate__animated animate__fadeInUp">
            <li>🔍 Lost in Career Directions? I'm your compass.</li>
            <li>⚖️ Overwhelmed by Information? I cut through the clutter.</li>
            <li>❓ Doubting Your Path? I bring clarity and confidence.</li>
          </ul>
          <Link to="/test" className="puzzles-button">
            {text} <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Puzzles; 