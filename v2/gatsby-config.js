module.exports = {
  siteMetadata: {
    title: `Bitcoincash.org`,
    description: `Money built for you—not banks`,
    author: `@gatsbyjs`,
    themeColours: {
      primary_dark: `#040c3c`,
      primary_light: `#212c6e`,
      secondary_dark: `#bb5a00`,
      secondary_light: `#ff8d00`,
      background_dark: `#f3f3f3`
    }
  },
  assetPrefix: "/v2",
  plugins: [
  {
    resolve: `gatsby-plugin-scroll-reveal`,
    options: {
        threshold: 0.01
    }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `bitcoin-cash-org`,
        short_name: `bchorg`,
        start_url: `/`,
        background_color: `#10243f`,
        theme_color: `#10243f`,
        display: `minimal-ui`,
        icon: `src/assets/images/bitcoin-cash-logo-white-small.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets(\/|\\)icons/
        }
      }
    },
    {
      resolve: `gatsby-plugin-asset-path`
    }
  ],
}
