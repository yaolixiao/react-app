var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var env = process.env.WEBPACK_ENV;
var outputfile;

var plugins = [
    new HtmlWebpackPlugin({
        title: 'my boilerplate',
        template: path.resolve(__dirname, 'templates/index.ejs'),
        inject: 'body'
    })
];

if (env == 'build') {
    var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
    plugins.push(new UglifyJsPlugin({minimize: true}));
    outputfile = 'bundle.min.js';
}
else {
    outputfile = 'bundle.js';
}

var config = {
    entry: {
        app: './app/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: outputfile,
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.less$/,
                loaders: ['style-loader', 'css-loader', 'less-loader'],
                include: path.resolve(__dirname, 'app')
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg)$/,
                loader: 'url-loader'
            },
            {
                test: /\.js[x]?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    devtool: 'source-map',
    devServer: {
        contentBase: 'dist/',
        inline: true,
        stats: {colors: true},
        port: 9090
    },
    plugins: plugins
};

module.exports = config;