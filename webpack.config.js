var _ = require('lodash');
var minimist = require('minimist');
var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var PARAMS_DEFAULT = {
    resolve: {
        extensions: ['', '.js', '.html']
    },
    entry: {
        bundle: './src/main/webapp/app/index.js'
    },
    output: {
        path: './build/webapp',
        filename: '[name].js',
        sourceMapFilename: '[name].map'
    },
    plugins: [
        new webpack.ProvidePlugin({
            moment: 'moment/moment',
            $: "jquery",
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new CleanWebpackPlugin(['build/webapp']),
        
        new HtmlWebpackPlugin({
            inject: 'head',
            template: './src/main/webapp/index.html'
        })
    ],
    progress: true,
    colors: true
};
var PARAMS_PER_TARGET = {
    TEST : {
        devtool: 'inline-source-map',
        plugins: [
            new webpack.DefinePlugin({
                ON_TEST : true
            })
        ]
    },
    BUILD: {
        debug: true,
        devtool: 'cheap-module-eval-source-map',
        plugins: [
            new webpack.DefinePlugin({
                ON_TEST : false
            })
        ]
    },
    DIST: {
        debug: false,
        devtool : 'cheap-module-source-map',
        output : {
            filename: '[name].[chunkhash].js',
            sourceMapFilename: '[name].[chunkhash].map'
        },
        plugins: [
            new webpack.DefinePlugin({
                ON_TEST : false
            }),
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.UglifyJsPlugin({
                mangle: false,
                compress: {
                    warnings: false
                }
            })
        ]
    }
};
var TARGET = minimist(process.argv.slice(2)).TARGET || 'BUILD';
var params = _.mergeWith(PARAMS_DEFAULT, PARAMS_PER_TARGET[TARGET], _mergeArraysCustomizer);

module.exports = {
    resolve: params.resolve,
    entry: params.entry,
    output: params.output,
    module: {
        loaders: [
            {test: /\.js$/, loader: 'ng-annotate', exclude: /(\.test.js$|node_modules)/},
            {test: /\.css$/, loader: 'style!css'},
            {test: /\.scss$/, loader: 'style!css!sass'},
            {test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)(\?[a-z0-9=\.]+)?$/, loader: 'url?limit=100000' },
            {test: /\.html$/, loader: 'raw'},
        ]
    },
    plugins: params.plugins,
    devServer: params.devServer,
    debug: params.debug,
    devtool: params.devtool,
    progress: params.progress,
    colors: params.colors
};

function _mergeArraysCustomizer(a, b) {
    if (_.isArray(a)) {
        return a.concat(b);
    }
}