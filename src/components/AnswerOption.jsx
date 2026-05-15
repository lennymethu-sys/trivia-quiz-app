function AnswerOption({ answer, selected, correct, onSelect, submitted }) {
  const isSelected = selected === answer
  const isCorrect = correct === answer

  let className = "answer"

  if (submitted) {
    if (isCorrect) className += " correct"
    else if (isSelected) className += " wrong"
  } else if (isSelected) {
    className += " selected"
  }

  return (
    <button
      className={className}
      onClick={() => onSelect(answer)}
      dangerouslySetInnerHTML={{ __html: answer }}
    />
  )
}

export default AnswerOption