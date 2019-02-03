import React from 'react'
import styled from 'styled-components'

import Heading from './Heading'
import Container from './Container'
import Project from './Project'

const ProjectWrapper = styled.div`
  position: relative;
  background: ${props => props.theme.colors.primary};
`;

const ProjectList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Separator = styled.svg`
  position: absolute;
  ${props => props.bottom ? 'bottom' : 'top' }: -10vw;
  width: 100%;
  height: 10vw;

  polygon {
    fill: ${props => props.theme.colors.primary}
  }
`

const Projects = ({ projects }) => (
  <ProjectWrapper id="projects">
    <Separator xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
      <polygon points="0,100 100,0 100,100"/>
    </Separator>
    <Container>
      <Heading text="Projects" />
      <ProjectList>
        {projects.map(({ node }, i) => (
          <Project key={i} project={node} />
        ))}
      </ProjectList>
    </Container>
    <Separator bottom xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <polygon points="0,0 100,0 0,100"/>
    </Separator>
  </ProjectWrapper>
)

export default Projects
