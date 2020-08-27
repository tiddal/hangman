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

  function evaluateAttempt(event: MouseEvent<HTMLButtonElement>) {
    const letter = event.currentTarget.value;
    setWrongAttempts(wrongAttempts + (defaultValues.answer.includes(letter) ? 0 : 1));
    setLettersAttempted(new Set(lettersAttempted.add(letter)));
  }

  function guessWord() {
    return defaultValues.answer.split('').map((letter) => (
      lettersAttempted.has(letter) ? letter : '_'
    ));
  }

  return (
    <Container>
      <h1>Hangman</h1>
      <img src={defaultValues.images[wrongAttempts]} alt="hangman" />
      <WordPlaceholder>
        {guessWord()}
      </WordPlaceholder>
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
    </Container>
  );
};

export default Hangman;
