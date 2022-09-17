const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const webpackBaseConfig = {
  entry: path.join(__dirname, "../src/index.jsx"),
  output: {
    path: path.join(__dirname, "../dist"),
    filename: "[name].[fullhash:4].js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      pages: path.join(__dirname, "../src/pages"),
      '@utils': path.join(__dirname, '../src/utils'),
      '@components': path.join(__dirname, '../src/components'),
      common: path.join(__dirname, '../src/common'),
      context: path.join(__dirname, '../src/context'),
    },
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: "babel-loader",
      },
      {
        test: /\.(sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
      {
         test: /\.(jpg|png|jpe?g|gif|svg)(\?.*)?$/i,
         use: [
             {
                 loader: 'url-loader',
                 options: {
                     limit: 5 * 1024,
                 },
             },
         ],
     },
    ],
  },
}

module.exports = webpackBaseConfig
