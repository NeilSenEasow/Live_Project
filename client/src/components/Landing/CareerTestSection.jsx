import React from "react";
import "./CareerTestSection.css"; // CSS for styling

const CareerTestSection = () => {
  return (
    <section className="career-test-section">
      <div className="content">
        <h2 className="section-title">
          Discover your top career matches using <br />
          <span className="highlight">CareerExplorer’s cutting-edge science</span>
        </h2>

        <div className="features-container">
          <div className="feature">
            <div className="feature-icon">
              <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="56" height="56" rx="28" fill="url(#paint0_radial)"/>
                <path opacity="0.25" d="M10 33.5L28 21L46 33.5L28 46L10 33.5Z" fill="#462C67"/>
                <path opacity="0.4" d="M28 40.3913L10.8766 28.5L28 16.6087L45.1234 28.5L28 40.3913Z" fill="#462C67" stroke="#462C67"/>
                <path d="M10 23.5L28 11L46 23.5L28 36L10 23.5Z" fill="#462C67"/>
                <defs>
                  <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(28 28) rotate(90) scale(35.5)">
                    <stop stop-color="#E5CDE4"/>
                    <stop offset="1" stop-color="#E0CDE6" stop-opacity="0"/>
                  </radialGradient>
                </defs>
              </svg>
            </div>
            <div className="feature-text">
              <h3>Rapidly-advancing platform</h3>
              <p>
                Our machine learning models train on millions of data points,
                constantly improving the reliability and validity of our career test results.
              </p>
            </div>
          </div>

          <div className="feature">
            <div className="feature-icon">
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="56" height="56" rx="28" fill="url(#paint0_radial)"/>
              <circle cx="35" cy="35" r="9" fill="#462C67"/>
              <circle cx="21" cy="21" r="9" fill="#462C67"/>
              <circle opacity="0.4" cx="35" cy="21" r="9" fill="#462C67"/>
              <circle opacity="0.4" cx="21" cy="35" r="9" fill="#462C67"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M26.6534 28.001C25.1077 29.2518 23.1394 30.001 20.9961 30.001C18.8528 30.001 16.8845 29.2518 15.3387 28.001C16.8845 26.7502 18.8528 26.001 20.9961 26.001C23.1394 26.001 25.1077 26.7502 26.6534 28.001Z" fill="#715786"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M40.6534 28.001C39.1077 29.2518 37.1394 30.001 34.9961 30.001C32.8528 30.001 30.8845 29.2518 29.3387 28.001C30.8845 26.7502 32.8528 26.001 34.9961 26.001C37.1394 26.001 39.1077 26.7502 40.6534 28.001Z" fill="#715786"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M28 15.3504C29.2508 16.8961 30 18.8644 30 21.0077C30 23.151 29.2508 25.1193 28 26.665C26.7492 25.1193 26 23.151 26 21.0077C26 18.8644 26.7492 16.8961 28 15.3504Z" fill="#715786"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M28 29.3504C29.2508 30.8961 30 32.8644 30 35.0077C30 37.151 29.2508 39.1193 28 40.665C26.7492 39.1193 26 37.151 26 35.0077C26 32.8644 26.7492 30.8961 28 29.3504Z" fill="#715786"/>
              <defs>
              <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(28 28) rotate(90) scale(35.5)">
              <stop stop-color="#E0CDE5"/>
              <stop offset="1" stop-color="#E0CDE6" stop-opacity="0.05"/>
              </radialGradient>
              </defs>
              </svg>

            </div>
            <div className="feature-text">
              <h3>Comprehensive model</h3>
              <p>
                We provide career matches based on your interests, goals, history,
                workplace preferences, and personality.
              </p>
            </div>
          </div>

          <div className="feature">
            <div className="feature-icon">
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="56" height="56" rx="28" fill="url(#paint0_radial)"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M45.7186 28.5006L34.2895 38.0011L22.8604 28.5006L34.2895 19L45.7186 28.5006Z" fill="#A68EAC"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M34.0366 28.5019L22.6089 38.0013L11.1781 28.4994L22.6058 19L34.0366 28.5019Z" fill="#462C67"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M28.4848 33.1313L34.0515 28.5039L28.4847 23.8765L22.918 28.5038L28.4848 33.1313Z" fill="#715786"/>
              <defs>
              <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(28 28) rotate(90) scale(35.5)">
              <stop stop-color="#E0CDE5"/>
              <stop offset="1" stop-color="#E0CDE6" stop-opacity="0"/>
              </radialGradient>
              </defs>
            </svg>

            </div>
            <div className="feature-text">
              <h3>Intelligent enhancements</h3>
              <p>
                We continuously tweak our algorithms and update our datasets to provide
                industry-leading match accuracy.
              </p>
            </div>
          </div>

          <div className="feature">
            <div className="feature-icon">
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="56" height="56" rx="28" fill="url(#paint0_radial)"/>
              <circle opacity="0.85" cx="19" cy="37" r="9" fill="#462C67"/>
              <circle opacity="0.5" cx="28" cy="28" r="9" fill="#A68EAC"/>
              <circle opacity="0.5" cx="37" cy="19" r="9" fill="white"/>
              <defs>
              <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(28 28) rotate(90) scale(35.5)">
              <stop stop-color="#E0CDE6"/>
              <stop offset="1" stop-color="#E0CDE6" stop-opacity="0.05"/>
              </radialGradient>
              </defs>
            </svg>

            </div>
            <div className="feature-text">
              <h3>Up-to-date information</h3>
              <p>
                We update our database of 1500+ career and degree profiles constantly
                to reflect the ever-changing world of work.
              </p>
            </div>
          </div>
        </div>

        <button className="cta-button">Start the career test</button>
      </div>
    </section>
  );
};

export default CareerTestSection;
