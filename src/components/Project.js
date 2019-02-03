import React from 'react'
import styled from 'styled-components'

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(126.41deg, #17EAD9 1.65%, #6078EA 100%);

  &:nth-child(2n) {
    background: linear-gradient(126.9deg, #FCE38A 1.74%, #F38181 98.97%);
  }

  &:nth-child(3n) {
    background: linear-gradient(-135deg, #7117EA 0%, #EA6060 100%);;
  }

  margin: ${props => props.theme.spacing.s};
  border-radius: ${props => props.theme.borderRadius};
  font-size: ${props => props.theme.font.l};
  padding: 0 ${props => props.theme.spacing.s};
  width: 375px;
  height: 280px;
  color: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  transition: 0.1s ease-in;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
  }
`;
const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: ${props => props.theme.font.m}
`

const Tag = styled.div`
  margin-right: ${props => props.theme.spacing.xs}
`


const Project = ({ project }) => (
  <ProjectWrapper>
    <h3>{project.title}</h3>
    <Tags>
      {project.tags.map((val, i) => (
          <Tag key={i}>#{val}</Tag>
      ))}
    </Tags>
  </ProjectWrapper>
)

export default Project
