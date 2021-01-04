module.exports = {
  siteMetadata: {
    title: `Ho' Space`,
    description: `This blog is powered by gatsby`,
    author: `ho-s`,
    siteUrl: 'https://ho-s.surge.sh',
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
      {
        resolve: 'gatsby-plugin-robots-txt',
        options: {
          host: 'https://ho-s.surge.sh',
          sitemap: 'https://ho-s.surge.sh/sitemap.xml',
          policy: [{
            userAgent: '*',
            allow: '/'
          }]
        }
      },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-sitemap'
  ],
}

