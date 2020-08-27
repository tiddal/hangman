import { createGlobalStyle } from 'styled-components';
import backgroundImage from '../assets/background.jpg';

const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Coming+Soon");
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };

  body {
    font-family: "Coming Soon", cursive;
    text-align: center;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(${backgroundImage});
    background-position: center center;
  };
`;

export default GlobalStyles;
