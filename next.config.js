const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    // basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    // assetPrefix: process.env.NEXT_PUBLIC_ASSETS_PREFIX,
    // reactStrictMode: true,
    // rootPaths: ["./src"],
    // webpack(config, options) {
    //     const { isServer } = options;
    //     config.resolve.alias = {
    //         ...config.resolve.alias,
    //         "@components": path.resolve("./components"),
    //         "@public": path.resolve("./public"),
    //         "@redux": path.resolve("./redux"),
    //         "@utils": path.resolve("./utils"),
    //     };
    //     config.module.rules.push({
    //         test: /\.(woff|woff2|eot|ttf|otf)$/,
    //         use: [
    //             {
    //                 loader: "file-loader",
    //                 options: {
    //                     name: "[name]-[hash:8].[ext]",
    //                     publicPath: (url) => {
    //                         console.log(url);
    //                         return `/dev-tings/_next/static/css/${url}`;
    //                     },
    //                     outputPath: `${isServer ? "../" : ""}static/css/`,
    //                     esModule: false,
    //                 },
    //             },
    //         ],
    //     });
    //     return config;
    // },
};

module.exports = nextConfig;
