const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const TerserPlugin = require("terser-webpack-plugin");

const webpackConfig = {
  mode: process.env.WEBPACK_ENV || "development",
  entry: {
    main: "./main.js",
  },
  plugins: [
    new BundleAnalyzerPlugin({ analyzerMode: "static", openAnalyzer: false }),
  ],

  ...(process.env.WEBPACK_DEBUG && {
    optimization: {
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: true,
          sourceMap: true,
          terserOptions: {
            mangle: false,
            output: {
              beautify: true,
              comments: true,
              preserve_annotations: true,
            },
          },
        }),
      ],
    },
    output: {
      pathinfo: true
    },
    stats: {
      optimizationBailout: true,
    },
  }),
};

module.exports = webpackConfig;

console.log(`Webpack mode: ${webpackConfig.mode}`);
console.log(`Webpack debug: ${process.env.WEBPACK_DEBUG || "false"}`);
