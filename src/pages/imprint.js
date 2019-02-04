import React from 'react'
import { graphql } from 'gatsby'

import { Layout, Seo, Container } from '../components'

export default ({ data }) => {
  const title = 'Imprint'
  return (
    <Layout title={title}>
      <Seo title={title} />
      <Container>
        <div dangerouslySetInnerHTML={{ __html: data.contentfulPageInformation.imprint_html.childContentfulRichText.html}} />
      </Container>
    </Layout>
  )
}

export const query = graphql`{
  contentfulPageInformation {
    imprint_html {
      childContentfulRichText {
        html
      }
    }
  }
}`
