import { css } from '@emotion/react';
import {colors, mq } from './css-utils';

// const breakpoints = [768, 1024];

const heading = css`
  h1 {
    letter-spacing: -0.03em;
    margin-bottom: 1em;
    line-height: 1.2;
    border-left: 6px solid ${colors.firstActiveColor};
    padding-left: 15px;
    color: ${colors.lightTextColor};

    ${mq({
      fontSize: ['1.8em', '2em', '2.2em'],
    })};
  }
`;

export default heading;
