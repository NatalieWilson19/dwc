const siteUrl = process.env.URL || `https://dwcbuild.biz`

module.exports = {
  siteMetadata: {
    title: "Duncan Wilson Construction",
    descrption: 'General construction company that specalizes in waterproofing.',
    author: 'Natalie Wilson, BS',
    siteUrl: 'https://dwcbuild.biz'
  },
  plugins: ["gatsby-plugin-gatsby-cloud",
  {
    resolve: "gatsby-plugin-sitemap",
      options: {
        output: `/sitemap.xml`,
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }
          allSitePage {
            edges {
              node {
                path
              }
            }
          }
        }
      `,
      resolveSiteUrl: () => siteUrl,
      resolvePages: ({
        allSitePage: { nodes: allPages },
        allWpContentNode: { nodes: allWpNodes },
      }) => {
        const wpNodeMap = allWpNodes.reduce((acc, node) => {
          const { uri } = node
          acc[uri] = node

          return acc
        }, {})

        return allPages.map(page => {
          return { ...page, ...wpNodeMap[page.path] }
        })
      },
      serialize: ({ path, modifiedGmt }) => {
        return {
          url: path,
          lastmod: modifiedGmt,
        }
      },
    },
  },
  ],
}