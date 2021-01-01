module.exports = {
  siteMetadata: {
    title: `Ho' Space`,
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
      {
        resolve: `gatsby-remark-prismjs`,
        options: {
          classPrefix: "language-",
          inlineCodeMarker: null,
          aliases: {},
          showLineNumbers: true,
          noInlineHighlight: false,
        },
      },
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          plugins: [
            {
              resolve: `gatsby-remark-prismjs`,
              options: {
                classPrefix: "language-",
                inlineCodeMarker: null,
                aliases: {},
                showLineNumbers: false,
                noInlineHighlight: false,
              },
            },
          ],
        },
      },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}

