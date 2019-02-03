import React from 'react'
import { graphql } from 'gatsby'

import { Seo, Layout, Hero, Projects, About } from '../components'

/* 
* - Cache Google Font locally to prevent font flashing
 * - Implement theme (X)
 * - Media Queries
 * - Sections
 * - Backend / Multilanguage (?)
 */

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Home" keywords={[`tech`, `business`, `react`]} />
      <Hero slogan={data.contentfulHome.slogan} />
      <Projects projects={data.allContentfulPosts.edges} />
      <About />
    </Layout>
  )
}

export default IndexPage

export const query2 = graphql`{
  contentfulHome {
    id
    slogan
  }

  allContentfulPosts {
    edges {
      node {
        id
        title
        tags
      }
    }
  }
}`
