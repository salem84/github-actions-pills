import React from 'react';
import PropTypes from 'prop-types';
/** @jsx jsx */
import { jsx } from '@emotion/react'

import style from '../styles/categoriesListbox';
import { Link } from 'gatsby';

const CategoriesListbox = props => {
  const { categoryList, themeStyle = style, customStyle = '' } = props;

  return (
    <div css={[themeStyle]}>
        <h2>Categories</h2>
      <div className="grid">
        {
          categoryList.map(item => {
            const { label, to, icon: Icon, external, linkProps } = item;
            return (
              <Link to={to}>{label}</Link>
              )
          })
        }
      </div>
    </div>
  );
};

CategoriesListbox.propTypes = {
  // children: PropTypes.node,
  // html: PropTypes.string,
  categoryList: PropTypes.array,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default CategoriesListbox;
