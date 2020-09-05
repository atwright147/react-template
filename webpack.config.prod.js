const path = require('path');
const { merge } = require('webpack-merge');

const common = require('./webpack.config.common.js');

export default merge(common, {
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
});
