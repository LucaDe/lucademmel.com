import React from 'react'
import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'

import { format } from '../util/urlFormat';
import { media } from '../theme';

const gradients = [
  'linear-gradient(126.41deg, #17EAD9 1.65%, #6078EA 100%)',
  'linear-gradient(126.9deg, #FCE38A 1.74%, #F38181 98.97%)',
  'linear-gradient(-135deg, #7117EA 0%, #EA6060 100%)',
]

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: ${props => props.theme.font.m}
`

const Tag = styled.div`
  margin-right: ${props => props.theme.spacing.xs}
`

const Title = styled.h3`
  text-align: center;
`

const Description = styled.p`
  font-size: ${props => props.theme.font.s}
`

// Since DOM elements <a> cannot receive activeClassName,
// destructure the prop here and pass it only to GatsbyLink
const Link = ({ children, to, activeClassName, ...other }) => {
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to)

  // Use Gatsby Link for internal links, and <a> for others
  if (internal) {
    return (
      <GatsbyLink to={to} activeClassName={activeClassName} {...other}>
        {children}
      </GatsbyLink>
    )
  }
  return (
    <a href={to} target="_blank" {...other}>
      {children}
    </a>
  )
}

const ProjectWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: ${gradients[0]};

  &:nth-child(2n) {
    background: ${gradients[1]};
  }

  &:nth-child(3n) {
    background: ${gradients[2]};
  }

  margin: ${props => props.theme.spacing.s};
  border-radius: ${props => props.theme.borderRadius};
  font-size: ${props => props.theme.font.l};
  padding: 0 ${props => props.theme.spacing.s};
  width: 28%;
  ${media.desktop`width: 40%;`}
  ${media.tablet`width: 60%;`}
  ${media.phone`width: 100%;`}
  height: 280px;
  color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  transition: 0.1s ease-in;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
  }
`;

const Project = ({ project, index }) => {
  let target = project.showContent ? format(project.title) : '/#projects';
  if (project.externalTarget) {
    target = project.externalTarget
  }
  let description = 'More details coming soon.'
  if (project.description) {
    description = project.description
  }
  return (
    <ProjectWrapper to={target} state={{ color: gradients[index] }}>
      <Title>{project.title}</Title>
      <Tags>
        {project.tags.map((val, i) => (
            <Tag key={i}>#{val}</Tag>
        ))}
      </Tags>
      <Description>{description}</Description>
    </ProjectWrapper>
  )  
}

export default Project
