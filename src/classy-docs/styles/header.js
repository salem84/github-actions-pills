import { css } from '@emotion/react';

import { mq } from './css-utils';

const header = css`
  display: flex;
  margin-bottom: 50px;
  padding: 5px 5px 0;
  align-items: center;

  ${mq({
    flexDirection: ['column', 'row'],
    marginBottom: ['35px', '50px'],
  })};

  a {
    text-decoration: none;
  }
`;

export default header;
