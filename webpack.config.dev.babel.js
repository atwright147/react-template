import merge from 'webpack-merge';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

import common from './webpack.config.common.babel.js';

export default merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: 'src',
        historyApiFallback: {
            index: '/'
        },
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader', 
                            options: { importLoaders: 1 }
                        },
                        'postcss-loader'
                    ]
                })
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].bundle.css',
            disable: false,
            allChunks: true
        }),
    ]
});
