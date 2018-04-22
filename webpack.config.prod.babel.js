import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import merge from 'webpack-merge';

import common from './webpack.config.common.babel.js';

export default merge(common, {
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
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
            filename: 'styles.css',
            disable: false,
            allChunks: true
        }),
    ]
});
