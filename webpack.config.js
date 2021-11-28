const path = require(`path`);
const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

module.exports = {
    mode: 'development',
    entry: `./src/index.tsx`,
    output: {
        filename: `bundle.js`,
        path: path.join(__dirname, `public`),
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, './public'),
        },
        port: 3000,
        hot: isDev,
        open: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: `babel-loader`,
                },
            },
            {
                test: /\.(tsx|ts)?$/,
                loader: `ts-loader`,
            },
        ],
    },
    resolve: {
        extensions: [`.ts`, `.tsx`, `.js`, `json`],
    },
    devtool: `source-map`,
};