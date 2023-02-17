import styled from "styled-components";

// Componente da imagem criado para poder receber o um evento
export const LogoStyled = styled.a.attrs(props => ({
}))`

  position: relative;
  z-index: 2;
  transition: rotate 1s;
  rotate: ${props => props.rotateLogo === true ? '180deg' : '0deg'};

  @media(max-width: 640px) {

    svg {
      width: 100px;
    }

    & svg * {
      transition: all 1s;
    }
  }

`