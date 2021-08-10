const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimezeCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin} = require('clean-webpack-plugin');
 


module.exports = {
    mode: 'production',
    optimization: {
        minimizer: [new OptimezeCssExtractPlugin()]
    },

    output: {
        filename: 'main.[contenthash].js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                loader: "babel-loader",
              }
            },
            {
                test: /\.css$/i,
                exclude: /styles\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /styles\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
                options: {
                    sources: false,
                    minimize: false
                },
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            name: 'assets/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
            ignoreOrder: false
        }),

        new CopyPlugin (
            {
                patterns: [
                    { from: 'src/assets/', to: 'assets/' }
                ]
            }
        ),
        new CleanWebpackPlugin(),
    ]
}