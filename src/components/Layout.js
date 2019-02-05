import React from 'react'
import PropTypes from 'prop-types'
import 'intersection-observer'
import styled, { ThemeProvider } from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'

import Header from './Header'
import Footer from './Footer'
import theme from '../theme'
import '../global.css'
import Hero from './Hero';
import { CookieBanner } from '.';

const PageWrapper = styled.div`
  margin: 0 auto;
  font-family: ${props => props.theme.fontFamily}
`;

const Layout = ({ children, background, title, hero }) => {
  let heroComponent = hero
  if (title) {
    heroComponent = <Hero title={title} />
  }
  return (
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
              <Header background={background} siteTitle={data.site.siteMetadata.title} hero={heroComponent} />
              {children}
              <Footer />
              <CookieBanner />
            </PageWrapper>
          </>
        </ThemeProvider>
      )}
    />
  )
}

Layout.defaultProps = {
  hero: false,
  title: '',
  background: null,
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  hero: PropTypes.oneOfType([PropTypes.node, PropTypes.bool]),
  background: PropTypes.string,
  title: PropTypes.string
}

export default Layout
