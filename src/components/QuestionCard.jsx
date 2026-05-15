import { useState } from "react";
import useTimer from "../hooks/useTimer";

// Dummy question for testing — remove when Member 1 passes real props
const dummyQuestion = {
  question: "What is the capital of France?",
  correct_answer: "Paris",
  incorrect_answers: ["London", "Berlin", "Madrid"],
  category: "Geography",
  difficulty: "easy",
};

function QuestionCard({ question = dummyQuestion, questionNumber = 1, total = 10, onAnswer }) {
  const [selected, setSelected] = useState(null);

  // Shuffle correct + incorrect answers together once
  const allAnswers = [
    question.correct_answer,
    ...question.incorrect_answers,
  ].sort(() => Math.random() - 0.5);

  // Timer resets when question changes, auto-advances on time up
  const { timeLeft, reset } = useTimer(15, () => {
    handleAnswer(null); // null = ran out of time
  });

  function handleAnswer(answer) {
    if (selected !== null) return; // prevent double-clicking
    setSelected(answer);

    setTimeout(() => {
      onAnswer && onAnswer(answer === question.correct_answer);
      setSelected(null);
      reset();
    }, 1000); // 1 second to show green/red before moving on
  }

  function getButtonStyle(answer) {
    if (selected === null) return "";
    if (answer === question.correct_answer) return "correct";
    if (answer === selected) return "incorrect";
    return "";
  }

  return (
    <div className="question-card">
      {/* Progress */}
      <p className="progress">Question {questionNumber} of {total}</p>

      {/* Timer */}
      <p className={`timer ${timeLeft <= 5 ? "urgent" : ""}`}>
        ⏱ {timeLeft}s
      </p>

      {/* Category + Difficulty */}
      <p className="meta">{question.category} — {question.difficulty}</p>

      {/* Question text */}
      <h2 className="question-text"
        dangerouslySetInnerHTML={{ __html: question.question }}
      />

      {/* Answer buttons */}
      <div className="answers">
        {allAnswers.map((answer) => (
          <button
            key={answer}
            className={`answer-btn ${getButtonStyle(answer)}`}
            onClick={() => handleAnswer(answer)}
            disabled={selected !== null}
            dangerouslySetInnerHTML={{ __html: answer }}
          />
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;