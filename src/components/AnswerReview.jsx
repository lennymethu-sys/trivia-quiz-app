function AnswerReview(props) {
  
  //destructuring the props
  const isCorrect = props.isCorrect;
  const correctAnswer = props.correctAnswer;
  const onNext = props.onNext;

  return(
<div>
  <div style={{   }}></div>

<div>
{/* When user gets the answer right or wrong */}
{isCorrect ? (
  <div>
    <h2>Correct! Good job!</h2>
  </div>
) : (
  <div>
    <h2>Incorrect! The correct answer is: {correctAnswer}</h2>
  </div>
)}

{/* Next button to move to the next question */}
  <div>
    <button onClick={onNext}>Next Question</button>
  </div>
</div>
</div>
  );
}


export default AnswerReview