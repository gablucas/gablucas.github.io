import React from 'react';
import { ProjectContainer, Image, Info, FeatureList, TechnologiesList } from './styles';

const Project = ({ site }) => {
  return (
    <ProjectContainer>
      <Image>
        <picture>
          <source type='image/webp' srcSet={`${site.image.webp1296} 1296w`} />
          

          <img src={site.image.jpg1296} alt={site.image.alt} />
        </picture>
        
          <a href={site.url.site} target="_blank" rel='noreferrer'>Site</a>
          <a href={site.url.github} target="_blank" rel='noreferrer'>Github</a>
      </Image>

      <Info>
        <h3>{site.name}</h3>
        <span>{site.description}</span>

        <h4>Features</h4>
        <FeatureList>
          {site.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </FeatureList>

        <TechnologiesList>
          {site.technologies.map((technology, index) => (
            <li key={index}>{technology}</li>
          ))}
          <li>Responsivo</li>
        </TechnologiesList>


      </Info>
    </ProjectContainer>
  )
}

export default Project;