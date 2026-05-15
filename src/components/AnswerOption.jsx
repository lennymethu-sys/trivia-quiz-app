function AnswerOption({ answer, selected, correct, onSelect, submitted }) {

  function getColor() {
    if (!submitted) return selected === answer ? "selected" : ""
    if (answer === correct) return "correct"
    if (answer === selected) return "wrong"
    return ""
  }

  return (
    <button
      className={`answer-option ${getColor()}`}
      onClick={() => onSelect(answer)}
      disabled={submitted}
      dangerouslySetInnerHTML={{ __html: answer }}
    />
  )
}

export default AnswerOption