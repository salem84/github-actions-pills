import PropTypes from 'prop-types';
import TimeAgo from "react-timeago"

/** @jsx jsx */
import { jsx } from '@emotion/react'

const ArticleEdit = props => {
  const { lastEdit, contentRepoUrl, relativeDirectory, themeStyle, customStyle = '' } = props;

  const editOnGithubURL = `${contentRepoUrl}/${relativeDirectory}`

  return (
    <div css={[themeStyle, customStyle]}>
      <div>
          <a target="_blank" href={editOnGithubURL}>Edit on GitHub</a>

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
