function AnswerOption({letter, text, status,onClick}) {
  return (
    <div>
      <button
       className={`answer-option ${status}`}
       onClick={onClick}>
        <span className="answer-letter">{letter}</span>
        <span className="answer-text">{text}</span>
      </button>
    </div>
  
  )
}

export default AnswerOption