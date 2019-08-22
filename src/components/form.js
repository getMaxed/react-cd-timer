import React, { useState } from 'react';

export default function Form({ setTime }) {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(null);

  const handleInputChange = e => setInputValue(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();

    const minutes = parseInt(inputValue);

    // validation
    if (minutes > 5940) {
      return setError(`maximum time - 99 hours (5940 minutes)`);
    }
    setTime(minutes);
  };

  return (
    <>
      <h2>Please enter the countdown duration in minutes</h2>
      <form onSubmit={e => handleSubmit(e)}>
        <input
          type="number"
          value={inputValue}
          onChange={e => handleInputChange(e)}
        />
        <input type="submit" value="Go !" />
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </>
  );
}
