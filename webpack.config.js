const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  optimization: {
    // parallel: false for verbose cli output
    minimizer: [new TerserPlugin({ parallel: false })]
  }
};
