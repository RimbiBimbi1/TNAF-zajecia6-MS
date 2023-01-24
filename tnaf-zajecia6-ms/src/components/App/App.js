import Timer from '../Timer/Timer';
import React from 'react';

export default function App() {
  const [showTimer, setShowTimer] = React.useState(false);

  const handleClick = () => setShowTimer(!showTimer);

  return (
    <>
      <button className={'button'} onClick={handleClick}>
        {showTimer ? 'Hide Timer' : 'Show Timer'}
      </button>
      {showTimer && <Timer initialState={0} />}
    </>
  );
}
