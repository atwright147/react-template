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
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            outputPath: 'dist/'
                        }
                    },
                    // {
                    //     loader: 'postcss-loader',
                    //     options: {
                    //         sourceMap: true
                    //     }
                    // },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            outputPath: 'dist/'
                        }
                    }]
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
