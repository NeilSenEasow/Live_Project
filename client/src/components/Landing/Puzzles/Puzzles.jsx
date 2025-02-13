import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Puzzles.css";
import 'animate.css'; // Import Animate.css for animations
import puzzleImage from '../../../images/PersonalRoadmap.gif'; // Adjust the path as necessary

const Puzzles = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const section = document.querySelector('.puzzles');
    const rect = section.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      setIsVisible(true);
      window.removeEventListener('scroll', handleScroll); // Remove listener after visibility is set
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="puzzles">
      <div className={`puzzles-content ${isVisible ? 'animate__animated animate__bounceIn' : ''}`}>
        <div className="puzzles-layout">
          <div className="puzzles-image-container" style={{ order: -1 }}>
            <img src={puzzleImage} alt="Puzzles" className="puzzles-image" />
          </div>
          <div className="puzzles-text">
            <h2 className="puzzles-title">I Solve Your Career Puzzles</h2>
            <ul className="puzzles-list">
              <li>🔍 Lost in Career Directions? I'm your compass.</li>
              <li>⚖️ Overwhelmed by Information? I cut through the clutter.</li>
              <li>❓ Doubting Your Path? I bring clarity and confidence.</li>
            </ul>
            <Link to="/test" className="puzzles-button">
              Get Started <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Puzzles; 