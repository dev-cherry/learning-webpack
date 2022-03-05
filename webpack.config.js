const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { webpack } = require("webpack");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = (env, argv) => {
  const common = {
    mode: "none",
    entry: {
      app: "./src/app.js",
    },
    output: {
      filename: "[name].[contenthash].js",
      path: path.resolve(__dirname, "./dist"),
      assetModuleFilename: "images/[name][ext][query]",
    },
    module: {
      rules: [
        {
          test: /\.html$/i,
          use: {
            loader: "html-loader",
          },
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
            },
          ],
        },
        {
          test: /\.png/,
          type: "asset",
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "app.bundle.css",
      }),
      new HtmlWebpackPlugin({
        title: "管理输出",
        template: "./src/index.html",
      }),
      new CleanWebpackPlugin(),
      // new BundleAnalyzerPlugin(),
      new webpack.DllRerencePlugin({
        manifest: require("./src/dll/lodash.json"),
      }),
    ],
    optimization: {
      minimize: true,
      splitChunks: {
        name: "vendors",
        chunks: "all",
        minSize: 0,
        // cacheGroups: {
        //   vendor: {
        //     test: /[\\/]node_modules[\\/]/,
        //     name: "vendors",
        //     chunks: "all",
        //   },
        // },
      },
      runtimeChunk: "single",
      // runtimeChunk: true,
    },
    devServer: {
      port: 9001,
      static: "./dist",
      liveReload: false,
    },
  };
  return common;
};
