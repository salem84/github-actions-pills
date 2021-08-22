import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Global from '../styles/global';

import Branding from '../components/Branding';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Menu from '../components/Menu';
import Seo from '../components/Seo';
import CategoriesBox from '../components/CategoriesListbox';

import config from '../../content/meta/config';
import menuItems from '../../content/meta/menu';
import categoryList from '../../content/meta/categories';

const IndexPage = props => {
  const {
    data: {
      hero: { html: heroHTML },
      logo: {
        childImageSharp: { fluid: logoFluid },
      },
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
      <Hero>
        <div dangerouslySetInnerHTML={{ __html: heroHTML }} />
        {/* <Img fluid={logoFluid} className="image" /> */}
      </Hero> 
      <CategoriesBox categoryList={categoryList} />
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

export default IndexPage;

export const query = graphql`
  query {
    
    hero: markdownRemark(fileAbsolutePath: { regex: "/content/parts/hero/" }) {
      html
    }

    logo: file(relativePath: { regex: "/azure-devops-github-storage-account.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;


