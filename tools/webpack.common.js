const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: ['./src/index.ts'],
    externalsPresets: { node: true }, 
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader'
            }
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../build'),
        clean: true
    },
};