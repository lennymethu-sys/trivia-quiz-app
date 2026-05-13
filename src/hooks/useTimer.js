// useTimer — Member 3 working on this
import { useState, useEffect } from "react";

function useTimer(seconds, onTimeUp) {
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp();
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval); // cleanup!
  }, [timeLeft]);

  return timeLeft;
}

export default useTimer;