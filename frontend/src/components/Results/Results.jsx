import React from "react";
import { useLocation } from "react-router-dom";

// Define a mapping of questions and options to career fields
const careerSuggestions = {
  "Critical Thinking": {
    "Analyze and break down the problem": "Analyst",
    "Seek external help": "Consultant",
    "Ignore the problem": "Not recommended",
    "Other": "Generalist",
  },
  "Creative Thinking": {
    "Brainstorm new ideas": "Creative Director",
    "Collaborate with others": "Project Manager",
    "Use existing solutions": "Operations Manager",
    "Take no action": "Not recommended",
  },
  "Aptitude": {
    "30": "Mathematician",
    "28": "Data Scientist",
    "32": "Engineer",
    "24": "Statistician",
  },
  "Caliber": {
    "Prioritize tasks": "Manager",
    "Delegate responsibilities": "Team Leader",
    "Work overtime": "Dedicated Employee",
    "Take frequent breaks": "Work-Life Balance Advocate",
  },
  "General Personality Insights": {
    "Adaptability": "Entrepreneur",
    "Leadership": "Executive",
    "Communication": "Public Relations",
    "Problem-solving": "Consultant",
  },
};

const Results = () => {
  const location = useLocation();
  const { points, selectedOptions } = location.state || { points: 0, selectedOptions: [] }; // Get points and selected options from state

  // Analyze selected options to suggest a career field
  const suggestedFields = selectedOptions.map(option => {
    for (const category in careerSuggestions) {
      for (const [key, value] of Object.entries(careerSuggestions[category])) {
        if (key === option) {
          return value;
        }
      }
    }
    return "Undetermined"; // Default if no match found
  });

  // Get unique suggestions
  const uniqueSuggestions = [...new Set(suggestedFields)];

  return (
    <div className="results-container">
      {/* <h2>Your Results</h2>
      <p>You scored: {points} points</p> */}
      <h3>Suggested Career Fields:</h3>
      <ul>
        {uniqueSuggestions.map((field, index) => (
          <li key={index}>{field}</li>
        ))}
      </ul>
      {/* You can add more details or styling here */}
    </div>
  );
};

export default Results; 