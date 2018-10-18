const path = require('path')
const env = process.env.NODE_ENV || 'development'

module.exports = {
    entry: ['./app'],
    output: {
        path: path.resolve(__dirname),
        filename: 'dist/bundle.js'
    },
    mode: env,
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
}
