const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path')

const base = require('./webpack.config.base.js')

module.exports = {
  // 把base的所有属性抄到这里
  ...base,
  mode: 'development',
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
}

