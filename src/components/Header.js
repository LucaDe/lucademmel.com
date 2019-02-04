import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Container from './Container';
import { media } from '../theme';

const HeaderWrapper = styled.header`
  padding: ${props => props.theme.spacing.l} 0 0 0;
  background: ${props => props.background ? props.background : props.theme.colors.white};
`;

const NavigationWrapper = styled(Container)`
  display: flex;
  ${media.phone`flex-direction: column;`}
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`

const BrandWrapper = styled.div`
  font-weight: 600;
  font-size: ${props => props.theme.font.l};
`;

const NavigationItemWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: ${props => props.theme.font.s};
`;

const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;

  li {
    padding: ${props => props.theme.spacing.s};

    a {
      position: relative;
      transition: .3s ease-in;

      &:before, &:after {
        position: absolute;
        opacity: 0;
        width: 0%;
        height: 1px;
        content: '';
        background: ${props => props.theme.colors.primary};
        transition: all 0.3s;
      }

      &:before {
        left: 0;
        top: 0;
      }

      &:after {
        right: 0;
        bottom: 0;
      }

      &:hover:after, &:hover:before {
        width: 100%;
        opacity: 1;
      }
    }
  }
`;

const n = (link, title) => ({ link, title });

const navItems = [
  n('#hero', 'Home'),
  n('#projects', 'Projects'),
  n('#about', 'About'),
];

const Header = ({ siteTitle, background, hero }) => (
  <HeaderWrapper background={background}>
    <NavigationWrapper>
      <BrandWrapper>
        <Link to="#">{siteTitle}</Link>
      </BrandWrapper>
      <NavigationItemWrapper>
        <NavigationList>
          {navItems.map(({ link, title }, index) => (
            <li key={index}>
            <Link to={link}>{title}</Link>
            </li>
          ))}
        </NavigationList>
      </NavigationItemWrapper>
    </NavigationWrapper>
    {hero}
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  hero: PropTypes.node,
  background: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  hero: null,
  background: null,
}

export default Header
