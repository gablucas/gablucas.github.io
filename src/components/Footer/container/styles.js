import styled, { keyframes } from "styled-components";
import ondulationblack from '../../../assets/details/ondulationblack.svg';

const toLeft = keyframes`
  from {
    background-position: 0;
  }

  to {
    background-position: 80px;
  }
`

export const Container = styled.footer.attrs(props => ({
  id: 'contact',
}))`
  padding-top: 20px;
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    width: 100%;
    height: 25px;
    background: url(${ondulationblack}) center repeat-x;
    animation: ${toLeft} 7s infinite linear;

    position: absolute;
    top: -25px;
  }
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  column-gap: 40px;
  row-gap: 40px;
  justify-content: center;
  color: var(--secondary-color);

  svg {
    grid-column: 1/-1;
    justify-self: center;
  }

  img {
    grid-row: 1/3;
  }

  div,
  a {
    display: grid;
    grid-template-columns: auto 1fr;
    align-content: start;
    column-gap: 12px;
  }

  span:nth-child(2) {
    font: var(--font-16-b);
    align-self: end;
  }

  span:nth-child(3) {
    font: var(--font-18-r);
    color: var(--subtitle-color1);
  }

  & > span {
    grid-column: 1/-1;
    font: var(--font-16-b);
    color: var(--subtitle-color1);
    text-align: center;
    letter-spacing: 1px;
    padding-bottom: 20px;
  }

  @media (max-width: 1240px) {
    grid-template-columns: auto auto;

    svg {
      grid-column: 1/-1;
      justify-self: center;
    }
  }

  @media (max-width: 640px) {
    grid-template-columns: auto;
  }
`


