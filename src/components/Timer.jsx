import React, { useEffect, useRef, useState } from 'react';

export const Timer = ({ restart, currentPlayer }) => {
  const [timerWhite, setTimerWhite] = useState(300);
  const [timerBlack, setTimerBlack] = useState(300);
  const timer = useRef(null);

  useEffect(() => {
    timerStart();
  }, [currentPlayer]);

  function timerStart() {
    if (timer.current) {
      clearInterval(timer.current);
    }

    const callback = currentPlayer?.color === 'white' ? decrementWhiteTimer : decrementBlackTimer;
    timer.current = setInterval(callback, 1000);
  }

  function restartGame() {
    setTimerWhite(300);
    setTimerBlack(300);
    restart();
  }

  function decrementWhiteTimer() {
    setTimerWhite((prev) => prev - 1);
  }

  function decrementBlackTimer() {
    setTimerBlack((prev) => prev - 1);
  }

  return (
    <div>
      <button onClick={restartGame}>Начать заново</button>
      <h2>Черные: {timerBlack}</h2>
      <h2>Белые: {timerWhite}</h2>
    </div>
  );
};
