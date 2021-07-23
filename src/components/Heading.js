import PropTypes from 'prop-types';
/** @jsx jsx */
import { jsx } from '@emotion/react'

import style from '../styles/heading';

const Heading = props => {
  const { title, children, themeStyle = style, customStyle = '' } = props;

  return (
    <header css={[themeStyle, customStyle]}>
      {title ? <h1>{title}</h1> : children}
    </header>
  );
};

Heading.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default Heading;
