import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Input from '../Input';
import GuessHistory from '../GuessHistory';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });
checkGuess(answer, 'ABCDE');
function Game() {
    // running | won | lost
  const [gameStatus, setGameStatus] = useState('running');
  const [guess, setGuess] = useState([]);

 function handleSubmitGuess(tentativeGuess) {
    const nextGuesses = [...guess, tentativeGuess];
    setGuess([...guess, tentativeGuess]);

    if (tentativeGuess.toUpperCase() === answer) {
      setGameStatus('won');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }
  return (
    <>
    {gameStatus}
      <GuessHistory guess={guess} answer={answer} />
      <Input handleSubmitGuess={handleSubmitGuess} gameStatus={gameStatus} />
    </>
  );
}

export default Game;
