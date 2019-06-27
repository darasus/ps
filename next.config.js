const composePlugins = require('next-compose-plugins');
const withTypeScript = require('@zeit/next-typescript');
const TypeScriptChecker = require('fork-ts-checker-webpack-plugin');
const path = require('path');
const withSourceMaps = require('@zeit/next-source-maps');
const withMDX = require('@zeit/next-mdx')({
  extension: /\.mdx?$/,
});

module.exports = composePlugins([
  [
    withTypeScript,
    {
      webpack(config, options) {
        if (options.isServer) {
          config.plugins.push(
            new TypeScriptChecker({
              tslint: path.join(__dirname, './tslint.json'),
            }),
          );
        }
        return config;
      },
    },
  ],
  [withSourceMaps],
  [withMDX],
]);
