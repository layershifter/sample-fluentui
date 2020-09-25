const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  mode: "production",
  entry: {
    main: "./main.js",
  },
  plugins: [new BundleAnalyzerPlugin()],
};
