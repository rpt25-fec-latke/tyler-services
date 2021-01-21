var path = require('path');
var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');
module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react'
          ],
          plugins: [
            '@babel/plugin-transform-runtime',
            {
              "absoluteRuntime": false,
              "corejs": false,
              "helpers": true,
              "regenerator": true,
              "useESModules": false,
              "version": "7.0.0-beta.0"
            }
          ]
        }
      }
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, '/client/dist'),
    port: 3001
  }
};