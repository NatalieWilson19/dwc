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
    resolve: `gatsby-plugin-sitemap`,
    options: {
      query: `{
        site {
          siteMetadata {
            siteUrlNoSlash
          }
        }
        allSitePage {
          edges {
            node {
              path
            }
          }
        }
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }`,
      serialize: ({ site, allSitePage, allMarkdownRemark }) => {
        let pages = []
        allSitePage.edges.map(edge => {
          pages.push({
            url: site.siteMetadata.siteUrlNoSlash + edge.node.path,
            changefreq: `daily`,
            priority: 0.7,
          })
        })
        allMarkdownRemark.edges.map(edge => {
          pages.push({
            url: `${site.siteMetadata.siteUrlNoSlash}/${
              edge.node.fields.slug
            }`,
            changefreq: `daily`,
            priority: 0.7,
          })
        })

        return pages
      },
    },
  },
  ],
}