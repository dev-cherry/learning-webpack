const { webpack } = require("webpack");
const path = require("path");

module.exports = {
  entry: {
    loadsh: ["loadsh"],
  },
  output: {
    path: path.resolve(__dirname, "./src/dll"),
    filename: "[name].js",
    library: "[name]",
  },
  plugins: [
    new webpack.DllPlugin({
      path: __dirname + "/src/dll/[name].json",
      name: "[name]",
    }),
  ],
};
