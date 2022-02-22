const isProd = process.env.NODE_ENV === 'production'

const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        PUBLIC_URL: "https://notbadcode-dev.github.io/dev-things/",
        assetPrefix: './'
    }
}

module.exports = nextConfig
