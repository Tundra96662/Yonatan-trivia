import React, { useState } from "react";
import "./App.css";
import data from "./sample_data.json";
import Question from "/src/Question.js";
import NextQuestion from "/src/NextQuestion.js";

function App(question) {
  let currentQuestionNumber = 0;

  return (
    <div className="app">
      <h1 className="title">Trivia!</h1>
      <Question text={data[0].question.text} />
      <NextQuestion text={data[0].question.text} />
    </div>
  );
}

export default App;
