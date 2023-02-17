import styled from "styled-components";

import zigzag from '../../../assets/details/zigzag.svg';
import circles from '../../../assets/details/circles.svg';

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  gap: 40px;
  padding-top: 60px;

  height: calc(100vh - 200px);
  color: var(--secondary-color);

  & img {
    width: 400px;
  }

  & div:last-child {
    padding-top: 60px;
    display: grid;
    grid-template-columns: auto auto auto;
    align-content: start;
  }

  /* Detalhe: ZigZag */
  & div:last-child::before {
    grid-row: 4/5;
    padding-top: 50px;
    z-index: -1 ;

    content: "";
    display: inline-block;
    height: 12.5px;
    width: 100px;
    rotate: 45deg;
    background: url(${zigzag}) center no-repeat;
  }

  /* Detalhe: Circles */
  & div:last-child::after {
    grid-row: 1/3;
    grid-column: 3;
    margin-left: 40px;

    content: "";
    height: 100px;
    width: 12.2px;
    background: url(${circles}) center no-repeat;
  }

  & div > span {
    grid-column: 2;
    font: var(--font-32-b);
    color: var(--display-color);
  }

  & h1 {
    grid-column: 2;
    margin-top: 14px;
    font: var(--font-72-eb);
  }

  & h1 span {
    color: var(--display-color);
  }

  & p {
    grid-column: 2;
    margin-top: 7px;
    width: 480px;
    font: var(--font-18-r);
    color: var(--text-color1);
  }

  @media(max-width: 1240px) { 

    & img {
      width: 350px;
    }

    /* Detalhe: ZigZag */
    & div:last-child::before {
      grid-column: 2;
      rotate: initial;
    }

    /* Detalhe: Circles */
    & div:last-child::after {
      margin-left: 20px;
    }
  }

  @media(max-width: 940px) {
    grid-template-columns: 1fr;
    justify-items: center;
    padding-top: 40px;

    & div:last-child {
      padding-top: 0px;
    }

    & img {
      width: 400px;
    }

    & div:first-child {
      margin: 0 auto;
    }

    & div:last-child {
      grid-row: 1;
    }
  }

  @media(max-width: 640px) {
    padding-top: 20px;

    & img {
      width: 340px;
    }

    & p {
      width: 400px;
    }
  }

@media(max-width: 500px) {

  & img {
    width: 300px;
  }

  & div:last-child {
    padding-top: 0px;
  }

  & h1 {
    margin-top: 7px;
  }

  & p {
    width: 300px;
  }
}

@media(max-width: 375px) {

  & img {
    width: 260px;
  }

  & p {
    width: 220px;
  }
}
`