const ESLintWebpackPlugin = require("eslint-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html",
    publicPath: '/'
});


module.exports = () => {
    return {
        entry: "./src/index.tsx",
        output: {
            path: path.join(__dirname, 'dist'),
            filename: "bundle.js",
            publicPath: '/',
            sourceMapFilename: "[name].js.map"
        },
        devtool: "eval-source-map",
        devServer: {
            historyApiFallback: true,
        },
        plugins: [htmlPlugin, new ESLintWebpackPlugin({ extensions: ["js", "jsx", "ts", "tsx"] })],
        module: {
            rules: [{
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader",
                },
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader: "file-loader",
                options: { name: '/static/[name].[ext]' }
            },
            {
                test: /\.(jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            ]
        },
        resolve: {
            extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
        },
    };
};