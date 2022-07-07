const autoprefixer = require("autoprefixer")

const gatsbyPluginPageCreator = {
  resolve: `gatsby-plugin-page-creator`,
  options: {
    path: `${__dirname}/src/pages`,
    ignore: {
      patterns: [`**/*`],
    },
  },
}

const gatsbyAliasImports = {
  resolve: "gatsby-alias-imports",
  options: {
    aliases: {
      static: "static",
      images: "static/images",
      icons: "static/icons",
      fonts: "static/fonts",
    },
  },
}

const gatsbyPluginSass = {
  resolve: "gatsby-plugin-sass",
  options: {
    data: `
      $env: ${process.env.BUILD_ENV};
      @import "${__dirname}/src/styles/index";
    `,
    postCssPlugins: [autoprefixer()],
  },
}

const gatsbyPluginLayout = {
  resolve: `gatsby-plugin-layout`,
  options: {
    component: require.resolve(`${__dirname}/src/layout`),
  },
}

const gatsbyPluginSvg = {
  resolve: "gatsby-plugin-svg-spritemap",
  options: {
    pattern: [`${__dirname}/src/icons/*.svg`],
    output: {
      filename: `icons/sprite.svg`,
    },
    sprite: { prefix: false },
  },
}

const gatsbyPluginLoaderSpriteSvg = {
  resolve: "gatsby-plugin-loader-sprite-svg",
}

module.exports = {
  plugins: [
    gatsbyPluginPageCreator,
    gatsbyPluginSass,
    gatsbyPluginLayout,
    gatsbyPluginSvg,
    gatsbyAliasImports,
    gatsbyPluginLoaderSpriteSvg,
    `gatsby-plugin-sharp`,
    `gatsby-env-variables`,
    `gatsby-optional-chaining`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-provide-react`,
    `gatsby-plugin-dynamic-routes`,
  ],
}
