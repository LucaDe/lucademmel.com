import React from 'react';
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"

import Heading from './Heading';
import Container from './Container';

const AboutWrapper = styled.div`
  background: #63A6F5;
  height: 600px;
  width: 100%;
`

const ProfileImage = styled(Img)`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`

const Wrapper = styled.div`
  padding: ${props => props.theme.spacing.l};
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.font.l};
  font-weight: 500;
`

const AboutRow = styled.div`
  display: flex;
  align-items: center;
`

const AboutText = styled.p`
  padding-left: ${props => props.theme.spacing.m}
`

const Text = styled.p`
  font-weight: 300;
`

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        fileName: file(relativePath: { eq: "profile-picture.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300, maxHeight: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
    }`}
    render={data => {
      return (
        <AboutWrapper id="about">
          <Container>
            <Heading text="About me" />
            <Wrapper>
              <AboutRow>
                <ProfileImage fluid={data.fileName.childImageSharp.fluid} />
                <AboutText>Hello World, Hello World , Hello World, Hello World</AboutText>
              </AboutRow>
              <Text>Hello World, Hello World , Hello World, Hello World</Text>
            </Wrapper>
          </Container>
        </AboutWrapper>
      )
    }}
  />
)

export default About
