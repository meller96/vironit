const path = require("path");

module.exports = {
  devServer: {
    port: 9000
  },
  entry: "./js/main.js",
  output: {
    filename: "build.js",
    path: path.resolve(__dirname, "dist")
  }
};
