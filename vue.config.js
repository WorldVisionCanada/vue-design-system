module.exports = {
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()

    svgRule
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
            @import "@/assets/tokens/tokens.scss";
            @import "@/assets/tokens/tokens.map.scss";
            @import "@/styles/styles.scss";
          `
      }
    }
  }
}
