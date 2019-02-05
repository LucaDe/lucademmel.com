import React from 'react'
import styled from 'styled-components'
import Particles from 'react-particles-js'
import { Spring, animated } from 'react-spring'

import { particleConfig, media } from '../theme'
import Button from './Button'
import Container from './Container'

const HeroWrapper = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  height: 80vh;
  min-height: 600px;
  position: relative;
`;

const Left = styled(animated.div)`
  flex: 1;
  padding-top: ${props => props.theme.spacing.xxl};
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
  min-width: 280px;
`;

const Caption = styled(animated.h1)`
  font-size: ${props => props.theme.font.xxl};
  ${media.desktop`font-size: ${props => props.theme.font.xl}`}
  font-weight: bold;
`;

const Right = styled.div`
  flex: 1;
  padding-top: ${props => props.theme.spacing.xl};
  height: 100%;
  min-width: 280px;
`;

const IndexHero = ({ slogan }) => (
  <HeroWrapper id="hero">
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
    >
      {props =>  
        <Left style={props}>
          <Caption>{slogan}</Caption>
          <p>
            Ideas are everywhere. I focus on transforming them to digital products and bringing them to real life using state of the art technologies.
          </p>
          <Button href="#projects">Projects</Button>
          <Button inline href="#about">More about me</Button>
        </Left>
      }
    </Spring>
    <Right>
      <Particles height={500} params={particleConfig} />
    </Right>
  </HeroWrapper>
)

export default IndexHero
