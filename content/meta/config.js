const base = {
  name: "Github Actions Pills",
  url: "https://github.com/salem84/github-actions-pills",
}

const config = {
  /* meta tags */
  siteTitle: `${base.name}`,
  siteTitlePostfix: ` - ${base.name}`,
  siteDescription: `${base.name} is a series starters: Minimal, Equipped, Themed, Website, Blog.`,
  siteImage: "preview.jpg",
  siteLanguage: "en",

  /* site header */
  headerTitle: `${base.name}`,
  headerSubTitle: "based on GatsbyJS",

  /* url */
  siteUrl: base.url,
  // pathPrefix: '',

  contentRepoUrl:  `${base.url}/content`,
}

module.exports = config
