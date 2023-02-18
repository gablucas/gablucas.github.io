import React from 'react'
import { Container, Content } from './styles';
import LogoImg from '../../Global/logoimg';
import email from '../../../assets/footer/email.svg';
import phone from '../../../assets/footer/phone.svg';
import github from '../../../assets/footer/github.svg';
import linkedin from '../../../assets/footer/linkedin.svg';

const Footer = () => {
  return (
    <Container>
      <Content>
        <LogoImg color={'#FFFFFF'} />

        <div>
          <img src={email} alt="" />
          <span>Email</span>
          <span>gabrielpegoretti96@gmail.com</span>
        </div>

        <div>
          <img src={phone} alt="" />
          <span>Telefone</span>
          <span>+55 47 98455-8640</span>
        </div>

        <a href="https://github.com/gablucas">
          <img src={github} alt="" />
          <span>Github</span>
          <span>@Gablucas</span>
        </a>

        <a href="https://www.linkedin.com/in/gablucasdev">
          <img src={linkedin} alt="" />
          <span>Linkedin</span>
          <span>@Gablucasdev</span>
        </a>

        <span>© Gabriel Lucas Pegoretti 2023  </span>
      </Content>
    </Container>
  )
}

export default Footer;