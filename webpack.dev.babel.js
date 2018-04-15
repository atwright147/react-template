import merge from 'webpack-merge';

import common from './webpack.common.babel.js';

export default merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: 'src',
        historyApiFallback: {
            index: '/'
        },
    }
});
