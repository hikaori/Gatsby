module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'hikaori',
  },
  plugins: [
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    'gatsby-plugin-mdx',
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'pages',
    //     path: './src/pages/',
    //   },
    //   __key: 'pages',
    // },
  ],
};
