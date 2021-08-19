import PropTypes from 'prop-types';

/** @jsx jsx */
import { jsx } from '@emotion/react'

const ArticleAuthor = props => {
  const { authorUsername, themeStyle, customStyle = '' } = props;

  const avatarUrl = `https://github.com/${authorUsername}.png?size=50`;
  const authorUrl = `https://github.com/${authorUsername}`;

  return (
    <div css={[themeStyle, customStyle]}>
      <h3>Contributors</h3>
      <a target="_blank" href={authorUrl}>
          <img src={avatarUrl}></img>
      </a>
    </div>
  );
};

ArticleAuthor.propTypes = {
  authorUsername: PropTypes.string,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default ArticleAuthor;
