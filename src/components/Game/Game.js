import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Input from '../Input';
import GuessHistory from '../GuessHistory';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import WonBanner from '../WonBanner/WonBanner';
import LostBanner from '../LostBanner/LostBanner';
import Keyboard from '../Keyboard/Keyboard';



function Game() {
    const [answer, setAnswer] = React.useState(() => sample(WORDS));
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

  function handleRestart() {
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    setGuess([]);
    setGameStatus('running');
  }

  const validatedGuesses = guess.map((guess) =>
    checkGuess(guess, answer)
  );


  return (
    <>
      <GuessHistory validatedGuesses={validatedGuesses} />
      <Input handleSubmitGuess={handleSubmitGuess} gameStatus={gameStatus} />
      <Keyboard validatedGuesses={validatedGuesses} />
      {gameStatus === 'won' &&
      <WonBanner
      numOfGuesses={guess.length}
          handleRestart={handleRestart}
      />}
      {gameStatus === 'lost' && <LostBanner answer={answer} handleRestart={handleRestart} />}
    </>
  );
}

export default Game;
