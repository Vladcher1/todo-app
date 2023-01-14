import { useState, useEffect } from "react";

const Timer = ({ running }: any) => {
  const [time, setTime] = useState(0);

  const tick = () => {
    if (running) {
      setTime((prevTime) => ++prevTime);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => tick(), 1000);
    return () => clearInterval(interval);
  }, [running, time]);

  const stopwatch = new Date(0, 0, 0, 0, 0, time);
  return (
    <div>
      <span>{stopwatch.getMinutes()}:</span>
      <span>{stopwatch.getSeconds()}</span>
    </div>
  );
};

export default Timer;
