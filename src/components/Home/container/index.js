import React from 'react';
import { Container } from './styles';
import me from '../../../assets/home/me.png';

const index = () => {
  return (
   <Container>
      <div>
        <img src={me} alt="Foto do desenvolvedor" />
      </div>

      <div>
        <span>Gabriel Lucas Pegoretti</span>
        <h1>Desenvolvedor<br/>Front End<span>.</span></h1>
        <p>Apaixonado por programação e design, gosto de criar soluções que facilitem e melhorem a vida das pessoas.</p>
      </div>
   </Container>
  )
}

export default index