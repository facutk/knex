var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/client.jsx',
    output: {
        path: './dist',
        filename: 'bundle.[hash].js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        host: 'localhost',
        port: 8080,
        contentBase: __dirname + '/dist/',
        proxy: {
            '/api/*' : 'http://localhost:3000',
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.template.ejs',
        })
    ]
};
