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
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.styl$/,
        loader: ['style-loader', 'css-loader', "stylus-loader"],
      },
      {
        //如果文件以less结尾就使用less loader
        test: /\.less$/,
        loader: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.scss$/,
        use: [
          // 把字符串转化成css标签
          "style-loader",
          //把css代码转换成字符串
          "css-loader",
          {
            //把sass代码转化成css代码
            loader: "sass-loader",
            options: {
              implementation: require('dart-sass')
            }
          },
        ],
      },
    ],
  },
}

