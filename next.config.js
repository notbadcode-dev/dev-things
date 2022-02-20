const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: isProd ? 'https://cdn.statically.io/gh/notbadcode-dev/dev-things/gh-pages/' : '',
}

module.exports = nextConfig
