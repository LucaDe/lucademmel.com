import React from 'react';
import styled from 'styled-components';

import { media } from '../theme'

const HeadingWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: ${props => props.theme.spacing.l};
    ${media.phone`padding: ${props => props.theme.font.xl} 0`}
`;

const Heading = styled.h2`
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.font.xl};
  margin-left: ${props => props.theme.spacing.m};
  z-index: 1;
`;

const Triangle = styled.svg`
  width: 56px;
  height: 54px;
  z-index: 1;
`;

export default ({ text }) => (
  <HeadingWrapper>
    <Triangle viewBox="0 0 56 54" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.92439 53L28 2.19018L54.0756 53H1.92439Z" stroke="white" strokeWidth="2"/>
    </Triangle>
    <Heading>{text}</Heading>
  </HeadingWrapper>
);
