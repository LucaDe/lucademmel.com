import React from 'react'

import { Layout, Seo, Container } from '../components'

const t = s => s.replace("/n", "<br />")

export default ({ data }) => {
  console.log(data)
  return (
    <Layout showHero title="Imprint">
      <Seo title="Imprint" />
      <Container>
        <div dangerouslySetInnerHTML={{ __html: t(data.contentfulPageInformation.imprint_html.childContentfulRichText.html)}} />
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
