import React from 'react'
import { useRef } from 'react';
import { Container, Picture } from './styles';

const Image = ({ site }) => {
  const opacity = useRef(0);
  const [skeleton, setSkeleton] = React.useState(true);

  function handleLoad() {
    opacity.current = 1;
    setSkeleton(false);
  }

  return (
    <Container>
      {skeleton && <div></div>}
      <Picture onLoad={handleLoad} opacity={opacity.current}>
        <source  type='image/webp' srcSet={`${site.image.webp1296} 1296w`} />
        <img src={site.image.jpg1296} alt={site.image.alt} />
      </Picture>
    </Container>
  );
};

export default Image