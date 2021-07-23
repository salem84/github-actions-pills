import { css } from '@emotion/react';
import { mq } from './css-utils';

// const breakpoints = [1024, 1280];

const article = css`
  margin: 0 auto 30px;

  ${mq({
    maxWidth: ['500px', '600px', '700px'],
  })};
`;

export default article;
