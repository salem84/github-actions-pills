import PropTypes from 'prop-types';
import { Link } from 'gatsby';
/** @jsx jsx */
import { jsx } from '@emotion/react'

import style from '../styles/menu';

const Menu = props => {
  const { items, themeStyle = style, customStyle = '' } = props;

  return (
    <nav css={[themeStyle, customStyle]}>
      <ul>
        {items.map(item => {
          const { label, to, icon: Icon, external, linkProps } = item;

          return (
            <li key={label}>
              {external ? (
                <a href={to} 
                  rel="noopener noreferrer"
                  {...linkProps}>
                  {Icon && <Icon />}
                  <span>{label}</span>
                </a>
              ) : (
                <Link to={to} activeClassName="active" {...linkProps}>
                  {Icon && <Icon />}
                  <span>{label}</span>
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

Menu.propTypes = {
  items: PropTypes.array.isRequired,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default Menu;
