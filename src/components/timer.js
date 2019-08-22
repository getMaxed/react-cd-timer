import React, { useState, useEffect } from 'react';
import moment from 'moment';

export default function Timer({ time: minutes, resetTimer }) {
  const [seconds, setSeconds] = useState(minutes * 60);
  const formattedTime = seconds => {
    // destructure time values returned from moment's duration()
    const { hours: hh, minutes: mm, seconds: ss } = moment.duration(
      seconds,
      'seconds'
    )._data;

    // return a formatted string if there's any time left
    if (hh) {
      return `${hh}:${mm}:${ss}`;
    }
    if (mm) {
      return `${mm}:${ss}`;
    }
    if (ss) {
      return `${ss}`;
    }

    // if no time left: reset a timer
    resetTimer();
  };

  // use side effect (window.setTimeout())
  useEffect(() => {
    // set interval and store interval id
    const interval = setInterval(() => {
      setSeconds(s => s - 1);
    }, 1000);

    // do the effect cleanup when component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <p>{formattedTime(seconds)}</p>
      <button onClick={() => resetTimer()}>Reset Timer</button>
    </>
  );
}
