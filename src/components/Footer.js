import PropTypes from 'prop-types';
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useStaticQuery, graphql } from 'gatsby';

import style from '../styles/footer';

const Footer = props => {
  const { links, copyright, credits, themeStyle = style, customStyle = '' } = props;

  const { 
    footerLinks:  { html: defaultFooterLinksHtml }, 
    copyright: { html: defaultCopyrightHtml },
    credits:  { html: defaultCreditsHtml },
    currentBuildDate 
  } = useStaticQuery(graphql`
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
      credits: markdownRemark(
        fileAbsolutePath: { regex: "/content/parts/credits/" }
      ) {
        html
      }
      currentBuildDate {
        currentDate
      }
    }
  `);

  const copyrightHtml = copyright || defaultCopyrightHtml;
  const linksHtml = links || defaultFooterLinksHtml;
  const creditsHtml = credits || defaultCreditsHtml;

  return (
    <footer css={[themeStyle, customStyle]}>
      <div className="links" dangerouslySetInnerHTML={{ __html: linksHtml }} />
      <div
        className="copyright"
        dangerouslySetInnerHTML={{ __html: copyrightHtml }}
      />
      <div 
        className="credits"
        dangerouslySetInnerHTML={{ __html: creditsHtml }}
      />
      <div className="lastBuild">Last Update on <a>{currentBuildDate.currentDate}</a></div>
      
    </footer>
  );
};

Footer.propTypes = {
  links: PropTypes.string,
  copyright: PropTypes.string,
  credits: PropTypes.string,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default Footer;
