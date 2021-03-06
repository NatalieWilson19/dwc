const siteUrl = process.env.URL || `https://dwcbuild.biz`

module.exports = {
  siteMetadata: {
    title: "Duncan Wilson Construction",
    descrption: 'General construction company that specalizes in waterproofing.',
    author: 'Natalie Wilson, BS',
    siteUrl: 'https://dwcbuild.biz'
  },
  plugins: ["gatsby-plugin-gatsby-cloud", "gatsby-plugin-sitemap", "gatsby-plugin-robots-txt",
  {
    resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/favicon-32x32.png`,
  }
  }
],
}