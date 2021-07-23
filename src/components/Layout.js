import PropTypes from 'prop-types';
import React from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/react'

import style from '../styles/layout';

class Layout extends React.Component {
  state = {
    modifier: '',
  };

  componentDidMount() {
    this.setState({
      modifier: 'entry',
    });
  }

  render() {
    const { children, themeStyle = style, customStyle = '' } = this.props;
    const { modifier } = this.state;

    return (
      <div css={[themeStyle, customStyle, modifier]}>
        <main>{children}</main>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  themeStyle: PropTypes.object,
  customStyle: PropTypes.string,
};

export default Layout;
