import React from 'react';
import styled from 'styled-components';

const HeadingWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: ${props => props.theme.spacing.l};
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
  animation: rotate 4s linear 3;
  z-index: 1;

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export default ({ text }) => (
  <HeadingWrapper>
    <Triangle viewBox="0 0 56 54" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.92439 53L28 2.19018L54.0756 53H1.92439Z" stroke="white" strokeWidth="2"/>
    </Triangle>
    <Heading>{text}</Heading>
  </HeadingWrapper>
);
