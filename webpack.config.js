'use strict';

const {resolve, join} = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

const OUTPUT_PATH = resolve('./dist');

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: OUTPUT_PATH,
    filename: '[name].bundle.js'
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: resolve('./src/index.html'),
        to: join(OUTPUT_PATH, 'index.html'),
        flatten: true
      }
    ]),
    // Cache everything within our Service Workers
    new WorkboxPlugin({
      globDirectory: OUTPUT_PATH,
      globPatterns: ['**/*.{html,js,css}'],
      swDest: join(OUTPUT_PATH, 'sw.js')
    })
  ]
};
