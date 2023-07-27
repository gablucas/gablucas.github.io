import html5 from '../../../assets/about/html5.svg';
import css3 from '../../../assets/about/css3.svg';
import javascript from '../../../assets/about/javascript.svg';
import git from '../../../assets/about/git.svg';
import styledcomponents from '../../../assets/about/styledcomponents.svg';
import react from '../../../assets/about/react.svg';
import typescript from '../../../assets/about/typescript.svg';

const Technologies = () => {

  const tecnologies = [html5, css3, javascript, git, styledcomponents, react, typescript];

  return (
    <div>
      <ul>
        {tecnologies.map((tecnology, index) => (
          <li key={index}><img src={tecnology} alt="" /></li>
        ))}
      </ul>
  </div>
  )
}

export default Technologies;