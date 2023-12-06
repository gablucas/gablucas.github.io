import React from 'react';
import Image from '../../Helper/image';
import { ProjectContainer, ImageWrapper, Info, FeatureList, TechnologiesList } from './styles';

const Project = ({ site }) => {
  return (
    <ProjectContainer>
      <ImageWrapper site={site.url.site}>
        <Image site={site} />
        
          {site.url.site && <a href={site.url.site} target="_blank" rel='noreferrer'>Site</a>}
          <a href={site.url.github} target="_blank" rel='noreferrer'>Github</a>
      </ImageWrapper>

      <Info>
        <h3>{site.name}</h3>
        <span>{site.description}</span>

        <h4>Features</h4>
        <FeatureList>
          {site.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}

          {site.technologies.some((s) => s === 'Figma') && <li><a href={site.url.figma} rel="noreferrer" target='_blank'>Veja o protótipo feito no Figma</a></li>}
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