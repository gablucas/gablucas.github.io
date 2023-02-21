import React from 'react'
import { Container, Content } from './styles';
import Project from '../project';
import { sites } from '../project/data';

const Projects = () => {

  return (
    <Container>
      <Content>
        <h2>Projetos</h2>
        {sites.map((site, index) => (
          <Project key={index} site={site} />
        ))}
      </Content>
    </Container>
  )
}

export default Projects;