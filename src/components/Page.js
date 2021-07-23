import PropTypes from 'prop-types';
import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/react'

import style from '../styles/page';

const Page = props => {
  const { children, themeStyle = style, customStyle = '' } = props;

  return <div css={[themeStyle, customStyle]}>{children}</div>;
};

Page.propTypes = {
  children: PropTypes.node,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default Page;
