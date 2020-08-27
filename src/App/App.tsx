import React from 'react';
import GlobalStyles from '../styles';
import Hangman from '../components/Hangman';

function App(): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <Hangman />
    </>
  );
}

export default App;
