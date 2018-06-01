module.exports = () => ({
    parser: require('postcss-comment'),
    plugins: {
        'postcss-import': {},
        'postcss-cssnext': {},
        'cssnano': {},
    }
});
