const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: isProd ? 'https://cdn.statically.io/gh/notbadcode-dev/notbadcode-dev.github.io/dev-things/gh-pages/' : '',
}

module.exports = nextConfig
