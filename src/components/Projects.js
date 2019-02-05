import React from 'react'
import styled from 'styled-components'
import { Spring, animated } from 'react-spring'
import { InView } from 'react-intersection-observer'

import Heading from './Heading'
import Container from './Container'
import Project from './Project'

const ProjectWrapper = styled.div`
  position: relative;
  background: ${props => props.theme.colors.primary};
  padding-bottom: ${props => props.theme.spacing.l};
`;

const ProjectList = styled(animated.div)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Separator = styled.svg`
  position: absolute;
  ${props => props.bottom ? 'bottom' : 'top' }: calc(-10vw + 1px);
  width: 100%;
  height: 10vw;

  polygon {
    fill: ${props => props.theme.colors.primary}
  }
`

class Projects extends React.Component {
  state = {
    showProjects: false
  }

  onInViewChange = inview => {
    if (!this.state.showProjects && inview) this.setState({ showProjects: true })
  }

  render () {
    const { projects } = this.props
    const { showProjects } = this.state
    return (
      <ProjectWrapper id="projects">
        <Separator xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="0,100 100,0 100,100"/>
        </Separator>
        <Container>
          <Heading text="Projects" />
          <InView onChange={this.onInViewChange}>
            {({ ref }) => (
              <Spring
                from={{ opacity: 0 }}
                to={{ opacity: showProjects ? 1 : 0 }}
              >
                {props =>
                  <ProjectList ref={ref} style={props}>
                    {projects.map(({ node }, i) => (
                      <Project key={i} project={node} index={i} />
                    ))}
                  </ProjectList>
                }
              </Spring>
            )}
          </InView>
        </Container>
        <Separator bottom xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="0,0 100,0 0,100"/>
        </Separator>
      </ProjectWrapper>
    )
  }
}

export default Projects
