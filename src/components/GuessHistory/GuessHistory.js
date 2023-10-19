import React from 'react';

function GuessHistory({guess}) {
  return (
<div className="guess-results">
{guess.map((guess) => (
    <p key={guess.id} className="guess">{guess.guess}</p>
))}
{console.log(guess)}
</div>
  );
}

export default GuessHistory;
