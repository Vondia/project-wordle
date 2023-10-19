import React, { useState } from 'react';

function Input({ guess, setGuess }) {
const [newGuess, setNewGuess] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
   setGuess((prevGuesses) => [...prevGuesses, { guess: newGuess, id: crypto.randomUUID() }])
   setNewGuess('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="guess-input-wrapper">
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          required
          minLength={5}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          title="5 letter word"
          id="guess-input"
          type="text"
          value={newGuess}
          onChange={(event) => {
            setNewGuess(event.target.value.toUpperCase());
          }}
        />
      </form>
    </>
  );
}

export default Input;
