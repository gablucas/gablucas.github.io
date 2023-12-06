import React from 'react';
import { Container } from './styles';
import Typed from 'typed.js';
import mewebp from '../../../assets/home/me.webp';
import me_520w from '../../../assets/home/me_520w.png';
import me_680w from '../../../assets/home/me_680w.png';
import mepng from '../../../assets/home/me.png';

const Home = () => {

 const love = React.useRef(null)

 React.useEffect(() => {
  const typed = new Typed(love.current, {
    strings: ['tecnologia.', 'programação.', 'design.', 'criar.', 'inovar.', 'desafios.', 'desenvolvimento.'],
    typeSpeed: 50,
  });

  return () => {
    typed.destroy();
  };
}, []);


  return (
   <Container>
      <picture>
        <source type='image/webp' srcSet={`${mewebp} 1500w`}/>

        <img 
          srcSet={`${me_520w} 520w,
                   ${me_680w} 680w,
                   ${mepng} 1500w`} 

          sizes='(max-width: 375px) 260px,
                 (max-width: 640px) 340px,
                 1240px'
        
        src={mepng} alt="Foto do desenvolvedor" />
      </picture>

      <div>
        <span>Gabriel Lucas Pegoretti</span>
        <h1>Desenvolvedor<br/>Full Stack<span>.</span></h1>
        <p>Apaixonado por  <span ref={love} /></p>
      </div>
   </Container>
  )
}

export default Home