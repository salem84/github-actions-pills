import PropTypes from 'prop-types';
/** @jsx jsx */
import { jsx } from '@emotion/react'
import { useStaticQuery, graphql } from 'gatsby';

import style from '../styles/footer';

const Footer = props => {
  const { links, copyright, themeStyle = style, customStyle = '' } = props;

  const { currentBuildDate } = useStaticQuery(graphql`
    query {
      currentBuildDate {
        currentDate
      }
    }
  `);

  return (
    <footer css={[themeStyle, customStyle]}>
      <div className="links" dangerouslySetInnerHTML={{ __html: links }} />
      <div
        className="copyright"
        dangerouslySetInnerHTML={{ __html: copyright }}
      />
      <div className="credits">
        {/*
          Please consider to not remove the credits section.
          That's the best way to say you appreciate my work.

          Thank you

          Greg Lobinski
        */}
        Built with{' '}
        <a href="https://www.gatsbyjs.com/">
          GatsbyJS
        </a>{' '}
        | Based on{' '}
        <a href="https://github.com/greglobinski/react-website-themes">
          React Website Themes
        </a>. 
      </div>
      <div className="lastBuild">Last Update on <a>{currentBuildDate.currentDate}</a></div>
      
    </footer>
  );
};

Footer.propTypes = {
  links: PropTypes.string,
  copyright: PropTypes.string,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default Footer;
