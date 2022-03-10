const webpack = require("webpack");
const library = "[name]_lib";
const path = require("path");
const package = require("./package.json");
let dependencies = Object.keys(package.dependencies) || [];
dependencies =
  dependencies.length > 0 ? dependencies.filter((item) => item !== "vue") : [];

module.exports = {
  entry: {
    vendor: dependencies,
  },
  output: {
    path: path.resolve(__dirname, "./src/dll"),
    filename: "[name].dll.js",
    library,
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(__dirname, "./src/dll", "[name]-manifest.json"),
      name: library,
    }),
  ],
};
