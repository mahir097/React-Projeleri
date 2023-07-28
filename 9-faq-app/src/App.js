import React from "react";
import "./styles.css";

const App = () => {
  return (
    <div className="app-container">
      <h2 className="app-heading">FAQ APP</h2>
      <Question />
    </div>
  );
};

const Question = () => {
  return (
    <div className="question-container">
      {questions.map((question) => (
        <SingleQuestion key={question.id} question={question} />
      ))}
    </div>
  );
};

const SingleQuestion = ({ question }) => {
  const { title, info } = question;
  const [showInfo, setShowInfo] = React.useState(false);

  const handleQuestionClick = () => {
    setShowInfo(!showInfo);
  };

  return (
    <div className="single-question">
      <h3 className="question-title" onClick={handleQuestionClick}>
        {title}
      </h3>
      <button className="question-btn" onClick={handleQuestionClick}>
        {showInfo ? "-" : "+"}
      </button>

      {showInfo && <div className="question-info">{info}</div>}
    </div>
  );
};

export default App;

const questions = [
  {
    id: 1,
    title: "Question-1",
    info:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur."
  },
  {
    id: 2,
    title: "Question-2",
    info:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur."
  },
  {
    id: 3,
    title: "Question-3",
    info:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur."
  },
  {
    id: 4,
    title: "Question-4",
    info:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur."
  }
];
