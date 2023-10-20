import React, { useState } from 'react';

function Input({ handleSubmitGuess, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          minLength={5}
          maxLength={5}
          disabled={gameStatus !== 'running'}
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          id="guess-input"
          type="text"
          value={tentativeGuess}
          onChange={(event) => {
            setTentativeGuess(event.target.value.toUpperCase());
          }}
        />
      </form>
    </>
  );
}

export default Input;
