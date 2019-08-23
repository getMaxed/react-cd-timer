import React, { useState } from 'react';
import Form from './components/form';
import Timer from './components/timer';

export default function App() {
  const [time, setTime] = useState(null);
  const [error, setError] = useState(null);

  const setTimer = time => setTime(time);
  const resetTimer = () => setTime(null);
  const setErrorMsg = msg => setError(msg);

  return (
    <>
      {!time ? (
        <Form setTimer={setTimer} error={error} setErrorMsg={setErrorMsg} />
      ) : (
        <Timer time={time} resetTimer={resetTimer} />
      )}
    </>
  );
}
