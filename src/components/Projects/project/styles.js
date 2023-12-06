import styled, { keyframes } from "styled-components";
import miniondulation from '../../../assets/details/miniondulation.svg'
import circles from '../../../assets/details/circles.svg';

export const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 20px;
  padding: 20px;
  border-radius: 20px;
  background: var(--tertiary-color);

  position: relative;

  & + & {
    margin-top: 60px;
  }

  &::after {
    content: "";
    background: url(${circles}) center no-repeat;
    width: 25px;
    height: 100px;

    position: absolute;
    top: 20px;
    right: 20px;
  }

  @media (max-width: 1240px) {
    grid-template-columns: 1fr;

    &::after {
      bottom: 20px;
      top: auto;
      right: 10px;
    }
  }

  @media (max-width: 640px) {
    padding: 10px;
  }
`

const toLeft = keyframes`
  from {
    background-position: 0;
  }

  to {
    background-position: 80px;
  }
`

export const ImageWrapper = styled.div`
  position: relative;

  img {
    width: 100%;
    height: 100%;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    font: var(--font-14-eb);
    color: var(--tertiary-color);
    text-align: center;
    height: 40px;
    
    background: var(--display-color);

    position: absolute;
    bottom: 0px;
    width:${props => props.site ? "50%" : "100%"}
  }

  a:nth-child(2) {
    border-right:${props => props.site ? "2px solid var(--tertiary-color)" : "none"} ;
    border-radius: ${props => props.site ? "0 0 0 7px" : "0 0 7px 7px"} ;
  }

  a:nth-child(3) {
    border-radius: 0 0 7px 0;
  }

  a:hover {
    height: 35px;
  }

  a:hover::before {
    content: "";
    width: 100%;
    height: 6px;
    border-right: 2px solid var(--tertiary-color);
    background: url(${miniondulation}) repeat-x;
    animation: ${toLeft} 7s infinite linear;
    position: absolute;
    top: -5px;
    left: 0px;
  }

  a:nth-child(3) {
    bottom: 0px;
    left: 50%;
  }
`

export const Info = styled.div`
  display: grid;
  align-content: start;
  grid-template-rows: repeat(3, auto) 1fr auto;

  h3 {
    font: var(--font-32-eb);
    color: var(--secondary-color);
  }

  span {
    font: var(--font-14-b);
    color: var(--subtitle-color1);
  }

  h4 {
    font: var(--font-14-b);
    color: var(--text-color2);
    margin-top: 10px;
  }
`

export const FeatureList = styled.ul`
  font: var(--font-14-r);
  line-height: 1.3;
  color: var(--subtitle-color1);
  margin-top: 4px;
  margin-left: 10px;

  li {
    display: flex;
    align-items: center;
  }

  li:before {
    content: "";
    display: inline-block;
    width: 6px;
    height: 4px;
    margin-right: 8px;
    background: var(--subtitle-color1);
  }

  a {
   text-decoration: underline;
   transition: all .3s;
  }

  a:hover {
    color: #F7F7F7;
  }
`

export const TechnologiesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 7px;
  font: var(--font-12-eb);
  color: var(--tertiary-color);
  margin-top: 14px;

  li {
    padding: 4px;
    border-radius: 4px;
    text-transform: uppercase;
    background: var(--subtitle-color1);
  }

  li:last-child {
    background: var(--display-color);
  }

  @media (max-width: 640px) {
    margin-left: 10px;

    li {
      padding: 2px;
    }
  }
`