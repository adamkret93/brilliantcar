module.exports = {
  pathPrefix: "/brilliantcar",
  siteMetadata: {
    title: `Brilliant Car - Studio Detailingu | Kraków, Modlnica`,
    description: `Brilliant Car - Studio Detailingu - w swojej ofercie posiadamy usługi z zakresu zabezpieczenia pojazdów powłokami ochronnymi oraz bezbarwnymi foliami, renowacji lakierów i ogólnej kosmetyki wnętrz pojazdów.`,
    author: `TimeForIT`,
    author_email: `adamkret93@gmail.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    /* {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `services`,
        path: `${__dirname}/src/`,
      },
    }, */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Brilliant Car - Studio Detailingu`,
        short_name: `Brilliant Car`,
        start_url: `/`,
        background_color: `#141521`,
        theme_color: `#ff9f00`,
        display: `standalone`,
        icon: `src/assets/images/logo.png`, // This path is relative to the root of the site.
        icons: [
          {
            "src": "favicons/icon-48x48.png",
            "sizes": "48x48",
            "type": "image/png"
          },
          {
            "src": "favicons/icon-72x72.png",
            "sizes": "72x72",
            "type": "image/png"
          },
          {
            "src": "favicons/icon-96x96.png",
            "sizes": "96x96",
            "type": "image/png"
          },
          {
            "src": "favicons/icon-144x144.png",
            "sizes": "144x144",
            "type": "image/png"
          },
          {
            "src": "favicons/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "favicons/icon-256x256.png",
            "sizes": "256x256",
            "type": "image/png"
          },
          {
            "src": "favicons/icon-384x384.png",
            "sizes": "384x384",
            "type": "image/png"
          },
          {
            "src": "favicons/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          } 
        ]
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: '', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-google-analytics', // default
          anonymize: true // default
        },
        googleTagManager: {
          trackingId: '', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-google-tagmanager', // default
          dataLayerName: 'dataLayer', // default
        },
        facebookPixel: {
          pixelId: '', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-facebook-pixel', // default
        },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production', 'development']
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
