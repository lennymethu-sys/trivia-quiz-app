import { useState } from "react"
import { useNavigate } from "react-router-dom"

function SetupScreen({ setQuestions, setGamePhase }) {
  const [category, setCategory] = useState("9")
  const [difficulty, setDifficulty] = useState("easy")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault() // prevents reloading
    setLoading(true) // change from start quiz
    fetch(
      `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
    )
      .then((res) => res.json()) //api-js
      .then((data) => {
        setQuestions(data.results)
        setLoading(false)
        setGamePhase("quiz")
        navigate("/quiz") // after loading takes me to another screen
      })
  } // fetches 10 quest... from whatever category

  return (
    <div className="setup-screen">
      <h1>Trivia Quiz</h1>
      <form onSubmit={handleSubmit}> // when submitted handle submit

        <label>Category</label> // show current selection
        <select value={category} onChange={(e) => setCategory(e.target.value)}> // on change si ita change tuh based on what u choose
          <option value="9">General Knowledge</option>
          <option value="21">Sports</option>
          <option value="23">History</option>
          <option value="27">Animals</option>
          <option value="18">Computers</option>
          <option value="11">Movies</option>
          <option value="12">Music</option>
        </select>

        <label>Difficulty</label>
        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}> // difficulty ni difficulty tuh
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        <button className="button-primary" type="submit" disabled={loading}>
          {loading ? "Loading..." : "Start Quiz"} // if loading show if not start quiz
        </button>

      </form>
    </div>
  )
}

export default SetupScreen
