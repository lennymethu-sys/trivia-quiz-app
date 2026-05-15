import React from 'react';
import ProgressBar from './ProgressBar';

function ScoreBoard (props) {

  
  const { score, questions, onRestart } = props;

  const totalQuestions = questions.length;;

  //Calculate percentage score without decimals and prevent division by 0
  const percentageScore = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;

  return (
    <div>
      <h2>Quiz Completed!</h2>
      <div>
        {percentageScore}% You scored {score} out of {totalQuestions}!
      </div>
      <ProgressBar percentage={percentageScore} />
      <div>
      <button onClick={onRestart}>Restart Quiz</button>
      </div>
    </div>
    
  );
}

export default ScoreBoard