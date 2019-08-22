import React, { useState } from 'react';
import Form from './components/form';
import Timer from './components/timer';

export default function App() {
  const [time, setTime] = useState(null);
  const resetTimer = () => setTime(null);
  return (
    <>
      {!time ? (
        <Form setTime={setTime} />
      ) : (
        <Timer time={time} resetTimer={resetTimer} />
      )}
    </>
  );
}
