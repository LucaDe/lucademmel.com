const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve(`src/templates/project-post.js`)
    // Query for contentful projects
    resolve(
      graphql(
        `
        {
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
              }
            }
          }
        }`
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        // Create pages for each project.
        result.data.allContentfulPosts.edges.forEach(({ node }) => {
          const path = `projects/${node.title.trim().replace(/ /g, '-').toLowerCase()}`
          createPage({
            path,
            component: postTemplate,
            // In your blog post template's graphql query, you can use path
            // as a GraphQL variable to query for data from the markdown file.
            context: {
              node
            },
          })
        })
      })
    )
  })
}
