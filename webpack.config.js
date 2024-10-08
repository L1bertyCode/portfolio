const path = require('path');

module.exports = (env) => {
  const mode = env.mode;
  return {
    mode: mode,
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'build'),
      clean: true
    },
  };
};