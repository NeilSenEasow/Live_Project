import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./Test.css";

const Test = () => {
  const [questions, setQuestions] = useState([]);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [points, setPoints] = useState(0); // State to track points
  const [selectedOptions, setSelectedOptions] = useState([]); // State to track selected options
  const navigate = useNavigate(); // Initialize useNavigate

  // Fetch questions on component mount
  useEffect(() => {
    fetch("http://127.0.0.1:5000/questions")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch questions");
          console.log("Failed to fetch questions");
        }
        return response.json();
      })
      .then((data) => setQuestions(data))
      .catch((error) => console.error(error));
  }, []);

  const handleNextQuestion = () => {
    if (!questions.length) return;

    const currentCategory = questions[currentCategoryIndex];
    const nextQuestionIndex = currentQuestionIndex + 1;

    // Check if there are more questions in the current category
    if (nextQuestionIndex < currentCategory.questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
      setSelectedOption(null); // Reset selected option
    } else if (currentCategoryIndex + 1 < questions.length) {
      // Move to the next category
      setCurrentCategoryIndex(currentCategoryIndex + 1);
      setCurrentQuestionIndex(0);
      setSelectedOption(null); // Reset selected option
    } else {
      // All questions complete, navigate to results
      navigate('/results', { state: { points, selectedOptions }}); // Use navigate to go to results
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    // Check if the selected option is correct
    if (option === currentQuestion.correctAnswer) {
      setPoints(points + 1); // Increment points if correct
    }
    // Store selected options
    setSelectedOptions(prev => [...prev, option]); // Add selected option to the array
    handleNextQuestion(); // Automatically go to the next question
  };

  if (!questions.length) {
    return <div className="test-container">Loading questions...</div>;
  }

  const currentCategory = questions[currentCategoryIndex];
  const currentQuestion = currentCategory.questions[currentQuestionIndex];

  return (
    <div className="test-container">
      <h2 className="test-category">{currentCategory.category}</h2>
      <p className="test-question" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
        {currentQuestion.text}
      </p>

      <div className="options-container" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${selectedOption === option ? "selected" : ""}`}
            onClick={() => handleOptionSelect(option)} // Navigate to next question on option select
            style={{ width: "100%", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}
          >
            {option}
          </button>
        ))}
      </div>

      <button
        onClick={handleNextQuestion}
        className="next-button"
        style={{ marginTop: "20px" }}
      >
        Skip Question
      </button>
    </div>
  );
};

export default Test;
