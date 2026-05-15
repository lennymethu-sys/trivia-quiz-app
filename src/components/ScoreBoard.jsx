import { useNavigate } from "react-router-dom"
import ProgressBar from "./ProgressBar"

function ScoreBoard({ score, questions, onRestart }) {
  const navigate = useNavigate()
  const totalQuestions = questions.length
  const percentageScore = Math.round((score / totalQuestions) * 100)

  function handleRestart() {
    onRestart()
    navigate("/")
  }

  return (
    <div className="scoreboard">
      <h2>Quiz Completed!</h2>
      <div className="score-display">
        <h3>You scored {score} out of {totalQuestions}!</h3>
        <p>{percentageScore}%</p>
      </div>
      <ProgressBar current={score} total={totalQuestions} />
      {percentageScore === 100 && <p>🏆 Perfect score! Amazing!</p>}
      {percentageScore >= 70 && percentageScore < 100 && <p>🎉 Great job!</p>}
      {percentageScore >= 40 && percentageScore < 70 && <p>👍 Good effort!</p>}
      {percentageScore < 40 && <p>💪 Keep practicing!</p>}
      <button onClick={handleRestart}>Restart Quiz</button>
    </div>
  )
}

export default ScoreBoard