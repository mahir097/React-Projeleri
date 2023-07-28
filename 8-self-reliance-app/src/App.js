import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [result, setResult] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const finalScore = Math.round((score / questions.length) * 100);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setResult(true);
    }
  };

  const handleReset = () => {
    setResult(false);
    setScore(0);
    setCurrentQuestion(0);
  };
  return (
    <div className="app-container">
      <h1 className="app-header">Self Reliance App</h1>
      {result ? (
        <div className="result-container">
          <h2 className="result-title">Result</h2>
          <h3>Final Score: {finalScore}%</h3>
          <p className="result-text">
            {finalScore > 50
              ? "Your self-confidence is strong"
              : "We must strengthen your self-confidence"}
          </p>
          <button className="result-button" onClick={() => handleReset()}>
            Restart Test
          </button>
        </div>
      ) : (
        <div className="question-container">
          <h2 className="score">Current Score : {score}</h2>
          <h2>
            Question {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question">{questions[currentQuestion].text}</h3>
          <ul className="options-list">
            {questions[currentQuestion].options.map((option) => (
              <li
                key={option.id}
                className="option-item"
                onClick={() => handleAnswerOptionClick(option.isCorrect)}
              >
                {option.text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default App;

const questions = [
  {
    text: "I see myself as a successful person.",
    options: [
      { id: 0, text: "never", isCorrect: false },
      { id: 1, text: "rarely", isCorrect: false },
      { id: 3, text: "often", isCorrect: true }
    ]
  },
  {
    text: "I can control my excitement around other people.",
    options: [
      { id: 0, text: "never", isCorrect: false },
      { id: 1, text: "rarely", isCorrect: false },
      { id: 3, text: "often", isCorrect: true }
    ]
  },
  {
    text: "I can deal with difficulties in life.",
    options: [
      { id: 0, text: "never", isCorrect: false },
      { id: 1, text: "rarely", isCorrect: false },
      { id: 3, text: "often", isCorrect: true }
    ]
  },
  {
    text: "I do not hesitate to participate in social events.",
    options: [
      { id: 0, text: "never", isCorrect: false },
      { id: 1, text: "rarely", isCorrect: false },
      { id: 3, text: "often", isCorrect: true }
    ]
  },
  {
    text: "I can express myself comfortably.",
    options: [
      { id: 0, text: "never", isCorrect: false },
      { id: 1, text: "rarely", isCorrect: false },
      { id: 3, text: "often", isCorrect: true }
    ]
  },
  {
    text: "I do not hesitate to take responsibility.",
    options: [
      { id: 0, text: "never", isCorrect: false },
      { id: 1, text: "rarely", isCorrect: false },
      { id: 3, text: "often", isCorrect: true }
    ]
  },
  {
    text: "I love myself.",
    options: [
      { id: 0, text: "never", isCorrect: false },
      { id: 1, text: "rarely", isCorrect: false },
      { id: 3, text: "often", isCorrect: true }
    ]
  }
];
