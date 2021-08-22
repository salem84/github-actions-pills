import PropTypes from 'prop-types';
import TimeAgo from "react-timeago"

/** @jsx jsx */
import { css, jsx } from '@emotion/react'

const style = css`
  margin-bottom: 30px;
`;

const ArticleEdit = props => {
  const { lastEdit, contentRepoUrl, relativeDirectory, themeStyle = style, customStyle = '' } = props;

  const editOnGithubURL = `${contentRepoUrl}/${relativeDirectory}`

  return (
    <div css={[themeStyle, customStyle]}>
      <div>
          <a target="_blank" rel="noopener" href={editOnGithubURL}>Edit on GitHub</a>

        <span>
          {" "}&nbsp; · &nbsp;{" "}
        </span>

        <span>
          Updated{" "}
          <TimeAgo date={lastEdit} minPeriod={60}/>
        </span>
      </div>
    </div>
  );
};

ArticleEdit.propTypes = {
  lastEdit: PropTypes.string,
  contentRepoUrl: PropTypes.string,
  relativeDirectory: PropTypes.string,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default ArticleEdit;
