const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');



module.exports = {
  entry: './src/index.js',
  output: {
    filename: './js/bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};
