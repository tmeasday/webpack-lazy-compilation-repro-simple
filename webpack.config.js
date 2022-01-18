const path = require('path');

module.exports = {
  mode: 'development',
  entry: `./${process.env.TYPE || 'static'}-entry.js`,

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  devServer: {
    // port: 5000,
    hot: true,
    headers: {
      'Access-Control-Allow-Headers': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Origin': '*',
    },
  },

  experiments: {
    lazyCompilation: process.env.NO_LAZY ? false : true,
  },
};
