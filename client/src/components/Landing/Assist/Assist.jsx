import React from "react";
import "./Assist.css"; // Import the CSS for this component
import 'animate.css'; // Import Animate.css for animations

const Assist = () => {
  return (
    <section className="assist animate__animated animate__fadeIn">
      <div className="assist-content">
        <h2 className="assist-title">How Do I Help You?</h2>
        <ul className="assist-list">
          <li>🔍 Lost in Career Directions? I'm your compass.</li>
          <li>⚖️ Overwhelmed by Information? I cut through the clutter.</li>
          <li>❓ Doubting Your Path? I bring clarity and confidence.</li>
        </ul>
        <button className="assist-button">Get Your Personal Plan</button>
      </div>
    </section>
  );
};

export default Assist; 