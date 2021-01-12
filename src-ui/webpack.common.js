const path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
    devtool: 'eval-source-map',
    entry: path.resolve(__dirname,'src','index.ts'),
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['ts-loader'],
                include: [path.resolve(__dirname,'src')]
            },
            {
                test: /\.html$/i,
                use: ['html-loader'],
            },
            {
                test: /\.(eot|otf|ttf|woff|woff2|svg|png|jpeg)$/i,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "images"
                    }
                }
            },
            {
                test: /\.css$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      publicPath: '',
                    },
                  },
                  'css-loader',],
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    plugins: [  new HtmlWebpackPlugin({template: path.resolve(__dirname,'src','template.html')}), 
                new MiniCssExtractPlugin({filename: "[name].css"})   ]  
}