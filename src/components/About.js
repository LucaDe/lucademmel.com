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
  ${media.phone`padding: 0;`}
`

const Text = styled.p`
  font-weight: 300;
`

const Social = styled.div`
  width: 30%;
  ${media.tablet`width: 100%;`}
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
                <AboutText>Das Gefühl digitale Produkte und Erlebnisse, die zur Verbesserung des Status quo beitragen, zu entwickeln treibt mich an. 💯</AboutText>
              </AboutRow>
              <Text>Neben der strategischen Ausrichtung von Incudy, sowie der Erweiterung unseres Teams kümmere ich mich primär um die technische Umsetzung unserer Projekte.
Dabei sorge ich dafür, dass die Visionen unserer Incudy Founder und Klienten technisch immer mittels State of the Art Technologien realisiert werden.
Wenn ich nicht gerade in Meetings oder an der Tastatur bin, spiele ich Tennis, bin Tauchen oder beim Ski-Fahren ✌🏼</Text>
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
