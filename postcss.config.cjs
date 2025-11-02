module.exports = {
    plugins: {
        'postcss-easing-gradients': {},
        '@csstools/postcss-global-data': {
            files: ['./src/assets/css/postcss/custom-media.css'],
            prepend: true
        },
        'postcss-custom-media': {}
    }
}