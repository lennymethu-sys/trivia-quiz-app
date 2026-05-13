import useTimer from "../hooks/useTimer";

function TimerDisplay({ seconds, onTimeUp }) {
  const timeLeft = useTimer(seconds, onTimeUp);

  return (
    <div>
      <p>Time left: {timeLeft}s</p>
    </div>
  );
}

export default TimerDisplay;