import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header'
import Footer from './Footer'
import theme from '../theme'
import '../global.css'

const PageWrapper = styled.div`
  margin: 0 auto;
  font-family: ${props => props.theme.fontFamily}
`;

const Hero = styled.header`
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

const Layout = ({ children, showHero, title }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <>
          <PageWrapper>
            <Header siteTitle={data.site.siteMetadata.title} />
            {showHero && (
                <Hero>
                  <HeroHeadline>{title}</HeroHeadline>
                </Hero>
            )}
            {children}
            <Footer />
          </PageWrapper>
         </>
      </ThemeProvider>
    )}
  />
)

Layout.defaultProps = {
  showHero: false,
  title: '',
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  showHero: PropTypes.bool,
  title: PropTypes.string
}

export default Layout
