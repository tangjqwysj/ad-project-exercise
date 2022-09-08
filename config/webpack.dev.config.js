const path = require("path")
const { merge } = require("webpack-merge")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpackBaseConfig = require("./webpack.base.config")
// var history = require("connect-history-api-fallback")
const mockMiddleware=require('./mock.config')

const webpackDevConfig = {
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      title: "React Exercise",
      inject: "body",
      filename: "index.html",
      template: path.join(__dirname, "../src/index.html"),
    }),
    new HtmlWebpackPlugin({
      title: "React Exercise",
      inject: "body",
      filename: "index2.html",
      template: path.join(__dirname, "../src/index2.html"),
    }),
  ],
  devServer: {
    hot: true,
    port: 9507,
   //   historyApiFallback: {
   //     index:'/index.html'
   //   },

    before(app) {
      const projectDir = path.resolve()
      const mockDir='./mock'
      // app.use(
      //   history({
      //     index: "/index2.html",
      //   })
      // )
      app.use(mockMiddleware({projectDir, mockDir}))
    },
  },
}

module.exports = merge(webpackBaseConfig, webpackDevConfig)
