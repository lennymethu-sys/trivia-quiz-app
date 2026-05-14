import React from 'react';
import ProgressBar from './ProgressBar';

function ScoreBoard (props) {

  //destructuring the props
  const score = props.score;
  const totalQuestions = props.totalQuestions;
  const onRestart = props.onRestart;

  //Calculate percentage score without decimals
  const percentageScore = Math.round((score / totalQuestions) * 100);

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