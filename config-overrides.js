/* config-overrides.js */

// const path = require('path');

// function resolve (dir) {
//   return path.join(__dirname, '.', dir);
// }

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  config.resolve.alias = {
    ...config.resolve.alias,
    '@mui/styled-engine': '@mui/styled-engine-sc',
    // '@': resolve('src'),
    // '@components': resolve('src/components'),
    // '@routes': resolve('src/routes'),
    // '@constants': resolve('src/constants'),
    // '@hooks': resolve('src/hooks'),
    // '@apis': resolve('src/apis'),
  };
  return config;
}