import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';

import common from './webpack.common.babel.js';

export default merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: 'src',
        historyApiFallback: {
            index: '/'
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
    ]
});
