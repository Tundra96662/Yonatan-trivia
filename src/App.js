import React, { useState } from "react";
import "./App.css";
import data from "./sample_data.json";
import Question from "./Question.js";

currentQuestionNumber = 0
function App(props) {
  return (
    <div className="app">
      <h1 className="title">Trivia!</h1>
      <Question question = {question.text} />
    </div>
  );
}

export default App;
