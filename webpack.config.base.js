const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path')


module.exports = {
//   mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'index.[contenthash].js'
  },
 
  plugins: [
    new HtmlWebpackPlugin({
      title: '釉纸糖',
      //使用template传递自定义HTML文件
      template: 'src/assets/index.html'
    }),
  ],
}

