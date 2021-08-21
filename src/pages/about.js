import React from 'react';
import { graphql } from 'gatsby';

import Global from '../styles/global';

import Branding from '../components/Branding';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Heading from '../components/Heading';
import Article from '../components/Article';
import Layout from '../components/Layout';
import Menu from '../components/Menu';
import Seo from '../components/Seo';

import config from '../../content/meta/config';
import menuItems from '../../content/meta/menu';

const AboutPage = props => {
  const {
    data: {
      footerLinks: { html: footerLinksHTML },
      about: { html: aboutHTML },
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

  return (
    <Layout>
      <Global />
      <Header>
        <Branding title={headerTitle} subTitle={headerSubTitle} />
        <Menu items={menuItems} />
      </Header>
      <Article>
        <Heading title="About" />
        <div dangerouslySetInnerHTML={{ __html: aboutHTML }} />
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

export default AboutPage;

export const query = graphql`
  query {
    
    about: markdownRemark(fileAbsolutePath: { regex: "/content/parts/about/" }) {
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


