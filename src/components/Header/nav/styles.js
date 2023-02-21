import styled, { keyframes } from "styled-components";
import brushstroke from '../../../assets/details/brushstroke.svg'

// Animação no hover nos links
const revealToLeft = keyframes`
  0% { clip-path: inset(0 100% 0 0) }
  100% { clip-path: inset(0) }
`

const showMenuMobile = keyframes`
  to {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }
`

export const StyledNav = styled.nav`
  & ul {
    display: flex;
    gap: 20px;
    font: var(--font-18-m);
  }

  & a {
    padding: 20px;
    color: #FFFFFF;
    text-shadow: ${props => props.toggle ? 'none' : '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'};
    position: relative;
  }

  & a:hover::after {
    content: "";
    display: inline-block;
    z-index: -1;
    height: 100%;
    width: 100px;
    background: url(${brushstroke}) center no-repeat;
    position: absolute;
    top: 10px;
    left: 14px;
    animation: ${revealToLeft} .3s forwards;
  }

  @media (max-width: 940px) {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #FFFFFF;
    animation: ${props => props.toggle ? showMenuMobile : 'none'} .3s forwards;

    & ul {
      flex-direction: column;
      gap: 0px;
      margin-top: 140px;
    }

    & a {
      padding-left: 60px;
      font-size: 1.4rem;
      color: #000000;
    }

    & a:hover::after {
      background: none;
      height: 0;
      width: 0;
    }
  }
`
export const MobileButton = styled.button`
  display: none;
  height: 3px;
  width: 30px;
  background: ${props => props.toggle ? '#FFFFFF' : '#FFA700'};
  transform: ${props => props.toggle ? 'rotate(90deg)' : 'none'};
  transition: all .3s;
  
  position: relative;
  z-index: 999;

  &::before {
    content: "";
    display: block;
    height: 3px;
    width: 40px;
    background: ${props => props.toggle ? '#000000' : '#FFA700'};

    position: absolute;
    top: -10px;
    right: 0px;

    top: ${props => props.toggle ? '0px' : '-10px'};
    transform: ${props => props.toggle ? 'rotate(-45deg)' : 'none'};
    transition: all .3s;
  }

  &::after {
    content: "";
    display: block;
    height: 3px;
    background: ${props => props.toggle ? '#000000' : '#FFA700'};

    position: absolute;
    right: 0px;

    top: ${props => props.toggle ? '0px' : '10px'};
    width: ${props => props.toggle ? '40px' : '20px'};
    transform: ${props => props.toggle ? 'rotate(45deg)' : 'none'};
    transition: all .3s;
  }

  @media (max-width: 940px) {
    display: initial;
  }

`