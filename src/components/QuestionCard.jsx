

function QuestionCard({question, category}) {
  return (
    <div className="question-card">
      <span className="qustion-badge">{category}</span>
      <p className="question-text">{question}</p>
    </div>
  )
}
  

export default QuestionCard