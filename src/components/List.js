import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import { css } from "@emotion/react";
/** @jsx jsx */
import { jsx } from '@emotion/react'

const themeStyle = css`
    margin: 0 0 20px 0;
    padding: 20px;
    list-style: circle;
    
    & li {
        padding: 5px 0;
    }
`;


const List = props => {
  const { edges, theme } = props;

  return (
    <React.Fragment>
      <ul css={[themeStyle]}>
        {edges.map(edge => {
          const {
            node: {
              frontmatter: { title },
              fields: { slug }
            }
          } = edge;

          return (
            <li key={slug}>
              <Link to={slug}>{title}</Link>
            </li>
          );
        })}
      </ul>

      {/* --- STYLES --- */}
      <style jsx>{`
        /* ul {
            margin: 0 0 20px 0;
            padding: 20px;
            list-style: circle;
          }
          li {
            padding: 5px 0;
            
          } */
      `}</style>
    </React.Fragment>
  );
};

List.propTypes = {
  edges: PropTypes.array.isRequired,
  theme: PropTypes.object
};

export default List;