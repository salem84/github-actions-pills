import React from 'react';
import { graphql } from 'gatsby';

import Global from '../styles/global';
import Layout from '../components/Layout';

import Branding from '../components/Branding';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Seo from '../components/Seo';

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