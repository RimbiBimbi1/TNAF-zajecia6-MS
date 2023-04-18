import Timer from '../Timer/Timer';
import React from 'react';
import './AppStyles.css';

export default function App() {
  const [showTimer, setShowTimer] = React.useState(false);

  const handleClick = () => setShowTimer(!showTimer);

  return (
    <div className={'appContainer'}>
      <button className={'button'} onClick={handleClick}>
        {showTimer ? 'Hide Timer' : 'Show Timer'}
      </button>
      {showTimer && <Timer initialState={5} />}
      <input></input>
    </div>
  );
}
