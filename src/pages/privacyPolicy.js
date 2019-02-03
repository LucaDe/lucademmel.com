import React from 'react'

import { Layout, Seo, Container } from '../components'

const t = s => s.replace("/n", "<br />")

export default ({ data }) => (
    <Layout showHero title="Privacy Notice">
    <Seo title="Dataprivacy" />
    <Container>
      <div dangerouslySetInnerHTML={{ __html: t(data.contentfulPageInformation.privacypolicy_html.childContentfulRichText.html)}} />
    </Container>
  </Layout>
)

export const query = graphql`{
  contentfulPageInformation {
    privacypolicy_html {
      childContentfulRichText {
        html
      }
    }
  }
}`
