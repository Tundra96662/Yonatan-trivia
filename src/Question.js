import AnswerChoice from "./AnswerChoice";

function Question(props) {
  return (
    <div>
      <h1>{props.text}</h1>

      <AnswerChoice answer="Answer choice goes here" />
    </div>
  );
}

export default Question;
