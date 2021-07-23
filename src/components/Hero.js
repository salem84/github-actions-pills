import React from 'react';
import PropTypes from 'prop-types';
/** @jsx jsx */
import { jsx } from '@emotion/react'

import style from '../styles/hero';

const Hero = props => {
  const { html, children, themeStyle = style, customStyle = '' } = props;

  return (
    <React.Fragment>
      {html ? (
        <section
          css={[themeStyle, customStyle]}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      ) : (
        <section css={`${themeStyle}`}>{children}</section>
      )}
    </React.Fragment>
  );
};

Hero.propTypes = {
  children: PropTypes.node,
  html: PropTypes.string,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default Hero;
