const production = process.env.NODE_ENV === 'production';

/** @type {import('@vue/cli-service').ProjectOptions} */
module.exports = {
    runtimeCompiler: true,
    publicPath: production ? '/dist/' : '/',
    devServer: {
        port: 3000,
        public: 'credsman.ddev.site:3000/',
        overlay: true,
        disableHostCheck: true,
        hot: true,
    },
    configureWebpack: {
        watchOptions: {
            ignored: /node_modules/,
            aggregateTimeout: 300,

            // WSL2 support
            poll: 5,
        },
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import '@/styles/app.scss';`,
            },
        },
    },
};
