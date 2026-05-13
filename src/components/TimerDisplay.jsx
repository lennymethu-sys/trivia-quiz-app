function TimerDisplay({ seconds, onTimeUp }) {
  const { timeLeft } = useTimer(seconds, onTimeUp); // ← destructure now

  return (
    <div>
      <p>Time left: {timeLeft}s</p>
    </div>
  );
}