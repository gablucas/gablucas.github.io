import React from 'react';
import { Logo, StyledHeader } from './Header.styled';

const Header = () => {
  const [rotate, setRotate] = React.useState(false)


  // Rotaciona a logo ao passar o mouse em cima
  function handleRotateLogo() {
    localStorage.setItem('rotate', !rotate);
    setRotate(!rotate)
  }

  // Busca no localStore a rotação da logo
  React.useState(() => {
    const getRotateValue = localStorage.getItem('rotate');
    setRotate(JSON.parse(getRotateValue));
  }, [])

  return (
    <StyledHeader>
      <a href="/"><Logo rotateLogo={rotate} onMouseEnter={handleRotateLogo} /></a>
      <nav>
        <ul>
          <li><a href="#sobremim">Sobre mim</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </StyledHeader>
  )
}

export default Header