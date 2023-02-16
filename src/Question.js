import AnswerChoices from "./AnswerChoices";

function Question(question) {
  return (
    <div>
      <h1>{question.text}</h1>

      <h1>{AnswerChoices.answer}</h1>
    </div>
  );
}

export default Question;
