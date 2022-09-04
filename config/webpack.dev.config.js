const path = require("path")
const { merge } = require("webpack-merge")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpackBaseConfig = require("./webpack.base.config")

const webpackDevConfig = {
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      title: "React Exercise",
      inject: "body",
      filename: "index.html",
      template: path.join(__dirname, "../src/index.html"),
    }),
  ],
  devServer: {
    hot: true,
    port: 9507,
  },
}

module.exports = merge(webpackBaseConfig, webpackDevConfig)
