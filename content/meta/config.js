const base = {
  name: "Github Actions Pills",
  url: "https://github.com/salem84/github-actions-pills",
}

const config = {
  /* meta tags */
  siteTitle: `${base.name}`,
  siteTitlePostfix: ` - ${base.name}`,
  siteDescription: `${base.name} is a repository of Github workflows`,
  siteImage: "preview.jpg",
  siteLanguage: "en",

  /* site header */
  headerTitle: `${base.name}`,
  headerSubTitle: "Repository for your Github Workflows",

  /* url */
  siteUrl: base.url,
  // pathPrefix: '',

  contentRepoUrl:  `${base.url}/tree/master/content/docs/`,

  comment: {
    utterances: 'salem84/github-actions-pills', // Repository for archive comment
  },
  share: {
    facebookAppId: '', // Add facebookAppId for using facebook share feature v3.2
  },
  ga: '0', // Add your google analytics tranking ID
}

module.exports = config
