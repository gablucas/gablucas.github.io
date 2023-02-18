import React from 'react';
import { LogoStyled } from './styles';
import { HeaderContext } from '../HeaderContext';
import LogoImg from '../../Global/logoimg';

const Logo = () => {
  const { toggleMobile } = React.useContext(HeaderContext);
  const [rotate, setRotate] = React.useState(false);

  // Rotaciona a logo ao passar o mouse em cima
  function handleRotateLogo() {
      localStorage.setItem('rotate', !rotate);
      setRotate(!rotate);
  }

  // Busca no localStore a rotação da logo
  React.useState(() => {
    const getRotateValue = localStorage.getItem('rotate');
    setRotate(JSON.parse(getRotateValue));
  }, [])

  return (
    <LogoStyled rotateLogo={rotate} onMouseEnter={handleRotateLogo} onClick={handleRotateLogo} >
      <LogoImg color={toggleMobile ? '#000000' : '#FFFFFF'}/>
    </LogoStyled>
  )
}

export default Logo;