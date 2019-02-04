import React from 'react'
import { graphql } from 'gatsby'

import { Seo, Layout, IndexHero, Projects, About } from '../components'

/* 
* ToDo's
* - Cache Google Font locally to prevent font flashing 
*/

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Home" keywords={[`tech`, `entrepreneurship`, `business`, `development`, `startups`]} />
      <IndexHero slogan={data.contentfulPageInformation.slogan} />
      <Projects projects={data.allContentfulPosts.edges} />
      <About />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`{
  contentfulPageInformation {
    slogan
  }

  allContentfulPosts {
    edges {
      node {
        id
        title
        content {
          childContentfulRichText {
            html
          }
        }
        tags
      }
    }
  }
}`
