import React from 'react';
import { graphql } from 'gatsby';

import Global from '../styles/global';

import Article from '../components/Article';
import Bodytext from '../components/Bodytext';
import Heading from '../components/Heading';
import Branding from '../components/Branding';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Menu from '../components/Menu';
import Seo from '../components/Seo';

import config from '../../content/meta/config';
import menuItems from '../../content/meta/menu';

const NotFoundPage = props => {
  const {
    data: {
      footerLinks: { html: footerLinksHTML },
      copyright: { html: copyrightHTML },
      notFound: { html: notFoundHTML },
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
        <Heading title="NOT FOUND" />
        <Bodytext html={notFoundHTML} />
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

export default NotFoundPage;

export const query = graphql`
  query {
    notFound: markdownRemark(
      fileAbsolutePath: { regex: "/content/parts/notFound/" }
    ) {
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
