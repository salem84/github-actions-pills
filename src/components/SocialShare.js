/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { shareToTwitter, shareToFacebook } from '../utils/share'
import { FacebookIcon } from './social-buttons/FacebookIcon';
import { TwitterIcon } from './social-buttons/TwitterIcon';

  // ------------------------------------------------------------------------------------
  // All Social Share Buttons in a single container
  
  const shareStyle = css`
    text-align: right;
    height: 100%;

    .resp-sharing-button__link,
.resp-sharing-button__icon {
  display: inline-block;
  vertical-align: middle;
  border: none;
}

.resp-sharing-button__link {
  text-decoration: none;
  color: #fff;
  margin: 4px;
  height: 33px;

  .service-label {
    font-size: 12px;
    padding-right: 4px;
  }
}

.resp-sharing-button {
  height: 33px;
  border-radius: 6px;
  transition: 25ms ease-out;
  padding: 3px 8px 3px 10px;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
}

.resp-sharing-button__icon svg {
  width: 1em;
  height: 1.5em;
  margin-right: 0.4em;
  vertical-align: top;
}

.resp-sharing-button__icon {
  stroke: #fff;
  fill: none;
}

.resp-sharing-button__icon--solid {
  fill: #fff;
  stroke: none;
}
  `;

  export const SocialShare = ({ title, author }) => {
    const text = `Recommend on "${title}" written by @${author}`
  
    const onClickTwitterIcon = e => {
      e.preventDefault()
  
      return shareToTwitter(window.location.href, text)
    }
  
    const onClickFacebookIcon = e => {
      e.preventDefault()
      return shareToFacebook(window.location.href, text)
    }
  
    return (
      <div css={[shareStyle]}>
        <FacebookIcon onClick={onClickFacebookIcon} />
        <TwitterIcon onClick={onClickTwitterIcon} />
      </div>
    )
  }