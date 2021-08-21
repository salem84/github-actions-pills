const path = require('path');
const _ = require("lodash");
const Promise = require('bluebird');

const { createFilePath } = require(`gatsby-source-filesystem`);
const { execSync } = require("child_process")

const SLUG_SEPARATOR = '___';

exports.createSchemaCustomization =({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }

    type Frontmatter {
      agents: [AgentsYaml] @link
    }
  `
  // Following this method, link works correctly but does not return image (AgentsYaml schema is wrong)
  // createTypes(typeDefs);
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const fileNode = getNode(node.parent);
    const filePath = createFilePath({ node, getNode });

    const source = fileNode.sourceInstanceName;

    const separatorExists = ~filePath.indexOf(SLUG_SEPARATOR);

    let slug;
    let prefix;

    if (separatorExists) {
      const separatorPosition = filePath.indexOf(SLUG_SEPARATOR);
      const slugBeginning = separatorPosition + SLUG_SEPARATOR.length;
      slug =
        separatorPosition === 1
          ? null
          : `/${filePath.substring(slugBeginning)}`;
      prefix = filePath.substring(1, separatorPosition);
    } else {
      slug = filePath;
      prefix = '';
    }

    if (source !== 'parts') {
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      });
    }
    createNodeField({
      node,
      name: `prefix`,
      value: prefix,
    });
    createNodeField({
      node,
      name: `source`,
      value: source,
    });

    // Add Git EditDate
    // if (node.internal.type === "MarkdownRemark") {
    //   const gitAuthorTime = execSync(
    //     `git log -1 --pretty=format:%aI ${node.fileAbsolutePath}`
    //   ).toString()
    //   actions.createNodeField({
    //     node,
    //     name: "gitAuthorTime",
    //     value: gitAuthorTime,
    //   })
    // }
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const pageTemplate = path.resolve('./src/templates/PageTemplate.js');
    const categoryTemplate = path.resolve('./src/templates/CategoryTemplate.js');
    const tagTemplate = path.resolve('./src/templates/TagTemplate.js');


    resolve(
      graphql(`
        {
          allMarkdownRemark(
            filter: { fields: { slug: { ne: null } } }
            limit: 1000
          ) {
            edges {
              node {
                fileAbsolutePath
                fields {
                  slug
                  prefix
                  source
                }
                frontmatter {
                  title
                  categories
                  tags
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const items = result.data.allMarkdownRemark.edges;

        const categorySet = new Set();
        // Create category list
        items.forEach(edge => {
          const {
            node: {
              frontmatter: { categories },
            },
          } = edge;

          if (categories) {
            categories.forEach(category => {
              categorySet.add(category);
            });
          }
        });

        // Create category pages
        const categoryList = Array.from(categorySet);
        categoryList.forEach(category => {
          createPage({
            path: `/categories/${_.kebabCase(category)}/`,
            component: categoryTemplate,
            context: {
              category,
            },
          });
        });

        console.log("Creating tags pages...");

        const tagSet = new Set();
        // Create category list
        items.forEach(edge => {
          const {
            node: {
              frontmatter: { tags },
            },
          } = edge;

          if (tags) {
            tags.forEach(tag => {
              tagSet.add(tag);
            });
          }
        });

        // Create category pages
        const tagList = Array.from(tagSet);
        tagList.forEach(tag => {
          createPage({
            path: `/tags/${_.kebabCase(tag)}/`,
            component: tagTemplate,
            context: {
              tag,
            },
          });
        });


        console.log("Creating pages...");

        // create pages
        items.forEach(({ node }) => {
          const slug = node.fields.slug;
          const source = node.fields.source;

          createPage({
            path: slug,
            component: pageTemplate,
            context: {
              slug,
              source,
            },
          });
        });
      })
    );
  });
};
