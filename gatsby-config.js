require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Luca Demmel`,
    description: `Bringing visions to real life. Transforming ideas to valuable digital products developed with technical excellence.`,
    author: `@lucademmel`,
    facebook: `https://www.facebook.com/luca.demmel`,
    instagram: `https://www.instagram.com/lucademmel`,
    xing: `https://www.xing.com/profile/Luca_Demmel`,
    linkedin: `https://www.linkedin.com/in/luca-demmel`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bringing Visions to real life | lucademmel.com`,
        short_name: ` lucademmel.com`,
        start_url: `/`,
        background_color: `white`,
        theme_color: `white`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    '@contentful/gatsby-transformer-contentful-richtext',
    'gatsby-plugin-offline',
  ],
}
