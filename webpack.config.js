var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './sourcecode/index.js'
    ],
    devtool: "eval",
    output: {
        path: __dirname,
        filename: "build/js.js"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        loaders: [{
            test: /\.js?$/,
            include: path.join(__dirname, './sourcecode'),
            loaders: ['react-hot', 'babel'],
        }]
    }
};