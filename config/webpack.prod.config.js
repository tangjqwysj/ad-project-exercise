const path = require("path")
const { merge } = require("webpack-merge")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const webpackBaseConfig = require("./webpack.base.config")

const webpackProdConfig = {
  mode: "production",
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "React Exercise",
      inject: "body",
      filename: "index.html",
      template: path.join(__dirname, "../src/index.html"),
    }),
  ],
}

module.exports = merge(webpackBaseConfig, webpackProdConfig)
