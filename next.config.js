const compose = require('next-compose');
const withTypescript = require('@zeit/next-typescript');
const withMDX = require('@next/mdx')();

module.exports = compose([
  [withTypescript, { target: 'serverless' }],
  [withMDX, { extension: /\.mdx?$/ }],
  {
    webpack(config, options) {
      return config;
    },
  },
]);
