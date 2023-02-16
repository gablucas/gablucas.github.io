import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  :root {
    --background: #000000;

    --font-18-m: 500 1.125rem/1 sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    font-family: 'Inter';
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    padding-left: 40px;
    padding-right: 40px;
    background-color: var(--background);
    -webkit-font-smoothing: antialised;
  }
  
  button {
    cursor: pointer;
  }

  a {
    display: block;
    text-decoration: none;
    color: #FFFFFF;
  }

  ul {
    list-style: none;
  }
`

export { GlobalStyle }