import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import TagIcon from 'react-feather/dist/icons/tag';

import 'prismjs/themes/prism-okaidia.css';
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
import List from '../components/List';
import Sidebar from '../components/Sidebar';
import Search from '../components/Search';

import config from '../../content/meta/config';
import menu from '../../content/meta/menu';

const PageTemplate = props => {
  const {
    pageContext: { tag },
    data: {
      posts: { totalCount, edges },
      footerLinks: { html: footerLinksHTML },
      copyright: { html: copyrightHTML },
    },
  } = props;


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
        <Global />
        <Header>
            <Branding title={headerTitle} subTitle={headerSubTitle} />
            <Menu items={menu} />
        </Header>
        <Article>
            <Heading>
            {/* <span>Pills in category</span> */}
            <h1>{tag}</h1>
            <p className="meta">
                There {totalCount > 1 ? 'are' : 'is'} <strong>{totalCount}</strong>{' '}
                pill
                {totalCount > 1 ? 's' : ''} with this tag.
            </p>
            </Heading>
            <List edges={edges} />
        </Article>
        <Footer links={footerLinksHTML} copyright={copyrightHTML} />
        <Seo
            url={`${siteUrl}/tags/${tag}/`}
            language={siteLanguage}
            title={`Pills with tag: ${tag}${siteTitlePostfix}`}
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
  query TagTemplateQuery($tag: String!) {
    posts: allMarkdownRemark(
      limit: 1000
      sort: { fields: [fields___prefix], order: DESC }
      filter: { frontmatter: { tags: { eq: $tag } } }
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
            tags
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