import { css } from '@emotion/react';

// const breakpoints = [1024];
import {colors, mq } from './css-utils';

const menu = css`
  flex-grow: 1;
  align-items: center;
  display: flex;
  z-index: 1;
  background: #fff;
  justify-content: center;

  ${mq({
    justifyContent: ['center', 'flex-end'],
    position: ['fixed', 'relative'],
    bottom: [0, 'auto'],
    width: ['100%', 'auto'],
    left: [0, 'auto'],
    borderTop: ['1px solid #ddd', 'none'],
  })};

  & ul {
    list-style: none;
    display: flex;
    height: 44px;
    justify-content: center;
  }

  & li {
    padding: 0 5px;
    line-height: 1;

    & a {
      display: flex;
      height: 100%;
      justify-content: center;
      align-items: center;
      margin: 0 5px;
      color: ${colors.lightTextColor};
      position: relative;

      &:before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        background: ${colors.firstActiveColor};
        width: 20px;
        height: 0px;
        transition: 0.3s;
        transform: translateY(8px);
      }

      &.active:before {
        height: 5px;
        transform: translateY(0);
      }

      &:not(.active) {
        @media (hover: hover) {
          &:hover:before {
            height: 5px;
            transform: translateY(0);
            background: ${colors.secondActiveColor};
          }
        }
      }
    }

    & svg {
      margin: 0 5px 0 0;
      height: 20px;
      width: 20px;
    }
  }
`;

export default menu;
