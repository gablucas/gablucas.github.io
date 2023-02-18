import React from 'react';

export const HeaderContext = React.createContext();

const HeaderProvider = ({ children }) => {
  const [toggleMobile, setToggleMobile] = React.useState(false)
  
  return (
    <HeaderContext.Provider value={{ toggleMobile, setToggleMobile }}>
      {children}
    </HeaderContext.Provider>
  )
}

export default HeaderProvider;