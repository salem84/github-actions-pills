import 'typeface-merriweather-sans';
import { Global, css } from '@emotion/react';
import { colors } from './css-utils';
import React from 'react';

const GlobalStyle = props => (
    <Global
      {...props}
      styles={css`
      
        html {
            box-sizing: border-box;
            font-family: "Merriweather Sans", sans-serif;
            font-size: 16px;
            color: #666;
        }

        *,
        *:after,
        *:before {
            box-sizing: inherit;
            margin: 0;
            padding: 0;
        }

        p {
            color: ${colors.textColor};
        }

        h1, h2, h3 {
            color: ${colors.lightTextColor};
        }

        h1 {
            font-size: 2.4em;
        }

        h2 {
            font-size: 1.8em;
        }

        ul {
            list-style-position: inside;
        }

        a {
            color: ${colors.linkColor};
            transition: .3s;
        }

        @media (hover: hover)  {
            a:hover {
            color: ${colors.hoverLinkColor};
            }
        }

        *::-webkit-scrollbar {
            width: 5px;
        }
        *::-webkit-scrollbar-track {
            background: ${colors.scrollBarTrack};
        }
        *::-webkit-scrollbar-thumb {
            background-color: ${colors.scrollBarThumb};
        }
        
        .tag-cloud-tag {
            cursor: pointer;
        }
      `}
    />
  )

  export default GlobalStyle;