import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  
  :root {
    --background: #F0F2F5;
    --text: #363F5F;
    --white: #F9F9F9;
    --blue: #5429CC;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media(max-width:1080px) {
      font-size: 93.75%;
    }
    
    @media(max-width:720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    color: var(--text);
    font-size: 1rem;
    font-family: 'Ubuntu', sans-serif;
  }

  button {
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  
  @keyframes go-back {
    0% {
        transform: rotateY(90deg);
    }
    100% {
        transform: rotateY(initial);
    }
}
`;