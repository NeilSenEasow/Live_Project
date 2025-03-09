import React from "react";
import "./Assist.css"; // Import the CSS for this component
import 'animate.css'; // Import Animate.css for animations

const Assist = () => {
  return (
    <section className="assist animate__animated animate__fadeIn" style={{ width: '100%' }}>
      <div className="assist-content">
        <h2 className="assist-title">How Do I Help You?</h2>
        <ul className="assist-list">
          <li>Lost in Career Directions? I'm your compass.</li>
          <li>Overwhelmed by Information? I cut through the clutter.</li>
          <li>Doubting Your Path? I bring clarity and confidence.</li>
          <li>Personalized Career Plans: Tailored strategies to achieve your goals.</li>
          <li>Skill Development: Resources and guidance to enhance your skills.</li>
          <li>Networking Opportunities: Connect with industry professionals.</li>
        </ul>
        <button className="assist-button">Get Your Personal Plan</button>
      </div>
    </section>
  );
};

export default Assist; 