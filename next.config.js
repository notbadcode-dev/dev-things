const path = require('path');
const withPlugins = require('next-compose-plugins');
const withCSS = require('@zeit/next-css');
const withTM = require("next-transpile-modules")([
    "@adobe/react-spectrum"])

const nextConfig = {
    webpack: 4,
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    assetPrefix: process.env.NEXT_PUBLIC_ASSETS_PREFIX,
    poweredByHeader: false,
    webpack(config, options) {
        const { isServer } = options;
        config.resolve.alias = {
            ...config.resolve.alias,
            '@components': path.resolve('./src/shared/components'),
            '@public': path.resolve('./public'),
        };

        config.module.rules.push({
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name]-[hash:8].[ext]',
                        publicPath: (url) => {
                            return `/_next/static/css/${url}`;
                        },
                        outputPath: `${isServer ? '../' : ''}static/css/`,
                        esModule: false,
                    },
                },
            ],
        });

        return config;
    },
};

module.exports = {
    reactStrictMode: true,
}