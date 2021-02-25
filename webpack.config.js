const path = require('path');
const S3Plugin = require('webpack-s3-plugin');
require('dotenv').config();

const SRC_DIR = path.join(__dirname, '/client/src');
const DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'reviews.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, '/client/dist'),
    port: 3001,
  },
  mode: 'development',
  plugins: [
    new S3Plugin({
      s3Options: {
        accessKeyId: process.env.AWSAccessKeyId,
        secretAccessKey: process.env.AWSSecretKey,
        region: 'us-west-1',
      },
      s3UploadOptions: {
        Bucket: 'steam-bundle',
      },
    }),
  ],
};
