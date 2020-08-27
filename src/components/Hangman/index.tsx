import React, { MouseEvent, useState } from 'react';

import { Container, WordPlaceholder, Keyboard } from './styles';
import HANGMAN_IMAGES from '../../services/hangmanImagesDB';

const Hangman: React.FC = () => {
  const defaultValues = {
    answer: 'apple',
    images: HANGMAN_IMAGES,
    wrongAttemptsAllowed: 6,
  };

  const [wrongAttempts, setWrongAttempts] = useState(0);
  const [lettersAttempted, setLettersAttempted] = useState(new Set());
  const [isTheGameOver, setIsTheGameOver] = useState(false);

  function evaluateAttempt(event: MouseEvent<HTMLButtonElement>) {
    const letter = event.currentTarget.value;
    setWrongAttempts(wrongAttempts + (defaultValues.answer.includes(letter) ? 0 : 1));
    setLettersAttempted(new Set(lettersAttempted.add(letter)));
    setIsTheGameOver(wrongAttempts + 1 >= defaultValues.wrongAttemptsAllowed);
  }

  return (
    <Container>
      <h1>Hangman</h1>
      <img src={defaultValues.images[wrongAttempts]} alt="hangman" />
      <p>
        Guessed Wrong:
        {' '}
        {wrongAttempts}
      </p>
      <WordPlaceholder>
        {isTheGameOver ? defaultValues.answer : defaultValues.answer.split('').map((letter) => (
          lettersAttempted.has(letter) ? letter : '_'
        ))}
      </WordPlaceholder>
      {isTheGameOver ? <p>You lose...</p> : (
        <Keyboard>
          {'abcdefghijklmnopqrstuvwxyz'.split('').map((letter) => (
            <button
              key={letter}
              type="button"
              onClick={evaluateAttempt}
              value={letter}
              disabled={lettersAttempted.has(letter)}
            >
              {letter}
            </button>
          ))}
        </Keyboard>
      )}

    </Container>
  );
};

export default Hangman;
