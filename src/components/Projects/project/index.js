import React from 'react';
import Image from '../../Helper/image';
import { ProjectContainer, ImageWrapper, Info, Paragraphs, TechnologiesList } from './styles';

const Project = ({ site }) => {
  return (
    <ProjectContainer>
      <ImageWrapper site={site.url.site}>
        <Image site={site} />
        
          {site.url.site && <a href={site.url.site} target="_blank" rel='noreferrer'>Site</a>}
          {/* <a href={site.url.github} target="_blank" rel='noreferrer'>Github</a> */}
      </ImageWrapper>

      <Info>
        <h3>{site.name}</h3>
        <span>{site.description}</span>

        <Paragraphs>
          {site.about.map((paragraph) => (
            <p>{paragraph}</p>
          ))}
        </Paragraphs>
        

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