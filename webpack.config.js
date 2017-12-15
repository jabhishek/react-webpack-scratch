// @flow
module.exports = (env) => {
    return {
        entry: './client/index.js',
        output: {
            filename: 'dist/bundle.js'
        },
        module: {
            rules: [
                { test: /\.js$/, use: 'babel-loader' }
            ]
        }
    }
}