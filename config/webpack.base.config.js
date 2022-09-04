const path = require("path")

const webpackBaseConfig = {
  entry: path.join(__dirname, "../src/index.jsx"),
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "[name].[fullhash:4].js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: "babel-loader",
      },
      {
        test: /\.(sc|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.tsx$/,
        use: "ts-loader",
      },
    ],
  },
}

module.exports = webpackBaseConfig
