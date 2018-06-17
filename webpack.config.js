const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
//   plugins: [
//     new webpack.ProvidePlugin({
//         $: "jquery",
//         jQuery: "jquery"
//        })
//   ]
};