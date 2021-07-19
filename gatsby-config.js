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
      serialize: ({ site, allSitePage }) => {
        const links = [];
        for (let i = 0; i < allSitePage.edges.length; i++) {
          const { path } = allSitePage.edges[i].node;
          if (
            /products|404|unsupported|account/.test(path)
          ) {
            continue;
          } else if (/en-us|es-us/.test(path)) {
            links.push({
              url: site.siteMetadata.siteUrl + path,
              changefreq: 'daily',
              priority: 0.8,
            });
          }
        }
        return links;
      },
    },
  },
  ],
}