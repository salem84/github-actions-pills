import React from 'react';
import PropTypes from 'prop-types';
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

import { Link } from 'gatsby';

const style=css`
    text-align: center;

    h2 {
        
    }

    .grid {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 20px;
    }

    .grid a {
      border-radius: 15px;
      padding: 10px 12px;
      margin-bottom: 6px;
      text-decoration: none;
      border: 1px solid #eee;
      margin-left: 5px;
    }

    .grid a:hover {
        background-color: #eee;
    }
`;

const CategoriesListbox = props => {
  const { title, categoryList, themeStyle = style, customStyle = '' } = props;

  return (
    <div css={[themeStyle]}>
        <h2>{title}</h2>
      <div className="grid">
        {
          categoryList.map(item => {
            const { label, name: to, icon: Icon, external, linkProps } = item;
            return (
              <Link key={label} to={`/categories/${to}`}>{label}</Link>
              )
          })
        }
      </div>
    </div>
  );
};

CategoriesListbox.propTypes = {
  title: PropTypes.string,
  categoryList: PropTypes.array,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default CategoriesListbox;
