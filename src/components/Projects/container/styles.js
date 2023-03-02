import styled from "styled-components";
import bgPattern from '../../../assets/projects/bgpattern.png'

export const Container = styled.section.attrs(props => ({
  id: 'projects',
}))`
  padding-top: 60px;
  padding-bottom: 140px;
  
  background: url(${bgPattern});
`

export const Content = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  margin-left: 40px;
  margin-right: 40px;
  

  h2 {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    text-transform: uppercase;
    font: var(--font-48-eb);

    position: relative;
    z-index: 1;
  }

  h2::before {
    content: "";
    height: 20px;
    width: 280px;
    background: var(--display-color);

    position: absolute;
    bottom: 0px;
    z-index: -1;
  }

  @media (max-width: 1240px) {
    max-width: 900px;
  }

  @media (max-width: 640px) {
    margin-left: 10px;
    margin-right: 10px;

    h2::before {
      width: 260px;
    }
  }

  @media (max-width: 500px) {
    h2::before {
      height: 16px;
      width: 200px;
    }
  }

  @media (max-width: 375px) {
    h2::before {
      height: 14px;
      width: 170px;
    }
  }
`