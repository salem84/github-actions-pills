// ------------------------------------------------------------------------------------
// Facebook share button

/** @jsx jsx */
import { css, jsx } from '@emotion/react'

const facebookIconStyle = css`
    .resp-sharing-button--facebook {
        background-color: #3b5998;
    }

    .resp-sharing-button--facebook:hover {
        background-color: #2d4373;
    }

    .resp-sharing-button--facebook {
        background-color: #3b5998;
        border-color: #3b5998;
    }

    .resp-sharing-button--facebook:hover,
    .resp-sharing-button--facebook:active {
        background-color: #2d4373;
        border-color: #2d4373;
    }
`;

export const FacebookIcon = ({ onClick }) => (
    <a
      css={[facebookIconStyle]}
      className="resp-sharing-button__link"
      href="#"
      target="_blank"
      rel="noopener"
      aria-label="Share on Facebook"
      onClick={onClick}
    >
      <div className="resp-sharing-button resp-sharing-button--facebook resp-sharing-button--large">
        <div
          aria-hidden="true"
          className="resp-sharing-button__icon resp-sharing-button__icon--solid"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
          </svg>
        </div>
        <span className="service-label">Share on Facebook</span>
      </div>
    </a>
  )