import AnswerChoices from "./AnswerChoices";

function Question(question) {
  return (
    <div>
      <h1>{question.text}</h1>

      <AnswerChoices question="answer choices go here" />
    </div>
  );
}

export default Question;
