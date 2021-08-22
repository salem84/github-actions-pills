import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
/** @jsx jsx */
import { jsx } from '@emotion/react'

import style from '../styles/list';

function organizePagesInCategories(pages, categoryList) {
  return pages.reduce(
    (categoryContainers, currItem) => {
      const {
        frontmatter: { category:currItemCategory },
      } = currItem;

      let currItemCategories = [ currItemCategory ];
      // let pairedCategory = currItemCategories.reduce((pairedCat, currCat) => {
      //   if (
      //     pairedCat === '' &&
      //     categoryList.find(
      //       categoryListItem => categoryListItem.name === currCat
      //     )
      //   ) {
      //     return currCat;
      //   } else {
      //     return pairedCat;
      //   }
      // }, '');

      let pairedCategory = categoryList.find(
        categoryListItem => categoryListItem.name === currItemCategory
      );

      if (pairedCategory) {
        const categoryContainer = categoryContainers.find(
          categoryContainer => categoryContainer.name === pairedCategory.name
        );

        categoryContainer.pages.push(currItem);
      }
      return categoryContainers;
    },
    categoryList.map(category => {
      category.pages = [];
      return category;
    })
  );
}

const List = props => {
  const { pages, categoryList, themeStyle = style, customStyle = '' } = props;

  const pagesInCategories = organizePagesInCategories(pages, categoryList);

  return (
    <div css={[themeStyle, customStyle]}>
      {pagesInCategories.map(category => {
        const { label, icon: Icon } = category;

        return (
          <React.Fragment key={label}>
            <h3>
              <Icon />
              {label}
            </h3>
            <ul>
              {category.pages.map(page => {
                const {
                  frontmatter: { title, shortTitle },
                  fields: { slug },
                } = page;
                return (
                  <li key={slug}>
                    <Link key={slug} to={slug}>
                      {shortTitle ? shortTitle : title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </React.Fragment>
        );
      })}
    </div>
  );
};

List.propTypes = {
  pages: PropTypes.array.isRequired,
  categoryList: PropTypes.array,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default List;
