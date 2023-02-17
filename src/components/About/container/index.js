import React from 'react'
import { Container, Content } from './styles';
import html5 from '../../../assets/about/html5.svg';
import css3 from '../../../assets/about/css3.svg';
import javascript from '../../../assets/about/javascript.svg';
import react from '../../../assets/about/react.svg';
import styledcomponents from '../../../assets/about/styledcomponents.svg';
import git from '../../../assets/about/git.svg';

const tecnologies = [html5, css3, javascript, react, styledcomponents, git];

const About = () => {
  return (
    <Container>
      <Content>
        <h2>Sobre mim</h2>
        <p>Em transição de carreira. Com um ótimo domínio da tríade <b>HTML</b>, <b>CSS</b> e <b>JavaScript</b>, tendo como principal tecnologia o framework <b>React</b>. Gosto de desafios, inovar e criar soluções que além de resolver problemas, entregam uma ótima experiência do usuário. </p>

        <div>
          <ul>
            {tecnologies.map((tecnology, index) => (
              <li key={index}><img src={tecnology } alt="" /></li>
            ))}
          </ul>
        </div>
      </Content>
    </Container>
  )
}

export default About;