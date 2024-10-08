const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    // devtool: "inline-source-map",
    // devServer: {
    //     static: "./dist",
    // },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Point Region Quadtree",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    // optimization: {
    //     runtimeChunk: "single",
    // },
};