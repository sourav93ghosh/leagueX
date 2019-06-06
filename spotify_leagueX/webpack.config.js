const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill', "./src/index.js"],
    output: {
        path: path.join(__dirname, "dist"),
        publicPath: "/",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/, 
                loader: "babel-loader",
                options: {
                    presets: [
                      '@babel/preset-env', "@babel/preset-react",
                      {
                        plugins: [
                          '@babel/plugin-proposal-class-properties'
                        ]
                      }
                    ]
                },
            },
            {
                test:/\.(s*)css$/,
                use:['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|svg|)$/,
                loader: 'url-loader'
            }
        ]
    },
    devServer: {
        disableHostCheck: true,
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
}