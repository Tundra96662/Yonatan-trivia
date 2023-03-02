import React, { useState } from "react";
import "./App.css";
import data from "./sample_data.json";
import Question from "/src/Question.js";

import NextQuestion from "/src/NextQuestion.js";
import AnswerChoice from "./AnswerChoice.js";

let currentQuestionNumber = 0;

function App() {
  return (
    <div className="app">
      <h1 className="title">Trivia!</h1>
      <Question text={data[currentQuestionNumber].question.text} />
      <AnswerChoice choices={data[currentQuestionNumber]} />
      <NextQuestion
        choices={data[0].question.choices}
        currentQuestionNumber={currentQuestionNumber}
      />
    </div>
  );
}

export default App;
