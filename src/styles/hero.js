import { css } from '@emotion/react';
import { keyframes } from '@emotion/react';

// const breakpoints = [768, 1024];
import {colors, mq } from './css-utils';

const pulse = keyframes`
  from {
    box-shadow: 0 0 0 2px white, 0 0 0 3px rgba(221,0,0, .5);
  }
  70% {
    box-shadow: 0 0 0 6px white, 0 0 0 8px rgba(221, 0, 0, 0);
  }
  to {
    box-shadow: none;
  }
`;

const hero = css`
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: strech;
  padding: 0 10%;
  text-align: center;

  ${mq({
    minHeight: [
      'calc(100vh - 300px)',
      'calc(100vh - 280px)',
      'calc(100vh - 260px)',
    ],
  })};

  & .image {
    max-width: 500px;
    margin: 0 auto 20px;
  }

  h1 {
    line-height: 1;
    text-align: center;
    font-size: 2.2em;
    margin-bottom: 0.5em;
    letter-spacing: -0.03em;
    border-radius: 5px;

    ${mq({
      fontSize: ['2.2em', '2.6em', '3em'],
    })};
  }

  a {
    align-items: center;
    border-radius: 3px;
    color: ${colors.firstActiveColor};
    font-size: 1em;
    display: inline-block;
    text-decoration: none;
    text-transform: uppercase;
    padding: 1em 2em;
    background: #f9f9f9;
    margin: 40px 0 0;
    animation: ${pulse} 2s ease infinite;
  }

  .anchor.before {
    display: none;
  }

  img {
    margin-top: 50px;
    width: 250px;
  }

  @media (hover: hover) {
    a:hover {
      animation: none;
      background: ${colors.firstActiveColor};
      color: #fff;
    }
  }

  .feather {
    display: none;
  }
`;

export default hero;
