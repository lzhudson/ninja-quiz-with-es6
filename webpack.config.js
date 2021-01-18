const path = require('path');
module.exports = {
  entry: './app.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, './'),
    compress: true
  },
  module: {
  }
}