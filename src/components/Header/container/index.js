import React from 'react';
import { Container } from './styles';
import Logo from '../logo/index';
import Nav from '../nav';
import HeaderProvider  from '../HeaderContext';


const Header = () => {

  return (
    <HeaderProvider>
      <Container>
        <Logo />
        <Nav />
      </Container>
    </HeaderProvider>
  )
}

export default Header