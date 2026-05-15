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
    setSubmitted(true)

    // wait 1 second then move
    setTimeout(() => {
      onAnswer(isCorrect)
      handleNext()
    }, 1000)
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
        seconds={60}   // 👈 your timer now 60 seconds
        onTimeUp={handleNext}
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
    </div>
  )
}

export default QuestionCard