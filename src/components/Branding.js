import { Link } from 'gatsby';
import PropTypes from 'prop-types';
/** @jsx jsx */
import { jsx } from '@emotion/react'

import style from '../styles/branding';

const Branding = props => {
  const { title, subTitle, themeStyle = style, customStyle = '' } = props;

  return (
    <Link css={[themeStyle, customStyle]} to="/">
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </Link>
  );
};

Branding.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  logo: PropTypes.node,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default Branding;
