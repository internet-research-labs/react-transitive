var path = require('path');

module.exports = {
  entry: path.join(__dirname, '/src/index.js'),
  output: {
    path: path.join(__dirname, "app"),
    filename: 'Loading.min.js'
  },
  resolve: {
    extensions: ['', '.js']
  }
};
