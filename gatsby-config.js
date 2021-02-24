module.exports = {
  siteMetadata: {
    title: `Ho'Space`,
    description: `This blog is powered by gatsby`,
    author: `ho-s`,
    siteUrl: 'https://ho-space.netlify.app',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
      name: `markdown-pages`,
      path: `${__dirname}/markdowns/md`,
      },
      },
      
    {
      resolve: `gatsby-source-filesystem`,
      options: {
      name: `markdown-pages`,
      path: `${__dirname}/markdowns/linkedmd`,
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
            {
              resolve: `gatsby-remark-autolink-headers`,
              options: {
                maintainCase: false, 
                removeAccents: true,
                elements: [`h2`, 'h3', `h4`],
              },
            },
          ],
        },
      },
      {
        resolve: 'gatsby-plugin-robots-txt',
        options: {
          host: 'https://ho-space.netlify.app',
          sitemap: 'https://ho-space.netlify.app/sitemap.xml',
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

