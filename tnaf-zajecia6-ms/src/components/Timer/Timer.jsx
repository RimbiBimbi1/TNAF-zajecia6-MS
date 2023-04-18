import React, { useEffect } from 'react';
import './TimerStyles.css';

import img from '../../imgs/oogway.jpg';

export default function Timer({ initialState }) {
  const [value, setValue] = React.useState(initialState);
  const [running, setRunning] = React.useState(false);

  const timerText = () => {
    return value < 0 ? <img src={img} alt={'oogway'} /> : 'Time left: ' + value + 's';
  };

  const handleReset = () => {
    setValue(initialState);
    setRunning(false);
  };

  const handleStartStop = () => {
    setRunning(!running);
  };

  useEffect(() => {
    const interval = running
      ? setInterval(() => {
          setValue(prevState => prevState - 1);
          console.log('cyk');
        }, 1000)
      : null;

    if (value < 0) setRunning(false);

    return () => {
      clearInterval(interval);
    };
  }, [value, running]);

  return (
    <div className={'flexBox'}>
      <h2>{timerText()}</h2>
      <button className={'button'} onClick={handleStartStop}>
        {running ? 'Stop' : 'Start'}
      </button>
      <button className={'button'} onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
