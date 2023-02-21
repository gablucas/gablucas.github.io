import React from 'react';
import { Container } from './styles';
import mewebp from '../../../assets/home/me.webp';
import me_520w from '../../../assets/home/me_520w.png';
import me_680w from '../../../assets/home/me_680w.png';
import mepng from '../../../assets/home/me.png';

const index = () => {
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
        <h1>Desenvolvedor<br/>Front End<span>.</span></h1>
        <p>Apaixonado por programação e design, gosto de criar soluções que facilitem e melhorem a vida das pessoas.</p>
      </div>
   </Container>
  )
}

export default index