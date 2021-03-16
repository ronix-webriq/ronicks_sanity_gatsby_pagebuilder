module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
     {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: "1rp6nppz",
        dataset: "production",
        watchMode: true,
        overlayDrafts: true,
        token: 'skQ3DWpViEWmSbrd7HOK8rfSFFbl8jIhlmcjjzVw5Fz2yKPQ5wO1PRQAQbmUDJpUxoROV0qvTiMQt9kdr7PZnoSLlJ9cs1eRctFpBwhIMlyowfcxuYoyBwRlI0O5J3MwSuIi4Dtzw981gDFjR3FCJNV28XGXzZIXcEYI6mh5uo7I9W2bYjgS'
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    // {
    //   resolve: `gatsby-plugin-material-ui`,
    //   options: {
    //     stylesProvider: {
    //       injectFirst: true,
    //     },
    //   },
    // },
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
  
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.        
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
