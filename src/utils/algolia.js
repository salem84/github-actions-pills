const docsQuery = `{
    docs: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/docs/" } }
    ) {
      edges {
        node {
          objectID: id
          fields {
            slug
          }
          frontmatter {
            title
            categories
          }
          excerpt(pruneLength: 5000)
        }
      }
    }
  }`

  
const flatten = arr =>
  arr.map(({ node: { frontmatter, ...rest } }) => ({
    ...frontmatter,
    ...rest,
  }))
const settings = { attributesToSnippet: [`excerpt:20`] }

const queries = [
  {
    query: docsQuery,
    transformer: ({ data }) => flatten(data.docs.edges),
    indexName: `Docs`,
    settings,
  },
]

module.exports = queries
