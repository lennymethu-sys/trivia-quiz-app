function AnswerReview(props) {
  
  //destructuring the props
  const isCorrect = props.isCorrect;
  const correctAnswer = props.correctAnswer;
  const onNext = props.onNext;

  return(
<div>
  <div style={{ border: '2px solid black', padding: '20px' , marginTop: '10px' }}></div>

<div>
{/* When user gets the answer right or wrong */}
{isCorrect ? (
  <div>
    <h2 style={{ color: 'green' }}>Correct! Good job!</h2>
  </div>
) : (
  <div>
    <h2 style={{ color: 'red' }}>Incorrect! The correct answer is: <strong>{correctAnswer}</strong></h2>
  </div>
)}

{/* Next button to move to the next question */}
  <div>
    <button onClick={onNext} style={{marginTop: '10px',padding: '10px'}}>Next Question</button>
  </div>
</div>
</div>
  );
}


export default AnswerReview