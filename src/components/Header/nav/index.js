import React from 'react';
import { MobileButton, StyledNav } from './styles';
import { HeaderContext } from '../HeaderContext';

const Nav = () => {
  const {toggleMobile, setToggleMobile} = React.useContext(HeaderContext)
 
  function handleToggleMenuMobile() {
    setToggleMobile(!toggleMobile);
  }

  React.useEffect(() => {
    if (toggleMobile) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "initial";
    }
  }, [toggleMobile])

  return (
    <>
      <MobileButton toggle={toggleMobile} onClick={handleToggleMenuMobile} />

      <StyledNav toggle={toggleMobile}>
        <ul>
          <li><a href="#sobremim">Sobre mim</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </StyledNav>
    </>
  )
}

export default Nav