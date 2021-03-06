import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { SocialIcons } from '../components'

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  padding-bottom: ${props => props.theme.spacing.m};
`;

const NavList = styled.div`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  margin: 0 0 ${props => props.theme.spacing.s} 0;
  padding: 0;
`

const NavItem = styled(Link)`
  margin-right: ${props => props.theme.spacing.s};
  margin-left: ${props => props.theme.spacing.s};
  margin-top: ${props => props.theme.spacing.s};
  transition: .1s ease;
  min-width: 110px;

  &:hover {
    transform: translateY(-5px);
  }
`

const Footer = () => (
  <FooterWrapper>
    <NavList>
      <NavItem to="">Home</NavItem>
      <NavItem to="imprint">Imprint</NavItem>
      <NavItem to="privacyPolicy">Privacy Policy</NavItem>
    </NavList>
    <SocialIcons />
    © {new Date().getFullYear()}, Luca Demmel
  </FooterWrapper>
)

export default Footer