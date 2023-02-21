import React from 'react';
import { MobileButton, StyledNav } from './styles';
import { HeaderContext } from '../HeaderContext';
import useMedia from '../../../hooks/useMedia';
import CV from '../../../documents/gab_cv.pdf';

const Nav = () => {
  const {toggleMobile, setToggleMobile} = React.useContext(HeaderContext);

  const mobileSize = useMedia('(max-width: 640px)');
 
  // Abre e fecha o Menu Mobile
  function handleToggleMenuMobile() {
    setToggleMobile(!toggleMobile);
  }

  // Fecha o Menu Mobile quando o usuario clica em um link
  function handleCloseMenuMobile() {

    if (toggleMobile) {
      setToggleMobile(!toggleMobile)
    }
  }

  // Trava a tela quando o Menu Mobile é aberto
  React.useEffect(() => {
    if (toggleMobile) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "initial";
    }
  }, [toggleMobile])

    // Verifica o tamanho da tela, se for true, fecha o menu mobile e por consequencia altera a cor da logo
    React.useEffect(() => {
      if (!mobileSize) {
        setToggleMobile(false);
      }
    }, [mobileSize, setToggleMobile])

  return (
    <>
      <MobileButton toggle={toggleMobile} onClick={handleToggleMenuMobile} />

      <StyledNav toggle={toggleMobile}>
        <ul onClick={handleCloseMenuMobile}>
          <li><a href="#about">Sobre mim</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#contact">Contato</a></li>
          <li><a href={CV} download>Baixar CV</a></li>
        </ul>
      </StyledNav>
    </>
  )
}

export default Nav