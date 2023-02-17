import React from 'react';
import { LogoStyled } from './styles';
import { HeaderContext } from '../HeaderContext';
import useMedia from '../../../hooks/useMedia';

const Logo = () => {
  const { toggleMobile, setToggleMobile } = React.useContext(HeaderContext);
  const [rotate, setRotate] = React.useState(false);
  const mobileSize = useMedia('(max-width: 640px)');

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

  // Verifica o tamanho da tela, se for true, fecha o menu mobile e por consequencia altera a cor da logo
  React.useEffect(() => {
    if (!mobileSize) {
      setToggleMobile(false);
    }
  }, [mobileSize, setToggleMobile])

  return (
    <LogoStyled rotateLogo={rotate} onMouseEnter={handleRotateLogo} >
      <svg width="120" height="77" viewBox="0 0 120 77" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M82.5 10.2812C82.5 5.10358 86.6973 0.90625 91.875 0.90625V38.4062H82.5V10.2812Z" fill={toggleMobile ? '#000000' : '#FFFFFF'}/>
        <path d="M115.312 38.5938C115.312 46.3603 109.017 52.6562 101.25 52.6562C93.4835 52.6562 87.1875 46.3603 87.1875 38.5938C87.1875 30.8272 93.4835 24.5312 101.25 24.5312C109.017 24.5312 115.312 30.8272 115.312 38.5938Z" stroke={toggleMobile ? '#000000' : '#FFFFFF'} strokeWidth="9.375"/>
        <path d="M41.25 27.1562C41.25 21.9786 45.4473 17.7812 50.625 17.7812V38.4062H41.25V27.1562Z" fill="#FFA800"/>
        <path d="M69.375 38.4062H78.75V49.6562C78.75 54.8339 74.5527 59.0312 69.375 59.0312V38.4062Z" fill={toggleMobile ? '#000000' : '#FFFFFF'}/>
        <path d="M74.0625 38.5938C74.0625 46.3603 67.7665 52.6562 60 52.6562C52.2335 52.6562 45.9375 46.3603 45.9375 38.5938C45.9375 30.8272 52.2335 24.5312 60 24.5312C67.7665 24.5312 74.0625 30.8272 74.0625 38.5938Z" stroke={toggleMobile ? '#000000' : '#FFFFFF'} strokeWidth="9.375"/>
        <path d="M28.125 38.5938H37.5V66.7188C37.5 71.8964 33.3027 76.0938 28.125 76.0938V38.5938Z" fill={toggleMobile ? '#000000' : '#FFFFFF'}/>
        <path d="M32.8125 38.5938C32.8125 46.3603 26.5165 52.6562 18.75 52.6562C10.9835 52.6562 4.6875 46.3603 4.6875 38.5938C4.6875 30.8272 10.9835 24.5312 18.75 24.5312C26.5165 24.5312 32.8125 30.8272 32.8125 38.5938Z" stroke={toggleMobile ? '#000000' : '#FFFFFF'} strokeWidth="9.375"/>
      </svg>
    </LogoStyled>
  )
}

export default Logo;