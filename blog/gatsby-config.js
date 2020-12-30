module.exports = {
  siteMetadata: {
    title: `Ho-s' blog`,
    description: ``,
    author: `ho-s`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
      name: `markdown-pages`,
      path: `${__dirname}/src/md`,
      },
      },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
      name: `markdown-pages`,
      path: `${__dirname}/src/linkedmd`,
      },
      },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}

