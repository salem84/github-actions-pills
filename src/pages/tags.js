import React from 'react';
import { graphql } from 'gatsby';
import { TagCloud } from 'react-tagcloud'

import Global from '../styles/global';

import Article from '../components/Article';
import Heading from '../components/Heading';
import Branding from '../components/Branding';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Menu from '../components/Menu';
import Seo from '../components/Seo';
import ListPages from '../components/ListPages';

import config from '../../content/meta/config';
import menuItems from '../../content/meta/menu';
import categoryList from '../../content/meta/categories';

const TagsPage = props => {
  const {
    data: {
      pages: { group: tagsData },
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

  return (
    <Layout>
      <Global />
      <Header>
        <Branding title={headerTitle} subTitle={headerSubTitle} />
        <Menu items={menuItems} />
      </Header>
      <Article>
        <Heading title="Tags" />
        <TagCloud
            minSize={12}
            maxSize={35}
            tags={tagsData}
            onClick={tag => alert(`'${tag.value}' was selected!`)}
        />
        {/* <ListPages pages={pages} categoryList={categoryList} /> */}
      </Article>
      <Footer />
      <Seo
        url={siteUrl}
        language={siteLanguage}
        title={siteTitle}
        description={siteDescription}
      />
    </Layout>
  );
};

export default TagsPage;

export const query = graphql`
  query {
    pages: allMarkdownRemark(
      filter: { fields: { source: { eq: "docs" } } }
      sort: { fields: [fields___prefix] }
    ) {
      group(field: frontmatter___tags) {
        value: fieldValue
        count: totalCount
      }
    }
    hero: markdownRemark(fileAbsolutePath: { regex: "/content/parts/hero/" }) {
      html
    }
  }
`;
