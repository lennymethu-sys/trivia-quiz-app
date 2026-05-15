import { useState, useEffect } from "react"

function useTimer(seconds, onTimeUp) {
  const [timeLeft, setTimeLeft] = useState(seconds)

  useEffect(() => {
    setTimeLeft(seconds)
  }, [seconds])

  useEffect(() => {
    if (timeLeft === 0) {
      if (onTimeUp) onTimeUp()
      return
    }
    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [timeLeft])

  return { timeLeft }
}

export default useTimer