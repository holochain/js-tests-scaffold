const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  mode: 'production',
  module: {
    rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"]
            }
          }
        }
    ]
  },
  stats: {
      colors: true,
      hash: false,
      version: false,
      assets: false,
      timings: false,
      chunks: false
  },
  node: {
    fs: 'empty',
    setImmediate: false
  }
};
