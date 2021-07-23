import React from 'react';
import { graphql } from 'gatsby';

import Global from '../classy-docs/styles/global';
import Layout from '../classy-docs/components/Layout';

import Branding from '../classy-docs/components/Branding';
import Footer from '../classy-docs/components/Footer';
import Header from '../classy-docs/components/Header';
import Menu from '../classy-docs/components/Menu';
import Seo from '../classy-docs/components/Seo';

import Search from "../components/search";

import config from '../../content/meta/config';
import menuItems from '../../content/meta/menu';

const SearchPage = props => {
  const {
    data: {
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


    return (
      <Layout>
      <Global />
      <Header>
        <Branding title={headerTitle} subTitle={headerSubTitle} />
        <Menu items={menuItems} />
      </Header>
      <Search/>
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
  
  export default SearchPage;
  
  export const query = graphql`
  query {

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