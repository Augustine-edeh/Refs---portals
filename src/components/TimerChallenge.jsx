import { useState, useRef } from "react";
// let timer;

const TimerChallenge = ({ title, targetTime }) => {
  const timer = useRef();
  const [timerStarted, setTimerStarted] = useState(false);

  const [timerExpired, setTimerExpired] = useState(false);

  const handleStart = () => {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
    setTimerStarted(true);
  };

  const handleStop = () => {
    clearTimeout(timer.current);
  };

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You lost</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p className={timerExpired ? "active" : undefined}>
        <button onClick={timerStarted ? handleStop : handleStart}>
          {timerStarted ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p>{timerStarted ? "Time is running..." : "Timer inactive"}</p>
    </section>
  );
};

export default TimerChallenge;
