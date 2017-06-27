var path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './webpack.entry.js',
    output: {
        filename: 'webpack.bundle.js',
        path: path.resolve(__dirname, './build'),
        publicPath: ''
    },
    context: __dirname,
    module: {
        loaders: [{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                loader: 'css-loader'
            })
        },{
            test: /\.(jpg|png)$/,
            loader: [
                'url-loader?limit=10000&name=img/[name].[ext]'
            ]
        },{
            test: /\.html$/,
            loader: [
                'html-loader'
            ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: 'index.html'
        }),
        new ExtractTextPlugin('style.css')
    ]
};