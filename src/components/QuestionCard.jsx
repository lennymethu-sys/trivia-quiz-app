import { useState } from "react"
import { useNavigate } from "react-router-dom"
import AnswerOption from "./AnswerOption"
import ProgressBar from "./ProgressBar"
import TimerDisplay from "./TimerDisplay"
import ScoreTracker from "./ScoreTracker"

function QuestionCard({ questions, currentIndex, onAnswer, score }) {
  const [selected, setSelected] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const navigate = useNavigate()

  const current = questions[currentIndex]

  const allAnswers = current
    ? [...current.incorrect_answers, current.correct_answer].sort(
        () => Math.random() - 0.5
      )
    : []

  function handleSelect(answer) {
    if (submitted) return
    setSelected(answer)
  }

  function handleSubmit() {
    if (selected === null) return
    const isCorrect = selected === current.correct_answer
    onAnswer(isCorrect)
    setSubmitted(true)
  }

  function handleNext() {
    setSelected(null)
    setSubmitted(false)
    if (currentIndex + 1 >= questions.length) {
      navigate("/results")
    }
  }

  if (!current) return <div>Loading...</div>

  return (
    <div className="question-screen">
      <ScoreTracker score={score} total={questions.length} />
      <TimerDisplay
        seconds={15}
        onTimeUp={handleNext}
        currentIndex={currentIndex}
      />
      <ProgressBar
        current={currentIndex + 1}
        total={questions.length}
      />
      <h2 dangerouslySetInnerHTML={{ __html: current.question }} />
      <div className="answers">
        {allAnswers.map((answer, index) => (
          <AnswerOption
            key={index}
            answer={answer}
            selected={selected}
            correct={current.correct_answer}
            onSelect={handleSelect}
            submitted={submitted}
          />
        ))}
      </div>
      {selected !== null && !submitted && (
        <button onClick={handleSubmit}>Check Answer</button>
      )}
      {submitted && (
        <div>
          <p style={{ 
            color: selected === current.correct_answer ? "green" : "red",
            fontSize: "18px",
            margin: "10px 0"
          }}>
            {selected === current.correct_answer 
              ? "✅ Correct!" 
              : `❌ Wrong! Correct answer: ${current.correct_answer}`}
          </p>
          <button onClick={handleNext}>
            {currentIndex + 1 < questions.length
              ? "Next Question"
              : "See Results"}
          </button>
        </div>
      )}
    </div>
  )
}

export default QuestionCard