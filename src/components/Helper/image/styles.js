import styled, { keyframes } from "styled-components";

const skeleton = keyframes`
  from {
    background-position: 0px;
  }

  to {
    background-position: -200%;
  }
`

export const Container = styled.div`
  display: grid;
  border-radius: 7px;
  overflow: hidden;
  
  div {
    grid-area: 1/1;
    height: 100%;
    background-image: linear-gradient(90deg, #EEE 0px, #FFF 50%, #EEE 100%);
    background-color: #EEE;
    background-size: 200%;
    animation: ${skeleton} 1.5s linear infinite;
  }
`

export const Picture = styled.picture`
  grid-area: 1/1;
  display: block;
  opacity: ${props => props.opacity};
  transition: .2s;
`