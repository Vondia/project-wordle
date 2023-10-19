import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Input from '../Input';
import GuessHistory from '../GuessHistory';
import { checkGuess } from '../../game-helpers';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });
checkGuess(answer, 'ABCDE');
function Game() {
  const [guess, setGuess] = useState([]);

 function handleSubmitGuess(tentativeGuess) {
    setGuess([...guess, tentativeGuess]);
  }
  return (
    <>
      <GuessHistory guess={guess} />
      <Input handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
