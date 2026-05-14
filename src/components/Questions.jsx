import { useState} from "react"
import ProgressBar from "./ProgressBar";
import QuestionCard from "./QuestionCard";
import AnswerOption from "./AnswerOption";
import "./Quiz.css"; // 

const questions = [{ 
    text:"which planent has the most moons",
    category:"Science",
    answers:["Saturn", "Jupiter", "Uranus", "Neptune"],
    correctIndex:0,
},
{
    text:"What is the capital of France?",
    category:"Geography",
    answers:["London", "Paris", "Berlin", "Madrid"],
    correctIndex:1
},
{
    text:"What is 12 * 12?",
    category:"Math",
    answers:["144", "132", "156", "168"],
    correctIndex:0
},
{
    text:"what is the largest ocean on Earth?",
    category:"Geography",
    answers:["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
    correctIndex:0
},
{
    text:"how many sides does a hexagon have?",
    category:"Math",
    answers:["5", "6", "7", "8"],
    correctIndex:1
},
{
    text:"What gas do plants absorb from the air?",
    category:"Science",
    answers:["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    correctIndex:1
},
{
    text:"Which country is the largest in the world by area?",
    category:"Geography",
    answers:["Russia", "Canada", "United States", "China"],
    correctIndex:0
},
{
    text:"How many hours are in 3 days?",
    category:"Math",
    answers:["24", "48", "72", "96"],
    correctIndex:2
},
{
    text:"What is the fastest land animal?",
    category:"Science",
    answers:["Cheetah", "Lion", "Elephant", "Gazelle"],
    correctIndex:0
},
{
    text:"What is the capital of Japan?",
    category:"Geography",
    answers:["Tokyo", "Osaka", "Kyoto", "Hokkaido"],
    correctIndex:0
},
]


  

function Questions() { 
  const [currentIndex, setCurrentIndex] = useState(0);   
  const [selected, setSelected]         = useState(null);
  const [submitted, setSubmitted]       = useState(false);
  const [score, setScore]               = useState(0);    
  const [finished, setFinished]         = useState(false);

  const question = questions[currentIndex];

  function getStatus(index) {
    if (!submitted) return selected === index ? "selected" : "";
    if (index === question.correctIndex) return "correct";
    if (index === selected) return "wrong";
    return "";
  }

  function handleSubmit() {
    if (selected === question.correctIndex) {
      setScore(score + 1);
    }
    setSubmitted(true);
  }

  function handleNext() {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
      setSelected(null);
      setSubmitted(false);
    } else {
      setFinished(true);
    }
  }

  function handleRestart() {
    setCurrentIndex(0);
    setSelected(null);
    setSubmitted(false);
    setScore(0);
    setFinished(false);
  }
  if (finished) {
    return (
      <div className="quiz-wrapper">
        <h2>Quiz Complete!</h2>
        <p>You scored {score} out of {questions.length}</p>

        {score === 10 && <p>Perfect score! Amazing!</p>}
        {score >= 7 && score < 10 && <p>Great job!</p>}
        {score >= 4 && score < 7 && <p>Good effort!</p>}
        {score < 4 && <p>Keep practicing!</p>}

        <button onClick={handleRestart}>Play again</button>
      </div>
    );
  }

  return (
    <div className="quiz-wrapper">

      <ProgressBar
        current={currentIndex + 1}
        total={questions.length}
      />
      <QuestionCard
        question={question.text}
        category={question.category}
      />
      <div className="answers-list">
        {question.answers.map((answer, i) => (
          <AnswerOption
            key={i}
            letter={"ABCD"[i]}
            text={answer}
            status={getStatus(i)}
            onClick={() => !submitted && setSelected(i)}
          />
        ))}
      </div>

      {selected !== null && !submitted && (
        <button onClick={handleSubmit}>Check answer</button>
      )}

      {submitted && (
        <button onClick={handleNext}>
          {currentIndex + 1 < questions.length ? "Next question" : "See results"}
        </button>
      )}

    </div>
  );
}
export default Questions;

