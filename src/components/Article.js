import PropTypes from 'prop-types';
/** @jsx jsx */
import { jsx } from '@emotion/react'

import style from '../styles/article';

const Article = props => {
  const { children, themeStyle = style, customStyle = '' } = props;

  return <article css={[themeStyle, customStyle]}>{children}</article>;
};

Article.propTypes = {
  children: PropTypes.node.isRequired,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default Article;
