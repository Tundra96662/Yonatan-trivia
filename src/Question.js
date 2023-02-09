import AnswerChoices from "./AnswerChoices";

function Question(props) {
  return (
    <div>
      <h1>{props.text}</h1>
      <AnswerChoices text={props.answer} />
      <h1></h1>
    </div>
  );
}

export default Question;
