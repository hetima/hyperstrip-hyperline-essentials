const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  target: 'node',
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'hyperline_essentials.js',
    libraryTarget: 'commonjs'
  },
  plugins: [ new webpack.DefinePlugin({ 'global.GENTLY': false }) ],
  externals: [ nodeExternals(), 'hyper/notify', 'hyper/decorate', 'react' ],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}