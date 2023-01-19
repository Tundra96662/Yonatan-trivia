import React, { useState } from "react";
import "./App.css";
import data from "./sample_data.json";
import Question from "/src/Question.js";

function App(question) {
  let currentQuestionNumber = 0;

  return (
    <div className="app">
      <h1 className="title">Trivia!</h1>
      <Question />
      <h1>{question.text}</h1>
    </div>
  );
}

export default App;
