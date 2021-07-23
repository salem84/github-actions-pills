import React from 'react';
import { graphql } from 'gatsby';

import Global from '../classy-docs/styles/global';

import Article from '../classy-docs/components/Article';
import Heading from '../classy-docs/components/Heading';
import Branding from '../classy-docs/components/Branding';
import Footer from '../classy-docs/components/Footer';
import Header from '../classy-docs/components/Header';
import Layout from '../classy-docs/components/Layout';
import Menu from '../classy-docs/components/Menu';
import Seo from '../classy-docs/components/Seo';
import List from '../classy-docs/components/List';

import config from '../../content/meta/config';
import menuItems from '../../content/meta/menu';
import categoryList from '../../content/meta/categories';

const ContentPage = props => {
  const {
    data: {
      pages: { edges: rawPages },
      footerLinks: { html: footerLinksHTML },
      copyright: { html: copyrightHTML },
    },
  } = props;

  const {
    headerTitle,
    headerSubTitle,
    siteUrl,
    siteTitle,
    siteDescription,
    siteLanguage,
  } = config;

  const pages = rawPages.map(page => page.node);

  return (
    <Layout>
      <Global />
      <Header>
        <Branding title={headerTitle} subTitle={headerSubTitle} />
        <Menu items={menuItems} />
      </Header>
      <Article>
        <Heading title="Table of content" />
        <List pages={pages} categoryList={categoryList} />
      </Article>
      <Footer links={footerLinksHTML} copyright={copyrightHTML} />
      <Seo
        url={siteUrl}
        language={siteLanguage}
        title={siteTitle}
        description={siteDescription}
      />
    </Layout>
  );
};

export default ContentPage;

export const query = graphql`
  query {
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
            categories
          }
        }
      }
    }
    hero: markdownRemark(fileAbsolutePath: { regex: "/content/parts/hero/" }) {
      html
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
