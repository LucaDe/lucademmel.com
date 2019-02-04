import React from 'react'
import styled from 'styled-components'

const HeroWrapper = styled.header`
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeroHeadline = styled.h1`
  font-size: ${props => props.theme.font.l};
  color: ${props => props.theme.colors.primary};
  position: relative;

  &:after {
    content: '';
    width: 80%;
    height: 3px;
    background: ${props => props.theme.colors.primary};
    position: absolute;
    bottom: -5px;
    left: 10%;
  }
`

const Hero = ({ title }) => (
  <HeroWrapper>
    <HeroHeadline>{title}</HeroHeadline>
  </HeroWrapper>
)

export default Hero
