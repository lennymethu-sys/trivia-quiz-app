import { useState } from "react"
import { useNavigate } from "react-router-dom"

function SetupScreen({ setQuestions, setGamePhase }) {
  const [category, setCategory] = useState("9")
  const [difficulty, setDifficulty] = useState("easy")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    fetch(
      `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
    )
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results)
        setLoading(false)
        setGamePhase("quiz")
        navigate("/quiz")
      })
  }

  return (
    <div className="setup-screen">
      <h1>Trivia Quiz</h1>
      <form onSubmit={handleSubmit}>

        <label>Category</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="9">General Knowledge</option>
          <option value="21">Sports</option>
          <option value="23">History</option>
          <option value="27">Animals</option>
          <option value="18">Computers</option>
          <option value="11">Movies</option>
          <option value="12">Music</option>
        </select>

        <label>Difficulty</label>
        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        <button className="button-primary" type="submit" disabled={loading}>
          {loading ? "Loading..." : "Start Quiz"}
        </button>

      </form>
    </div>
  )
}

export default SetupScreen
