import PropTypes from 'prop-types';

/** @jsx jsx */
import { css, jsx } from '@emotion/react'

const style = css`
  margin-bottom: 30px;

  .avatar-list {
      margin-top: 10px;
  }
  .avatar-image {
      border-radius: 50%;
  }
`;

const ArticleAuthor = props => {
  const { authorUsername, themeStyle = style, customStyle = '' } = props;

  const avatarUrl = `https://github.com/${authorUsername}.png?size=50`;
  const authorUrl = `https://github.com/${authorUsername}`;

  return (
    <div css={[themeStyle, customStyle]}>
      <h3>Contributors</h3>
      <div className="avatar-list">
        <a target="_blank" href={authorUrl}>
            <img className="avatar-image" src={avatarUrl} alt={`@${authorUsername}`}></img>
        </a>
      </div>
    </div>
  );
};

ArticleAuthor.propTypes = {
  authorUsername: PropTypes.string,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default ArticleAuthor;
