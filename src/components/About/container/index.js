import React from 'react'
import { Container, Content } from './styles';
import Technologies from '../../Home/technologies';


const About = () => {
  return (
    <Container>
      <Content>
        <h2>Sobre mim</h2>
        <p>Apaixonado por tecnologia e desenvolvimento web, gosto de desafios que estimulam a buscar soluções inovadoras, em constante aprendizado busco me tornar um profissional cada vez mais capacitado, sempre se superando e entregando resultados de qualidade.</p>

        <Technologies />

      </Content>
    </Container>
  )
}

export default About;