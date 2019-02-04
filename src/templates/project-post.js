import React from 'react'
import styled from 'styled-components'

import { Layout, Container, Seo, Hero } from '../components'

const Content = styled.div`
  padding-top: ${props => props.theme.spacing.m}
`

export default ({ pageContext, location }) => {
  const { node } = pageContext;
  const color = location.state ? location.state.color : 'white' 
  return (
    <Layout background={color} title={node.title}>
      <Seo title={node.title} />
      <Container>
        {node.content && (
          <Content dangerouslySetInnerHTML={{ __html: node.content.childContentfulRichText.html }}></Content>
        )}
      </Container>
    </Layout>
  )
}
