const path = require("path");

module.exports = {
    entry: {
        form: path.resolve(__dirname, "./") + "/src/App.jsx",
    },
    output: {
        filename: "../dist/javascript/webpack.bundle.js"
    },
    module: {
        rules: [
            {
              loader: "babel-loader",
              exclude: /node_modules/,
              query: {
                presets: ["@babel/preset-react"]
              }
            }
          ]
    },
    resolve: {
        extensions: [".js", ".jsx"],
        modules: ["node_modules", path.resolve(__dirname, "./src")],
      },
    mode: "development"
};