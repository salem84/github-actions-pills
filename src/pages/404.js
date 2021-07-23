import React from 'react';
import { graphql } from 'gatsby';

import Global from '../classy-docs/styles/global';

import Article from '../classy-docs/components/Article';
import Bodytext from '../classy-docs/components/Bodytext';
import Heading from '../classy-docs/components/Heading';
import Branding from '../classy-docs/components/Branding';
import Footer from '../classy-docs/components/Footer';
import Header from '../classy-docs/components/Header';
import Layout from '../classy-docs/components/Layout';
import Menu from '../classy-docs/components/Menu';
import Seo from '../classy-docs/components/Seo';

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
