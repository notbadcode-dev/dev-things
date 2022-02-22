const isProd = process.env.NODE_ENV === 'production'
const withCSS = require('@zeit/next-css')

/** @type {import('next').NextConfig} */
const nextConfig = withCSS({
    cssModules: true  // After true than use import statement in next.js
    })

module.exports = nextConfig
