import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import 'prismjs/themes/prism-okaidia.css';
// import '../styles/variables';
import Global from '../styles/global';

import Article from '../components/Article';
import Branding from '../components/Branding';
import Bodytext from '../components/Bodytext';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Heading from '../components/Heading';
import Layout from '../components/Layout';
import Menu from '../components/Menu';
import Seo from '../components/Seo';
import Sidebar from '../components/Sidebar';
import ArticleAuthor from '../components/ArticleAuthor';
import ArticleEdit from '../components/ArticleEdit';
import ArticleAgents from '../components/ArticleAgents';
import ArticleTags from '../components/ArticleTags';
import Search from '../components/Search';

import layoutSidebar from '../styles/layoutSidebar';

import config from '../../content/meta/config';
import menuItems from '../../content/meta/menu';
import categoryList from '../../content/meta/categories';

/** @jsx jsx */
import { jsx } from '@emotion/react'
import Discussions from '../components/Discussions';
import { Utterances } from '../components/Utterances';
import { SocialShare } from '../components/SocialShare';

const DEFAULT_GIT_FIELDS = {
  gitLogLatestDate: Date.now(),
  gitLogLatestAuthorName: 'UnknownUser',
  gitLogLatestAuthorEmail: 'unknown@nomail.it'
}

const PageTemplate = props => {
  const {
    location: { pathname },
    data: {
      page: {
        html: pageHTML,
        frontmatter: { title, agents, tags },
        fields: { slug, source },
        parent: { relativeDirectory, fields: fields },
        excerpt,
      },
      pages: { edges: nodePages },
    },
  } = props;

  // So avoid errors on new post without Git information
  const { gitLogLatestDate, gitLogLatestAuthorEmail, gitLogLatestAuthorName } = fields || DEFAULT_GIT_FIELDS;

  const {
    headerTitle,
    headerSubTitle,
    siteUrl,
    siteLanguage,
    siteTitlePostfix,
    contentRepoUrl
  } = config;

  const pages = nodePages.map(item => item.node);
  const layoutStyle = source === 'docs' ? layoutSidebar : undefined;

  return (
    <React.Fragment>
      <Global />
      {layoutStyle && (
        <Sidebar
          title={headerTitle}
          pages={pages}
          categoryList={categoryList}
          pathname={slug}
        />
      )}
      <Layout themeStyle={layoutStyle}>
        <Header>
          {/* <Branding title={headerTitle} subTitle={headerSubTitle} /> */}
          <Search />
          <Menu items={menuItems} />
        </Header>
        <Article>
          <Heading title={title} />
          <Bodytext html={pageHTML} />
          <ArticleAgents agentList={agents} />
          <ArticleTags tagList={tags} />
          <ArticleAuthor authorUsername={gitLogLatestAuthorName} />
          <ArticleEdit lastEdit={gitLogLatestDate} contentRepoUrl={config.contentRepoUrl} relativeDirectory={relativeDirectory} />
          <SocialShare />
          {/* <Discussions /> */}
          <Utterances />
        </Article>
        <Footer />
        <Seo
          url={`${siteUrl}${slug}`}
          language={siteLanguage}
          title={`${title}${siteTitlePostfix}`}
          description={excerpt}
        />
      </Layout>
    </React.Fragment>
  );
};

PageTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

export default PageTemplate;

export const query = graphql`
  query PageTemplateQuery($slug: String!) {
    page: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      fileAbsolutePath
      fields {
        slug
        prefix
        source
      }
      frontmatter {
        title
        category
        tags
        agents {
          id
          type
          icon {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
      parent {
        ... on File {
          relativeDirectory
          fields {
            gitLogLatestAuthorName
            gitLogLatestAuthorEmail
            gitLogLatestDate
          }
        }
      }
    }
    pages: allMarkdownRemark(
      filter: { fields: { source: { eq: "docs" } } }
      sort: { fields: [fields___prefix] }
    ) {
      edges {
        node {
          fields {
            slug
            prefix
          }
          frontmatter {
            title
            shortTitle
            category
          }
          headings {
            value
            depth
          }
          tableOfContents
        }
      }
    }
  }
`;