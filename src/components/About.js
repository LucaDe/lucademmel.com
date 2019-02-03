import React from 'react';
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"

import Heading from './Heading';
import Container from './Container';

const AboutWrapper = styled.div`
  background: linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */;
  height: 600px;
  width: 100%;
`

const ProfileImage = styled(Img)`
  width: 75px;
  height: 75px;
  border-radius: 50%;
`

const About = () => (
  <StaticQuery
    query={graphql`
      query {
        fileName: file(relativePath: { eq: "profile-picture.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 400, maxHeight: 250) {
              ...GatsbyImageSharpFluid
            }
          }
        }
    }`}
    render={data => {
      return (
        <AboutWrapper id="about">
          <Container>
            <Heading text="About" />
            <ProfileImage fluid={data.fileName.childImageSharp.fluid} />
          </Container>
        </AboutWrapper>
      )
    }}
  />
)

export default About
