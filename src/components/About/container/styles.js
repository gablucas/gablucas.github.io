import styled, { keyframes } from "styled-components";
import ondulation from '../../../assets/details/ondulation.svg';

const toLeft = keyframes`
  to {
    background-position: -777px;
  }
`

export const Container = styled.section.attrs(props => ({
  id: 'about',
}))`
  background: var(--display-color);
  position: relative;
  padding-top: 10px;
  padding-bottom: 10px;

  &::before {
    content: "";
    display: inline-block;
    width: 100%;
    height: 25px;
    background: url(${ondulation}) center repeat-x;
    animation: ${toLeft} 77s infinite linear;

    position: absolute;
    top: -25px;
  }

  &::after {
    content: "";
    display: inline-block;
    width: 100%;
    height: 25px;
    rotate: 180deg;
    background: url(${ondulation}) center repeat-x;
    animation: ${toLeft} 77s infinite linear;

    position: absolute;
    bottom: -25px;
  }
`

export const Content = styled.div`
  padding-left: 40px;
  padding-right: 40px;

  & h2 {
    font: var(--font-48-eb);
    text-align: center;
  }

  & p {
    font: var(--font-18-r);
    color: var(--tertiary-color);
    width: 1000px;
    text-align: start;
    margin: 0 auto;
    margin-top: 10px;
  }

  & div {
    margin-top: 40px;
  }

  & ul {
    display: flex;
    justify-content: center;
    gap: 12px;
  }

  @media(max-width: 1240px) {
    & p {
      width: 100%;
    }
  }

  @media(max-width: 640px) {
    padding-left: 20px;
    padding-right: 20px;

    & img {
      width: 60px;
    }
  }

  @media(max-width: 500px) {
    & ul {
      flex-wrap: wrap;
    }

    & div {
      margin-top: 20px;
    }
  }
`
