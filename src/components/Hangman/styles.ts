import styled from 'styled-components';

const Container = styled.div`
  width: 400px;
  color: black;
  text-align: center;
  zoom: 1.3;
  img {
    border: 10px solid white;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.27), 
                0 0 40px rgba(0, 0, 0, 0.06) 
                inset;
  }
  h1 {
    font-size: 4rem;
    font-weight: 100;
    margin-bottom: 0.1rem;
    margin-top: 0;
  }
`;

const WordPlaceholder = styled.div`
  letter-spacing: 1rem;
  margin: 0.4rem -1rem 0.2rem 0;
  font-size: 2rem;
`;

const Keyboard = styled.div`
  text-align: center;
  display: inline-block;
  width: 250px;
  margin-top: 0;

  button {
    border: none;
    font-family: inherit;
    font-size: 1rem;
    cursor: pointer;
    width: 30px;
    margin: 5px 2px 2px 2px;
    letter-spacing: 1px;
    outline: none;
    background: #ffc107;
    color: #fff;
    box-shadow: 0 6px #ff9800;
    border-radius: 5px;
    padding-top: 4px;
    :hover {
      background-color: #ff9800;
    }
    :disabled {
      background: #bdbdbd;
      color: #eeeeee;
      box-shadow: 0 6px #9e9e9e;
    }
  }
`;

export { Container, WordPlaceholder, Keyboard };
