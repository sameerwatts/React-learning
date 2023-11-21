import React, { useEffect, useState } from 'react';

const TIMER = 3000

const Progress = ({timer}) => {
    const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTimeState) => {
        return prevTimeState - 10;
      });
    }, 10);

    return () => {
      clearInterval(interval);
    }
  }, []);

    return (
        <progress value={remainingTime} max={timer} min={0} />
    );
};

export default Progress;