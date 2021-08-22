import PropTypes from 'prop-types';

/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import React from 'react'
import { Link } from 'gatsby';

const style = css`
    margin-bottom: 30px;

    .tags {
        margin-top: 15px;
    }

    .tags a {
        border-radius: 15px;
        padding: 5px 12px;
        margin-bottom: 6px;
        text-decoration: none;
        border: 1px solid #eee;
        margin-left: 5px;
    }

    .tags a:hover {
        background-color: #eee;
    }
`;

const ArticleTags = props => {
    const { tagList, themeStyle = style, customStyle = '' } = props;

    return (
      
        <div css={[themeStyle, customStyle]}>
            <h3>Tags</h3>
            <div className="tags">
                { tagList && (tagList.length > 0) ? ( 
                    tagList.map(tag => {
                        return (
                            <Link key={tag} to={`/tags/${tag}`}>{tag}</Link>
                        )
                    })
                    ) : (  
                        <span>Not specified</span>
                    )
                }
            </div>
        </div>
      );
  
  
};

ArticleTags.propTypes = {
  tagList: PropTypes.array,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default ArticleTags;
