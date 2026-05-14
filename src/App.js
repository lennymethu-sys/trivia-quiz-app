import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SetupScreen from "./components/SetupScreen"
import QuestionCard from "./components/QuestionCard"
import ScoreBoard from "./components/ScoreBoard"
import "./App.css"

function App() {
  const [questions, setQuestions] = useState([])
  const [score, setScore] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [gamePhase, setGamePhase] = useState("setup")

  function handleAnswer(isCorrect) {
    if (isCorrect) setScore(score + 1)
    setCurrentIndex(currentIndex + 1)
  }

  function handleRestart() {
    setQuestions([])
    setScore(0)
    setCurrentIndex(0)
    setGamePhase("setup")
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<SetupScreen setQuestions={setQuestions} setGamePhase={setGamePhase} />}
        />
        <Route
          path="/quiz"
          element={
            <QuestionCard
              questions={questions}
              currentIndex={currentIndex}
              onAnswer={handleAnswer}
              score={score}
            />
          }
        />
        <Route
          path="/results"
          element={
            <ScoreBoard
              score={score}
              questions={questions}
              onRestart={handleRestart}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
