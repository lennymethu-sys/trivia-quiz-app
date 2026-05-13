// useTimer — Member 3 working on this
import { useState, useEffect, useCallback } from "react";

function useTimer(seconds, onTimeUp) {
  const [timeLeft, setTimeLeft] = useState(seconds);

  const reset = useCallback(() => {
    setTimeLeft(seconds);
  }, [seconds]);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp();
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  return { timeLeft, reset };
}

export default useTimer;