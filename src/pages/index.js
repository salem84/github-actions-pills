import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Global from '../classy-docs/styles/global';

import Branding from '../classy-docs/components/Branding';
import Footer from '../classy-docs/components/Footer';
import Header from '../classy-docs/components/Header';
import Hero from '../classy-docs/components/Hero';
import Layout from '../classy-docs/components/Layout';
import Menu from '../classy-docs/components/Menu';
import Seo from '../classy-docs/components/Seo';

import config from '../../content/meta/config';
import menuItems from '../../content/meta/menu';

const IndexPage = props => {
  const {
    data: {
      footerLinks: { html: footerLinksHTML },
      hero: { html: heroHTML },
      copyright: { html: copyrightHTML },
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
        <Img fluid={logoFluid} className="image" />
        <div dangerouslySetInnerHTML={{ __html: heroHTML }} />
      </Hero> 
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


