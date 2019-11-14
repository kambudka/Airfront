module.exports = {
  transpileDependencies: ["vuetify"],
  chainWebpack: config => config.plugins.delete("named-chunks"),
  configureWebpack: {
    devtool: 'source-map'
  }
};
