const path = require("path");
module.exports = {
  entry: "./assests/js/script.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.bundle.js",
  },
  mode: "development",
};