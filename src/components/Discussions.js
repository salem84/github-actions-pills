import PropTypes from 'prop-types';

/** @jsx jsx */
import { css, jsx } from '@emotion/react'

const style = css`
  
`;

const Discussions = props => {
  const { themeStyle = style, customStyle = '' } = props;

 
  return (
    <div css={[themeStyle, customStyle]}>
      <h3>Discussions</h3>
      
    </div>
  );
};

Discussions.propTypes = {
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default Discussions;
