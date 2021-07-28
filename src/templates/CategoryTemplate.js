import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import TagIcon from 'react-feather/dist/icons/tag';

import 'prismjs/themes/prism-okaidia.css';
// import '@react-website-themes/default/styles/variables';
// import '@react-website-themes/default/styles/global';

import Article from '../components/Article';
import Branding from '../components/Branding';
import Bodytext from '../components/Bodytext';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Heading from '../components/Heading';
import Layout from '../components/Layout';
import Menu from '../components/Menu';
import Seo from '../components/Seo';
import List from '../components/List';
import Sidebar from '../components/Sidebar';
import ArticleFooter from '../components/ArticleFooter';
import Search from '../components/Search';

import config from '../../content/meta/config';
import menu from '../../content/meta/menu';

const PageTemplate = props => {
  const {
    pageContext: { category },
    data: {
      posts: { totalCount, edges },
      footerLinks: { html: footerLinksHTML },
      copyright: { html: copyrightHTML },
    },
  } = props;

  const items = edges;//edges.map(edge => edge.node);

  const {
    headerTitle,
    headerSubTitle,
    siteUrl,
    siteDescription,
    siteLanguage,
    siteTitlePostfix,
    siteImage,
  } = config;

  return (
    <Layout>
      <Header>
        <Branding title={headerTitle} subTitle={headerSubTitle} />
        <Menu items={menu} />
      </Header>
      <Article>
        <Heading>
          <span>Posts in category</span> <TagIcon />
          <h1>{category}</h1>
          <p className="meta">
            There {totalCount > 1 ? 'are' : 'is'} <strong>{totalCount}</strong>{' '}
            post
            {totalCount > 1 ? 's' : ''} in the category.
          </p>
        </Heading>
        <List edges={items} />
      </Article>
      <Footer links={footerLinksHTML} copyright={copyrightHTML} />
      <Seo
        url={`${siteUrl}/categories/${category}/`}
        language={siteLanguage}
        title={`Posts in category: ${category}${siteTitlePostfix}`}
        description={siteDescription}
        image={siteImage}
      />
    </Layout>
  );
};

PageTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

export default PageTemplate;

export const query = graphql`
  query CategoryTemplateQuery($category: String!) {
    posts: allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___prefix], order: DESC }
      filter: { frontmatter: { categories: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            categories
          }
        }
      }
    }
    footerLinks: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/footerLinks/" }
    ) {
      html
    }
    copyright: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/copyright/" }
    ) {
      html
    }
  }
`;