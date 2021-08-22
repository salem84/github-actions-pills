import 'gatsby-prismjs-dracula';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
import config from './content/meta/config';

export const onInitialClientRender = () => {
    if (config.share.facebookAppId) {
      window.fbAsyncInit = function() {
        FB.init({ //eslint-disable-line
          appId: config.share.facebookAppId,
          xfbml: true,
          version: 'v3.2',
        })
        FB.AppEvents.logPageView() //eslint-disable-line
      }
      ;(function(d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0]
        if (d.getElementById(id)) {
          return
        }
        js = d.createElement(s)
        js.id = id
        js.src = 'https://connect.facebook.net/en_US/sdk.js'
        fjs.parentNode.insertBefore(js, fjs)
      })(document, 'script', 'facebook-jssdk')
    }
  }
  