import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from "styled-components"

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  max-width: ${props => props.theme.containerWidth};;
  padding: ${props => props.theme.spacing.l} 0 0 0;
`;

const BrandWrapper = styled.div`
  flex: 1;
  font-weight: 600;
  font-size: ${props => props.theme.font.l};
`;

const NavigationWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 5;
  font-size: ${props => props.theme.font.s};
`;

const NavigationList = styled.ul`
  list-style: none;
  display: flex;

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

const navItemBuilder = (link, title) => ({ link, title });

const navItems = [
  navItemBuilder('#', 'Home'),
  navItemBuilder('#', 'About'),
  navItemBuilder('#', 'Projects'),
];

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <BrandWrapper>
      <Link to="#">{siteTitle}</Link>
    </BrandWrapper>
    <NavigationWrapper>
      <NavigationList>
        {navItems.map(({ link, title }, index) => (
          <li key={index}>
           <Link to={link}>{title}</Link>
          </li>
        ))}
      </NavigationList>
    </NavigationWrapper>    
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
