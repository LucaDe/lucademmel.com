import styled from 'styled-components';

import { media } from '../theme'

const Button = styled.a`
  padding: ${props => props.theme.spacing.xs};
  margin: ${props => props.theme.spacing.xs};
  display: inline-block;
  background-color: ${props => props.inline ? props.theme.colors.white : props.theme.colors.primary};
  text-align: center;
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.inline ? props.theme.colors.primary : props.theme.colors.white};
  border: ${props => props.inline ? `2px solid ${props.theme.colors.primary}` : 0};
  font-weight: 600;
  font-size: ${props => props.theme.font.m};
  ${media.desktop`font-size: ${props => props.theme.font.s};`}
  transition: .3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

export default Button
