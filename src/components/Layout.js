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
  font-family: ${props => props.theme.fontFamily};
`;

const Layout = ({ children }) => (
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
            {children}
          </PageWrapper>
          <Footer />
         </>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
