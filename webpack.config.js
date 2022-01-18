const path = require('path');

module.exports = {
  mode: 'development',
  entry: `./simple-entry.js`,

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  devServer: { hot: true },

  experiments: {
    lazyCompilation: process.env.NO_LAZY ? false : true,
  },
};
