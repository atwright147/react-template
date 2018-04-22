import path from 'path';
import merge from 'webpack-merge';

import common from './webpack.config.common.babel.js';

export default merge(common, {
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
});
