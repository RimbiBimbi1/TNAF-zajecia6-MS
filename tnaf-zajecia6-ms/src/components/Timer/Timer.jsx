import React, { useEffect } from 'react';

export default function Timer({ initialState }) {
  const [value, setValue] = React.useState(initialState);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue(prevState => prevState + 1);
      console.log('cyk');
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h2>Counting: {value}</h2>
    </div>
  );
}
