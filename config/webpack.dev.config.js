const path = require("path")
const { merge } = require("webpack-merge")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpackBaseConfig = require("./webpack.base.config")
// var history = require("connect-history-api-fallback")
const mockMiddleware = require("./mock.config")

// const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
// const smp = new SpeedMeasurePlugin();

const webpack = require("webpack")

const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")

const webpackDevConfig = {
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      title: "React Exercise",
      inject: "body",
      filename: "index.html",
      template: path.join(__dirname, "../src/index.html"),
      favicon: path.join(__dirname, "../src/vite.svg"),
    }),
    new HtmlWebpackPlugin({
      title: "React Exercise",
      inject: "body",
      filename: "index2.html",
      template: path.join(__dirname, "../src/index2.html"),
    }),
    new webpack.DllReferencePlugin({
      // 描述 react 动态链接库的文件内容
      manifest: require(path.join(__dirname, "../src/dll/", "vendor.manifest.json")),
    }),
    new ForkTsCheckerWebpackPlugin(),
  ],
  devServer: {
    contentBase: path.join(__dirname, "../src"),
    hot: true,
    port: 9507,
    //  proxy: {
    //    "/": "http://127.0.0.1:3000/mock/18",
    //  },
    //  historyApiFallback: {
    //    index: "/index.html",
    //  },

    before(app) {
      const projectDir = path.resolve()
      const mockDir = "./mock"
      //    // app.use(
      //    //   history({
      //    //     index: "/index2.html",
      //    //   })
      //    // )
      app.use(mockMiddleware({ projectDir, mockDir }))
    },
  },
}

module.exports = merge(webpackBaseConfig, webpackDevConfig)
// module.exports = smp.wrap(merge(webpackBaseConfig, webpackDevConfig))
