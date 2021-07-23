import { css } from '@emotion/react';

// const breakpoints = [1024];
import { mq } from './css-utils';

const layoutSidebar = css`
  padding: 15px 25px;

  ${mq({
    marginLeft: ['0', '320px'],
  })};

  &.entry {
    /*background: red;*/
  }
`;

export default layoutSidebar;
