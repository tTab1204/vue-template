module.exports = {
  // initialize scss variables for the whole project
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/index.scss";`
      }
    }
  },

  // Generating source map js
  productionSourceMap: true,

  // stoping ESlint
  chainWebpack: (config) => {
    config.module.rules.delete('eslint')
  }
}
