import React from 'react'

import { Layout, Seo, Container } from '../components'

const t = s => s.replace("/n", "<br />")

export default ({ data }) => {
  const title = 'Privacy Notice'
  return (
    <Layout title={title}>
      <Seo title={title} />
      <Container>
        <div dangerouslySetInnerHTML={{ __html: t(data.contentfulPageInformation.privacypolicy_html.childContentfulRichText.html)}} />
      </Container>
    </Layout>
  )
}

export const query = graphql`{
  contentfulPageInformation {
    privacypolicy_html {
      childContentfulRichText {
        html
      }
    }
  }
}`
