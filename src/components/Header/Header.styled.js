import styled, { keyframes } from 'styled-components';
import logo from '../../assets/logo.svg'
import brushstroke from '../../assets/details/brushstroke.svg'

// Animação no hover nos links
const revealToLeft = keyframes`
  0% { clip-path: inset(0 100% 0 0) }
  100% { clip-path: inset(0) }
`

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
  padding-bottom: 30px;
  
  & nav {
    margin: auto 0;
  }

  & ul {
    display: flex;
    gap: 40px;
    font: var(--font-18-m);
  }

  & li a {
    position: relative;
  }

  & li a:hover::after {
    content: "";
    display: inline-block;
    z-index: -1;
    width: 100px;
    height: 100%;
    background: url(${brushstroke}) center no-repeat;
    position: absolute;
    top: 10px;
    left: -10px;
    animation: ${revealToLeft} .3s forwards;
  }
`

// Componente da imagem criado para poder receber o um evento
export const Logo = styled.img.attrs(props => ({
  src: logo,
}))`

  transition: rotate 1s;
  rotate: ${props => props.rotateLogo === true ? '180deg' : '0deg'};
`