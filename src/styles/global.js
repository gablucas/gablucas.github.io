import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  :root {
    --primary-color: #000000;
    --secondary-color: #FFFFFF;
    --tertiary-color: #121212;
    --display-color: #FFA700;
    --subtitle-color1: #B2B2B2;
    --subtitle-color2: #2B2B2B;
    --text-color1: #C8C8C8;
    --text-color2:#F7F7F7;

    --font-72-eb: 800 4.5rem/1.1 'Inter';
    --font-48-eb: 800 3rem/1.1 'Inter';
    --font-32-eb: 800 2rem/1.1 'Inter';
    --font-32-b: 700 2rem/1.2 'Inter';
    --font-18-m: 500 1.125rem/1.4 'Inter';
    --font-18-r: 400 1.125rem/1.4 'Inter';
    --font-14-eb: 800 .875rem/1.1 'Inter';
    --font-14-b: 700 .875rem/1.1 'Inter';
    --font-14-r: 400 .875rem/1.1 'Inter';
    --font-12-eb: 800 .75rem/1.1 'Inter';
  }

  @media(max-width: 1240px) {
    :root {
      --font-72-eb: 800 3.5rem/1.1 'Inter';
    }
  }

  @media(max-width: 940px) {
    :root {
      --font-72-eb: 800 4rem/1.1 'Inter';
    }
  }

  @media(max-width: 640px) {
    :root {
      --font-72-eb: 800 3rem/1.1 'Inter';
      --font-48-eb: 800 2.8rem/1.1 'Inter';
      --font-32-b: 700 1.6rem/1.2 'Inter';
      --font-18-r: 400 1rem/1.4 'Inter';
    }
  }

  @media(max-width: 500px) {
    :root {
      --font-72-eb: 800 2.6rem/1.1 'Inter';
      --font-48-eb: 800 2.2rem/1.1 'Inter';
      --font-32-b: 700 1.4rem/1.2 'Inter';
      --font-18-r: 400 .875rem/1.4 'Inter';
    }
  }

  @media(max-width: 375px) {
    :root {
      --font-72-eb: 800 2rem/1.1 'Inter';
      --font-48-eb: 800 1.8rem/1.1 'Inter';
      --font-32-b: 700 1.2rem/1.2 'Inter';
      --font-18-r: 400 .725rem/1.4 'Inter';
    }
  }

  * {
    margin: 0;
    padding: 0;
    font-family: 'Inter';
    box-sizing: border-box;
  }


  body {
    margin: 0 auto;
    background-color: var(--primary-color);
    -webkit-font-smoothing: antialised;
  }
  
  button {
    cursor: pointer;
    background: none;
    outline: none;
    border: none;
  }

  a {
    display: block;
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    display: block;
  }
`

export { GlobalStyle }