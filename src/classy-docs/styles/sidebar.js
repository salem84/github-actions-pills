import { css } from '@emotion/react';

// const breakpoints = [1024, 1280];
import {colors, mq } from './css-utils';

const sidebar = css`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  background: white;
  border-right: 1px dotted #ddd;
  overflow: auto;
  transition: 0.3s;
  padding-bottom: 20px;

  ${mq({
    transform: ['translate(-280px, 0)', 'translate(0, 0)', 'translate(0, 0)'],
    width: ['280px', '300px', '320px'],
  })}; 

  & .logo {
    font-size: 1em;
    font-weight: 400;
    padding: 25px 30px;
    border-bottom: 1px dotted #ddd;
    margin-bottom: 15px;
    display: flex;
    align-items: center;

    & .icon {
      background-image: url(data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhYiIgZGF0YS1pY29uPSJnaXRodWIiIGNsYXNzPSJzdmctaW5saW5lLS1mYSBmYS1naXRodWIgZmEtdy0xNiIgcm9sZT0iaW1nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OTYgNTEyIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xNjUuOSAzOTcuNGMwIDItMi4zIDMuNi01LjIgMy42LTMuMy4zLTUuNi0xLjMtNS42LTMuNiAwLTIgMi4zLTMuNiA1LjItMy42IDMtLjMgNS42IDEuMyA1LjYgMy42em0tMzEuMS00LjVjLS43IDIgMS4zIDQuMyA0LjMgNC45IDIuNiAxIDUuNiAwIDYuMi0ycy0xLjMtNC4zLTQuMy01LjJjLTIuNi0uNy01LjUuMy02LjIgMi4zem00NC4yLTEuN2MtMi45LjctNC45IDIuNi00LjYgNC45LjMgMiAyLjkgMy4zIDUuOSAyLjYgMi45LS43IDQuOS0yLjYgNC42LTQuNi0uMy0xLjktMy0zLjItNS45LTIuOXpNMjQ0LjggOEMxMDYuMSA4IDAgMTEzLjMgMCAyNTJjMCAxMTAuOSA2OS44IDIwNS44IDE2OS41IDIzOS4yIDEyLjggMi4zIDE3LjMtNS42IDE3LjMtMTIuMSAwLTYuMi0uMy00MC40LS4zLTYxLjQgMCAwLTcwIDE1LTg0LjctMjkuOCAwIDAtMTEuNC0yOS4xLTI3LjgtMzYuNiAwIDAtMjIuOS0xNS43IDEuNi0xNS40IDAgMCAyNC45IDIgMzguNiAyNS44IDIxLjkgMzguNiA1OC42IDI3LjUgNzIuOSAyMC45IDIuMy0xNiA4LjgtMjcuMSAxNi0zMy43LTU1LjktNi4yLTExMi4zLTE0LjMtMTEyLjMtMTEwLjUgMC0yNy41IDcuNi00MS4zIDIzLjYtNTguOS0yLjYtNi41LTExLjEtMzMuMyAyLjYtNjcuOSAyMC45LTYuNSA2OSAyNyA2OSAyNyAyMC01LjYgNDEuNS04LjUgNjIuOC04LjVzNDIuOCAyLjkgNjIuOCA4LjVjMCAwIDQ4LjEtMzMuNiA2OS0yNyAxMy43IDM0LjcgNS4yIDYxLjQgMi42IDY3LjkgMTYgMTcuNyAyNS44IDMxLjUgMjUuOCA1OC45IDAgOTYuNS01OC45IDEwNC4yLTExNC44IDExMC41IDkuMiA3LjkgMTcgMjIuOSAxNyA0Ni40IDAgMzMuNy0uMyA3NS40LS4zIDgzLjYgMCA2LjUgNC42IDE0LjQgMTcuMyAxMi4xQzQyOC4yIDQ1Ny44IDQ5NiAzNjIuOSA0OTYgMjUyIDQ5NiAxMTMuMyAzODMuNSA4IDI0NC44IDh6TTk3LjIgMzUyLjljLTEuMyAxLTEgMy4zLjcgNS4yIDEuNiAxLjYgMy45IDIuMyA1LjIgMSAxLjMtMSAxLTMuMy0uNy01LjItMS42LTEuNi0zLjktMi4zLTUuMi0xem0tMTAuOC04LjFjLS43IDEuMy4zIDIuOSAyLjMgMy45IDEuNiAxIDMuNi43IDQuMy0uNy43LTEuMy0uMy0yLjktMi4zLTMuOS0yLS42LTMuNi0uMy00LjMuN3ptMzIuNCAzNS42Yy0xLjYgMS4zLTEgNC4zIDEuMyA2LjIgMi4zIDIuMyA1LjIgMi42IDYuNSAxIDEuMy0xLjMuNy00LjMtMS4zLTYuMi0yLjItMi4zLTUuMi0yLjYtNi41LTF6bS0xMS40LTE0LjdjLTEuNiAxLTEuNiAzLjYgMCA1LjkgMS42IDIuMyA0LjMgMy4zIDUuNiAyLjMgMS42LTEuMyAxLjYtMy45IDAtNi4yLTEuNC0yLjMtNC0zLjMtNS42LTJ6Ij48L3BhdGg+PC9zdmc+);
      height: 25px;
      width: 24px;
      margin-right: 20px;
    }

    & span {
    }
  }

  

  & h2 {
    font-size: 0.8em;
    letter-spacing: 0.2em;
    color: ${colors.superLightTextColor};
    padding: 25px 30px;
    border-bottom: 1px dotted #ddd;
    margin-bottom: 15px;
  }

  & h3 {
    font-size: 0.7em;
    letter-spacing: 0.2em;
    padding: 10px 30px 0;
    text-transform: uppercase;
    font-weight: 300;
    color: ${colors.lightTextColor};
    display: flex;
    align-items: center;

    & svg {
      width: 15px;
      margin: 0 5px 0 -5px;
      stroke: ${colors.superLightGray};
    }
  }

  & a {
    text-decoration: none;
  }

  & > ul {
    font-size: 0.9em;
    list-style: none;
    padding: 10px 0 15px;

    & > li {
      background: white;

      & > a {
        text-decoration: none;
        color: #666;
        padding: 6px 29px;
        display: block;
        transition: 0.5s;
        position: relative;
        line-height: 1.35;

        &:before {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          left: 13px;
          width: 1px;
          transform: translateX(-14px);
          background: ${colors.secondActiveColor};
          transition: 0.3s;
        }

        @media (hover: hover) {
          &:hover {
            &:before {
              transform: translateX(0);
              width: 5px;
            }
          }
        }
      }

      & > ul {
        display: none;
        list-style: none;
        margin-left: 17px;
        font-size: 0.9em;

        & > li {
          padding: 4px 20px 6px;
          border-left: 1px dotted ${colors.firstActiveColor};

          & > a {
            color: #999;
          }

          @media (hover: hover) {
            &:hover {
              border-left: 1px solid ${colors.secondActiveColor};
            }
          }
        }
      }

      &.active {
        & > a {
          &:before {
            background: ${colors.firstActiveColor};
            transform: translateX(0);
            width: 5px;
          }
        }

        & > ul {
          display: block;
        }
      }
    }
  }
`;

export default sidebar;
