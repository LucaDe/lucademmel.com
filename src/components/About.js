import React from 'react';
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"

import Heading from './Heading';
import Container from './Container';
import { media } from '../theme';
import { SocialIcons } from '.';

const AboutWrapper = styled.div`
  background: ${props => props.theme.colors.blue};
  padding-bottom: 1px;
  width: 100%;
`

const ProfileImage = styled(Img)`
  width: 250px;
  ${media.phone`width: 150px;`}
  height: auto;
  border-radius: 50%;
`

const Wrapper = styled.div`
  padding: ${props => props.theme.spacing.l};
  ${media.phone`padding: 0;`}
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.font.l};
  font-weight: 500;
`

const AboutRow = styled.div`
  display: flex;
  align-items: center;

  ${media.tablet`flex-direction: column;`}
`

const AboutText = styled.p`
  padding-left: ${props => props.theme.spacing.m};
  ${media.phone`
    padding: 0;
    text-align: center;
  `}
`

const Text = styled.p`
  font-weight: 300;
`

const Social = styled.div`
  width: 30%;
  ${media.tablet`width: 100%;`}
`
const Incudy = styled.a`
  color: ${props => props.theme.colors.primary};
  text-decoration: underline;
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
                <AboutText>Passionate about realizing <i>value creating</i> digital products and experiences using state of the art technologies 💯</AboutText>
              </AboutRow>
              <Text>
                While studying business information systems in Cologne and LA I worked in multiple e-commerce companies as a web developer. After finishing my bachelor degree
                I started working for my own. As a freelancer I realized mobile, web apps and e-commerce solutions for multiple startups and businesses.<br />
                Currently I'm focussing on my own company <Incudy href="https://www.incudy.de" title="incudy" target="_blank">Incudy</Incudy>, where we build new startups and support clients with digital services.
              </Text>
              <Text>Contact me:</Text>
              <Social>
                <SocialIcons />
              </Social>
            </Wrapper>
          </Container>
        </AboutWrapper>
      )
    }}
  />
)

export default About
