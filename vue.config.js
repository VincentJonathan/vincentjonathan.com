const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  transpileDependencies: ["vuetify"],
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "Vincent Jonathan";
      return args;
    });
  },
  configureWebpack: {
    plugins: [new BundleAnalyzerPlugin()]
  }
};
